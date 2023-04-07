/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      exclude: [
        '**/interfaces.ts',
        '**/vite.config.ts',
        '**/.eslintrc.cjs',
        '**/.prettierrc.cjs',
        '**/index-cc771fc8.js',
        '**/vite-env.d.ts',
        '**/constants.ts',
      ],
    },
  },
});
