import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://thejohny71.github.io/alfie-enterprise-v2/',
  build: {
    outDir: 'docs',
    sourcemap: true
  }
});
