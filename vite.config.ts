import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~/app', replacement: resolve(__dirname, './src/app') },
      { find: '~/pages', replacement: resolve(__dirname, './src/pages') },
      { find: '~/widgets', replacement: resolve(__dirname, './src/widgets') },
      {
        find: '~/features',
        replacement: resolve(__dirname, './src/features'),
      },
      {
        find: '~/entities',
        replacement: resolve(__dirname, './src/entities'),
      },
      { find: '~/shared', replacement: resolve(__dirname, './src/shared') },
    ],
  },
  build: {
    target: 'es2022',
    outDir: 'build',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL,
        changeOrigin: true,
      },
    },
  },
});
