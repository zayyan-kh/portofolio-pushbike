import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Tambahkan baris ini. Pastikan namanya sama dengan nama repository GitHub Anda
  base: '/portofolio-pushbike/', 
})