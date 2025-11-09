// Runtime configuration helper
// Fetches configuration from backend API endpoint for security

interface RuntimeConfig {
  BACKEND_URL: string;
  GA_MEASUREMENT_ID: string;
}

declare global {
  interface Window {
    __RUNTIME_CONFIG__?: RuntimeConfig;
    __RUNTIME_CONFIG_PROMISE__?: Promise<RuntimeConfig>;
  }
}

// Fetch configuration from backend API
async function fetchRuntimeConfig(): Promise<RuntimeConfig> {
  try {
    const response = await fetch('/api/config');
    if (!response.ok) {
      throw new Error('Failed to fetch runtime config');
    }
    const config = await response.json();
    return config;
  } catch (error) {
    console.warn('Failed to fetch runtime config, using fallback values:', error);
    // Fallback to build-time env if API call fails
    return {
      BACKEND_URL: import.meta.env.VITE_BACKEND_URL || 'https://business.easyreserv.io/api',
      GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || ''
    };
  }
}

// Initialize config loading (singleton pattern)
if (!window.__RUNTIME_CONFIG_PROMISE__) {
  window.__RUNTIME_CONFIG_PROMISE__ = fetchRuntimeConfig().then(config => {
    window.__RUNTIME_CONFIG__ = config;
    return config;
  });
}

// Synchronous getter with cached values
const getConfig = (key: keyof RuntimeConfig): string => {
  // Return cached value if available
  if (window.__RUNTIME_CONFIG__) {
    return window.__RUNTIME_CONFIG__[key] || '';
  }

  // Fallback to build-time env while loading
  const envKey = `VITE_${key}` as keyof ImportMetaEnv;
  return (import.meta.env[envKey] as string) || '';
};

// Export synchronous config object (uses cached values)
export const config = {
  get BACKEND_URL() {
    return getConfig('BACKEND_URL');
  },
  get GA_MEASUREMENT_ID() {
    return getConfig('GA_MEASUREMENT_ID');
  }
};

// Export promise for components that need to wait for config
export const configReady = window.__RUNTIME_CONFIG_PROMISE__;

export default config;
