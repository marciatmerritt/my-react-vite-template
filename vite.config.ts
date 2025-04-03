/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },
    server: {
      port: parseInt(env.VITE_PORT || '5173'),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'tests/setupTests.ts',
      coverage: {
        provider: `v8`,
        reporter: ['text', 'json', 'html', 'lcov'],
        include: ['src/**'],
        exclude: ['src/tests/**', 'tests/**'],
      },
    },
  };
});
