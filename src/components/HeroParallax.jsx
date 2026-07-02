import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/razerv4.webp';

// ── Hook detect thiết bị mobile ──────────────────────────────────────────────
// Chạy 1 lần sau mount — không gây re-render khi resize (intentional)
// Mục tiêu: tắt scroll-linked animations trên mobile để giảm TBT / main-thread work
function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // matchMedia API: không block main thread, tương thích tốt
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    // Cập nhật nếu user xoay màn hình (portrait ↔ landscape)
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

export default function HeroParallax({ onBuyClick }) {
  const isMobile = useMobileDetect();

  // ref gắn vào container section — useScroll sẽ đo scroll trong phạm vi này
  const containerRef = useRef(null);

  // useScroll chỉ chạy trên desktop — trên mobile không cần tính toán scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // ── Motion values: DESKTOP = scroll-linked, MOBILE = giá trị tĩnh (0px) ──
  // Khi isMobile=true, các giá trị này không đổi → không có layout recalc liên tục
  const imageY       = useTransform(scrollYProgress, [0, 1], isMobile ? ['0px', '0px'] : ['0px', '150px']);
  const glowY        = useTransform(scrollYProgress, [0, 1], isMobile ? ['0px', '0px'] : ['0px', '80px']);
  const textY        = useTransform(scrollYProgress, [0, 1], isMobile ? ['0px', '0px'] : ['0px', '-100px']);
  const heroOpacity  = useTransform(scrollYProgress, [0, 0.8], isMobile ? [1, 1]       : [1, 0]);

  // Animation entry: giảm duration trên mobile để đến trạng thái cuối nhanh hơn
  const entryDuration = isMobile ? 0.4 : 0.8;

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
          src={heroImage}
          alt="Razer Viper V4 Pro"
          className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
          fetchPriority="high"
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
          transition={{ duration: entryDuration, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 mb-6"
        >
          RAZER VIPER V4 PRO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: entryDuration, delay: isMobile ? 0.1 : 0.15, ease: 'easeOut' }}
          className="text-lg text-zinc-400 max-w-2xl mb-12"
        >
          Thống trị mọi giải đấu với trọng lượng siêu nhẹ 54g và cảm biến 35K.
          Sự kết hợp hoàn hảo giữa thiết kế công thái học và công nghệ không dây độ trễ thấp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.35 : 0.7, delay: isMobile ? 0.15 : 0.3, ease: 'easeOut' }}
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
        transition={{ delay: isMobile ? 0.6 : 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Cuộn xuống</span>
        {/* Mobile: tắt bounce loop (gây re-paint liên tục) — dùng CSS animation thay thế */}
        {isMobile ? (
          <div className="w-5 h-5 border-b-2 border-r-2 border-green-500 rotate-45 animate-bounce" />
        ) : (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            className="w-5 h-5 border-b-2 border-r-2 border-green-500 rotate-45"
          />
        )}
      </motion.div>
    </motion.section>
  );
}

