import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      target: 'es2015',
    },
  },
  build: {
    target: 'es2015',
  },
  esbuild: {
    target: 'es2015',
  },
});
