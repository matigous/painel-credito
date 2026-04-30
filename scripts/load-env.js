#!/usr/bin/env node

/**
 * Script para carregar variáveis do .env.local e gerar arquivo TypeScript
 * Executado antes do build para injetar as variáveis no Angular
 */

const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
const outputPath = path.join(__dirname, '..', 'src', 'environments', 'env.generated.ts');

// Valores padrão
const defaultEnv = {
  FIREBASE_API_KEY: 'YOUR_API_KEY_HERE',
  FIREBASE_AUTH_DOMAIN: 'YOUR_PROJECT.firebaseapp.com',
  FIREBASE_PROJECT_ID: 'YOUR_PROJECT_ID',
  FIREBASE_STORAGE_BUCKET: 'YOUR_PROJECT.firebasestorage.app',
  FIREBASE_MESSAGING_SENDER_ID: 'YOUR_MESSAGING_SENDER_ID',
  FIREBASE_APP_ID: 'YOUR_APP_ID',
};

let envVars = { ...defaultEnv };

// Tenta ler o arquivo .env.local
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=').trim();
      if (key && value) {
        envVars[key.trim()] = value;
      }
    }
  });
  console.log('✓ Variáveis carregadas de .env.local');
} else {
  console.warn('⚠ Arquivo .env.local não encontrado, usando valores padrão');
}

// Gera o arquivo TypeScript
const tsContent = `/**
 * AUTO-GERADO: Do NOT edit manually!
 * Este arquivo é gerado automaticamente pelo script build:env
 * com base no arquivo .env.local
 */

export const ENV_VARS = {
  FIREBASE_API_KEY: '${envVars.FIREBASE_API_KEY}',
  FIREBASE_AUTH_DOMAIN: '${envVars.FIREBASE_AUTH_DOMAIN}',
  FIREBASE_PROJECT_ID: '${envVars.FIREBASE_PROJECT_ID}',
  FIREBASE_STORAGE_BUCKET: '${envVars.FIREBASE_STORAGE_BUCKET}',
  FIREBASE_MESSAGING_SENDER_ID: '${envVars.FIREBASE_MESSAGING_SENDER_ID}',
  FIREBASE_APP_ID: '${envVars.FIREBASE_APP_ID}',
};
`;

fs.writeFileSync(outputPath, tsContent);
console.log(`✓ Arquivo gerado: ${outputPath}`);
