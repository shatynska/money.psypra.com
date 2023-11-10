import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~/app', replacement: resolve(__dirname, './src/1-app') },
      { find: '~/pages', replacement: resolve(__dirname, './src/2-pages') },
      { find: '~/widgets', replacement: resolve(__dirname, './src/3-widgets') },
      {
        find: '~/features',
        replacement: resolve(__dirname, './src/4-features'),
      },
      {
        find: '~/entities',
        replacement: resolve(__dirname, './src/5-entities'),
      },
      { find: '~/shared', replacement: resolve(__dirname, './src/6-shared') },
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
