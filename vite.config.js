import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/', // 👈 ensures correct asset paths in production
  build: {
    outDir: 'dist', // Vercel expects 'dist' as default
  },
  resolve: {
    alias: {
      '@': '/src', // optional but handy for imports
    },
  },
})
