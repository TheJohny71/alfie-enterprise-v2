import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/alfie-enterprise-v2/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'docs',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
