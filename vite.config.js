import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  server:{host: true, // enable external access
    allowedHosts: ['4d92-27-59-118-125.ngrok-free.app'],}
})
