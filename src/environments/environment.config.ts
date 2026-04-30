/**
 * Environment Configuration Loader
 * Loads Firebase configuration from generated env variables
 */

import { ENV_VARS } from './env.generated';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface EnvironmentConfig {
  production: boolean;
  firebase: FirebaseConfig;
}

/**
 * Create environment configuration from injected environment variables
 */
export function createEnvironmentConfig(isProduction: boolean): EnvironmentConfig {
  return {
    production: isProduction,
    firebase: {
      apiKey: ENV_VARS.FIREBASE_API_KEY,
      authDomain: ENV_VARS.FIREBASE_AUTH_DOMAIN,
      projectId: ENV_VARS.FIREBASE_PROJECT_ID,
      storageBucket: ENV_VARS.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: ENV_VARS.FIREBASE_MESSAGING_SENDER_ID,
      appId: ENV_VARS.FIREBASE_APP_ID,
    },
  };
}
