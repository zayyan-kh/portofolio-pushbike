import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Pastikan nama di bawah ini SAMA PERSIS dengan nama repository Anda di GitHub
  base: '/portofolio-pushbike/', 
})