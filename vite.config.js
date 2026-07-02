import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    minify: 'esbuild',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1600, // Tăng lên 1600 để chặn cảnh báo vàng rác mắt
  },

  esbuild: {
    // Tự động xóa sạch các dòng console.log khi build lên mạng
    drop: ['console', 'debugger'],
  },
})