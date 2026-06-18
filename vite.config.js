import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/litoral-alerta/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/auth': 'http://localhost:3000',
      '/noticias': 'http://localhost:3000',
      '/newsletter': 'http://localhost:3000',
      '/fotos': 'http://localhost:3000',
      '/perfil': 'http://localhost:3000',
    }
  }
})