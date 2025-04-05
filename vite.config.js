import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Get the absolute path to the src folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // alias for convenient paths
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/functions" as *;`, // auto import mixins and functions
      },
    },
  },
});
