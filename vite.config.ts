import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This base path must match your repository name.
  // Based on your package.json, your repo is likely named "portfolio".
  // If you name your repo something else, change this line.
  base: '/portfolio/', 
});