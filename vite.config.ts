import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/alfie-enterprise-v2/',  // This matches your GitHub repo name
  build: {
    outDir: 'docs',
    sourcemap: true,
    assetsDir: 'assets'
  }
});
