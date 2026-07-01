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
    // ── Code Splitting (Tách chunk) ──────────────────────────────────────────
    // Mặc định Rollup gộp tất cả vào 1 file JS lớn → mobile parse chậm.
    // manualChunks tách React, UI libs ra chunk riêng → trình duyệt cache
    // vendor chunk lâu dài, chỉ tải lại app chunk khi code thay đổi.
    rollupOptions: {
      output: {
        manualChunks: {
          // Tách React core ra chunk riêng (ít thay đổi → cache lâu)
          'vendor-react': ['react', 'react-dom'],
          // Tách framer-motion ra chunk riêng (~50KB gzipped)
          'vendor-motion': ['framer-motion'],
          // Tách lucide-react (icon library) ra chunk riêng
          'vendor-ui': ['lucide-react'],
        },
      },
    },

    // ── Minification ─────────────────────────────────────────────────────────
    // 'esbuild' (default): Nhanh hơn, đủ dùng cho production.
    // Dùng 'terser' nếu muốn nén tối đa hơn (cần cài: npm i -D terser).
    minify: 'esbuild',

    // ── Inline nhỏ assets (< 4KB) thành base64 → giảm HTTP requests ─────────
    assetsInlineLimit: 4096,

    // ── Cảnh báo nếu chunk > 500KB (mặc định) ────────────────────────────────
    chunkSizeWarningLimit: 500,

    // ── Xóa console.log & debugger khỏi bản build production ─────────────────
    // Giảm JS size nhỏ, tránh lộ log ra người dùng thật.
    esbuildOptions: {
      drop: ['console', 'debugger'],
    },
  },
})