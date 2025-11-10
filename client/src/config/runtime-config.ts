// Runtime configuration helper
// Uses environment variables directly without API calls

interface RuntimeConfig {
  BACKEND_URL: string;
  GA_MEASUREMENT_ID: string;
}

// Get configuration from environment variables
const getConfig = (key: keyof RuntimeConfig): string => {
  const defaults: RuntimeConfig = {
    BACKEND_URL: 'https://business.easyreserv.io/api',
    GA_MEASUREMENT_ID: ''
  };

  const envKey = `VITE_${key}` as keyof ImportMetaEnv;
  return (import.meta.env[envKey] as string) || defaults[key];
};

// Export synchronous config object
export const config = {
  get BACKEND_URL() {
    return getConfig('BACKEND_URL');
  },
  get GA_MEASUREMENT_ID() {
    return getConfig('GA_MEASUREMENT_ID');
  }
};

export default config;
