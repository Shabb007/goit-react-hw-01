import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          swc: ['@swc/wasm', '@swc/core']
        }
      }
    }
  },
  assetsInclude: ['**/*.node']
});
