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
    // Giảm ngưỡng cảnh báo chunk size
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Tách vendor chunks riêng → trình duyệt cache độc lập + giảm main bundle
        manualChunks: (id) => {
          // React core → chunk nhỏ, luôn cần
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // Framer Motion → chunk lớn nhất (~150KB gz), tách riêng để lazy load hiệu quả
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer-motion';
          }
          // EmailJS → chỉ cần khi submit form, tách ra để dynamic import hiệu quả
          if (id.includes('node_modules/@emailjs')) {
            return 'vendor-emailjs';
          }
        },
      },
    },
  },
})