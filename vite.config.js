import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you plan to deploy to GitHub Pages or another subdirectory
  // uncomment and adjust the base path as needed
  // base: '/unmasking-together/',
})