import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Nama ini harus SAMA PERSIS dengan nama repository di GitHub
  base: '/portofolio-pushbike/', 
})