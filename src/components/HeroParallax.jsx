import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HeroParallax
 * ─────────────────────────────────────────────────────────────────────────────
 * Tạo hiệu ứng parallax 2 lớp:
 *   · Lớp ảnh chuột  → cuộn chậm hơn (y: 0 → +120px) — cảm giác "đứng sau"
 *   · Lớp text/nút   → cuộn nhanh hơn (y: 0 → -80px)  — cảm giác "đứng trước"
 *
 * Nguyên lý hoạt động:
 *   useScroll({ target: ref }) đo tiến trình scroll của section (0 → 1).
 *   useTransform() ánh xạ [0, 1] → giá trị px khác nhau cho mỗi lớp.
 *   Sự chênh lệch tốc độ này tạo ảo giác chiều sâu 3D mà không cần CSS 3D.
 *
 * Lắp vào App.jsx: thay <HeroSection /> bằng <HeroParallax />
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function HeroParallax({ onBuyClick }) {
  // ref gắn vào container section — useScroll sẽ đo scroll trong phạm vi này
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start" = bắt đầu đo khi top section chạm top viewport
    // "end start"   = kết thúc đo khi bottom section chạm top viewport
    offset: ['start start', 'end start'],
  });

  // Lớp ảnh: cuộn chậm hơn → tạo cảm giác nằm phía sau
  // Khi progress: 0 → 1, ảnh dịch xuống +150px (cuộn xuống chậm)
  const imageY = useTransform(scrollYProgress, [0, 1], ['0px', '150px']);

  // Lớp backglow: di chuyển cùng chiều nhưng chậm hơn ảnh
  const glowY = useTransform(scrollYProgress, [0, 1], ['0px', '80px']);

  // Lớp text + nút: cuộn nhanh hơn → tạo cảm giác nằm phía trước
  // Dịch ngược lên -100px khi cuộn xuống → text "vút lên" trước ảnh
  const textY = useTransform(scrollYProgress, [0, 1], ['0px', '-100px']);

  // Fade out toàn bộ hero khi cuộn gần hết
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: heroOpacity }}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden"
    >
      {/* ── Lớp 1: Backglow (cuộn chậm) ───────────────────────────────────── */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-green-500/10 blur-[120px]" />
      </motion.div>

      {/* ── Lớp 2: Ảnh sản phẩm (cuộn CHẬM hơn text) ─────────────────────── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDzK_wvkPPj-trxsXnk4sQsbinlwk5MS1CA_ZK4bR4LsZV2bGtSS7gWE8ZbN5H6CBwvlDPh7ez5yUVlMoxA9gvQdp61YGlPYfGLgHG6BGxfuIv756xroLnPfKjRTL6W-2DI4pnZpNkQHtMPgRvPc6FVTzrFcNHCkJvHTLfJrckx6XJMCRrzPVkb5C-XiAEIQ9Q8-IfDuM7J_uisHLJL1LbLaLf3xiYiFYsxmNNCMZX8FKjxkVvwLmY8ViWuND_KjiozTSBD5EhPYsX"
          alt="Razer Viper V4 Pro"
          className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
          // Ảnh hero là LCP element → KHÔNG lazy load, để trình duyệt ưu tiên
          loading="eager"
          decoding="async"
          width="1024"
          height="512"
        />
      </motion.div>

      {/* ── Lớp 3: Text + Nút CTA (cuộn NHANH hơn ảnh) ────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Text xuất hiện từ dưới lên khi page load lần đầu */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 mb-6"
        >
          RAZER VIPER V4 PRO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-lg text-zinc-400 max-w-2xl mb-12"
        >
          Thống trị mọi giải đấu với trọng lượng siêu nhẹ 54g và cảm biến 35K.
          Sự kết hợp hoàn hảo giữa thiết kế công thái học và công nghệ không dây độ trễ thấp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onBuyClick}
            className="bg-green-500 text-zinc-900 font-bold text-sm px-8 py-4 rounded-md uppercase hover:bg-green-400 transition-colors tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
          >
            Mua Ngay
          </button>
          <a
            href="https://www.razer.com/gaming-mice/razer-viper-v4-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 text-green-500 bg-transparent font-bold text-sm px-8 py-4 rounded-md uppercase hover:bg-green-500/10 transition-colors tracking-widest inline-flex items-center justify-center"
          >
            Xem Chi Tiết
          </a>
        </motion.div>
      </motion.div>

      {/* Chỉ báo cuộn xuống */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-5 h-5 border-b-2 border-r-2 border-green-500 rotate-45"
        />
      </motion.div>
    </motion.section>
  );
}
