# Multi-stage build for optimized production image
ARG NODE_VERSION=20-alpine
FROM node:${NODE_VERSION} AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci --silent && \
    npm cache clean --force

# Copy source code
COPY . .

ENV NODE_ENV=production

# Build the application
# 1. Build frontend with Vite
# 2. Build backend with esbuild
RUN npm run build

# Production stage
FROM node:${NODE_VERSION} AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (bundled server still references some dev deps)
RUN npm ci --silent && \
    npm cache clean --force

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Copy necessary configuration files
COPY drizzle.config.ts ./
COPY tsconfig.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs

# Set proper permissions
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000
# Runtime configuration (can be overridden at runtime)
ENV BACKEND_URL=https://business.easyreserv.io
ENV GA_MEASUREMENT_ID=

# Expose the application port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (r) => {if(r.statusCode !== 200 && r.statusCode !== 404) throw new Error('Health check failed')})" || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "dist/index.js"]
