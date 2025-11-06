# EasyReserv.io - Restaurant ERP & Reservation System

## Overview

EasyReserv.io is a full-stack web application designed as an ERP (Enterprise Resource Planning) solution for restaurant management. The platform aims to empower business owners with tools for employee management, mobile reservations, business insights, and inventory management, accessible anytime, anywhere. It focuses on providing a responsive user interface to streamline reservation management and enhance operational efficiency within the restaurant industry. The project includes a B2B landing page, a B2B Backend API, and an Admin Panel, all deployed under the `business.easyreserv.io` domain.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18+** with TypeScript
- **Vite** for fast HMR
- **Wouter** for routing
- **TanStack Query** for server state management
- **Shadcn/ui** (based on Radix UI) for accessible UI components
- **Tailwind CSS** for utility-first styling with custom design tokens

**Design Decisions:**
- Component-based architecture with shared UI components.
- Custom Container component for consistent grid layouts.
- Modular and reusable page sections.
- Centralized query client with custom error handling.
- Custom hooks for responsiveness and notifications.
- Design system utilizes CSS variables for theming and typography.
- Styling uses Tailwind CSS with custom configuration and CSS variables for dynamic theming.

### Backend Architecture

**Technology Stack:**
- **Express.js** with TypeScript
- **Drizzle ORM** for database interactions
- **PostgreSQL** as the primary database (Neon serverless)
- **In-memory storage layer** with an interface for CRUD operations

**Design Decisions:**
- Clean separation between storage interface and implementation.
- API routes prefixed with `/api`.
- Custom middleware for logging and error handling.
- Session management is configured.

### Data Storage

**Database Schema:**
- PostgreSQL via Neon serverless, managed with Drizzle ORM migrations.
- User table with UUID primary keys.
- Schema validation using Drizzle-Zod.

**Storage Pattern:**
- Interface-based storage layer allowing flexible implementation switching.
- Type-safe CRUD operations with shared schema types.

### Authentication & Authorization

**Current Implementation:**
- User schema with username/password fields.
- Session storage configured with `connect-pg-simple`.

**Planned Approach:**
- Session-based authentication with secure cookie storage.
- User registration and login flows with protected routes.

### SEO Implementation

The application features a comprehensive SEO system across all pages utilizing a reusable `SEO` component and centralized configuration. This includes:
- **Meta Tags:** Dynamic titles, descriptions, robots directives, canonical URLs, and language settings.
- **Open Graph Tags:** For enhanced social media sharing.
- **Twitter Cards:** For optimized Twitter previews.
- **Schema.org JSON-LD:** Structured data for Organization, WebSite, SoftwareApplication, BlogPosting, Service, and Product schemas to improve search engine understanding.
- **Page-Specific SEO:** Tailored titles and schema for Homepage, About, Solutions, Pricing, Contact, Policies, Blog, and dynamic Blog Articles.
- **Font Rendering Optimization:** CSS properties for improved text rendering across browsers and devices.

## External Dependencies

### Core Services
- **Neon Database**: Serverless PostgreSQL hosting (`@neondatabase/serverless`).

### UI & Styling Libraries
- **Radix UI**: Headless accessible UI primitives.
- **Shadcn/ui**: Component library built on Radix UI.
- **Tailwind CSS**: Utility-first CSS framework.
- **class-variance-authority**: For component styling variants.
- **Lucide React**: Icon library.

### State Management & Data Fetching
- **TanStack React Query**: Server state management.
- **React Hook Form**: Form state management with Zod resolvers.
- **Zod**: Runtime type validation.

### Development Tools
- **Replit Plugins**: For runtime error display, code mapping, and development banners.
- **Drizzle Kit**: Database migration and schema management.

### Date & Utilities
- **date-fns**: Date manipulation.
- **nanoid**: Unique ID generation.
- **cmdk**: Command palette component.

### Additional UI Components
- **vaul**: Drawer component library.
- **embla-carousel-react**: Carousel functionality.
- **react-day-picker**: Date picker.
- **input-otp**: OTP input component.
- **recharts**: Charting library.

### Build & Bundling
- **Vite**: Frontend build tool.
- **esbuild**: Backend bundling.
- **TypeScript**: Type checking and compilation.
- **tsx**: TypeScript execution for development.