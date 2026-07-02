import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ── Hook detect mobile — tái sử dụng, giống HeroParallax ─────────────────────
function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

/**
 * FeatureScrollytelling
 * ─────────────────────────────────────────────────────────────────────────────
 * Kể chuyện qua scroll: từng card tính năng xuất hiện lần lượt khi vào
 * viewport, với hiệu ứng trượt từ dưới lên + fade-in + delay tăng dần.
 *
 * Kỹ thuật framer-motion dùng:
 *   · variants          → định nghĩa trạng thái "ẩn" và "hiện" tái sử dụng
 *   · whileInView       → kích hoạt animation khi element vào viewport
 *   · viewport.once     → chỉ play 1 lần (không loop lại khi cuộn lên/xuống)
 *   · viewport.amount   → chỉ trigger khi 20% card đã vào màn hình
 *   · transition.delay  → mỗi card trễ hơn card trước 0.15s → hiệu ứng "cascade"
 *
 * Lắp vào App.jsx: thay <FeaturesSection /> bằng <FeatureScrollytelling />
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Dữ liệu tính năng — tách khỏi JSX cho dễ bảo trì ────────────────────────
const FEATURES = [
  {
    id: 'sensor',
    icon: 'precision_manufacturing',
    label: 'Độ Chính Xác Tuyệt Đối',
    title: 'Cảm biến Focus Pro 35K',
    description:
      'Cảm biến quang học Gen-2 tiên tiến nhất, theo dõi từng chuyển động pixel hoàn hảo trên mọi bề mặt, kể cả kính. DPI tối đa 35.000, không giảm tốc, không bỏ sót frame.',
    stat: '35,000',
    statLabel: 'DPI tối đa',
    delay: 0,
  },
  {
    id: 'polling',
    icon: 'bolt',
    label: 'Phản Hồi Siêu Tốc',
    title: 'HyperPolling 8000Hz',
    description:
      'Tốc độ phản hồi cực nhanh, truyền tín hiệu gấp 8 lần so với chuột thông thường. Mỗi lệnh được xử lý trong 0.125ms — loại bỏ hoàn toàn độ trễ cảm nhận được.',
    stat: '8,000Hz',
    statLabel: 'Polling Rate',
    delay: 0.15,
  },
  {
    id: 'weight',
    icon: 'speed',
    label: 'Thiết Kế Tối Giản',
    title: 'Trọng lượng siêu nhẹ 54g',
    description:
      'Thiết kế công thái học tối giản, tối ưu hóa vật liệu để mang lại sự linh hoạt tối đa mà không giảm độ bền. Nhẹ hơn 20% so với thế hệ trước mà vẫn giữ nguyên cấu trúc.',
    stat: '54g',
    statLabel: 'Trọng lượng',
    delay: 0.30,
  },
];

// ── Variants: desktop version (giữ nguyên) ──────────────────────────────────
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

// ── Variants: mobile version (loại bỏ scale và giảm y để cải thiện hiệu năng) ──
const cardVariantsMobile = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ── Sub-component: Feature Card ───────────────────────────────────────────────
function FeatureCard({ feature, isMobile }) {
  // Mobile: dùng variants đơn giản hơn (không scale), delay ngắn hơn
  const mobileDelay = feature.delay * 0.5; // giảm cascade delay xuống 50%
  const activeVariants = isMobile ? cardVariantsMobile : cardVariants;

  return (
    <motion.div
      variants={activeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: isMobile ? 0.45 : 0.65,
        delay: isMobile ? mobileDelay : feature.delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      // whileHover: chỉ bật trên desktop (touch device không có hover state)
      {...(!isMobile && {
        whileHover: { y: -6, transition: { duration: 0.2, ease: 'easeOut' } },
      })}
      className="relative bg-zinc-900/60 border border-zinc-800 p-8 rounded-xl group cursor-default backdrop-blur-sm overflow-hidden"
    >
      {/* Viền xanh hiện khi hover — transition CSS */}
      <div className="absolute inset-0 rounded-xl border border-green-500/0 group-hover:border-green-500/40 transition-colors duration-300 pointer-events-none" />

      {/* Glow xanh lá ở góc trên trái */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500 pointer-events-none" />

      {/* Badge label nhỏ */}
      <span className="inline-block text-xs font-bold text-green-500 tracking-widest uppercase mb-4 px-2 py-1 bg-green-500/10 rounded">
        {feature.label}
      </span>

      {/* Icon */}
      <span className="material-symbols-outlined text-4xl text-green-500 mb-4 block group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </span>

      {/* Stat số lớn */}
      <div className="text-4xl font-extrabold text-white tracking-tight mb-1">
        {feature.stat}
      </div>
      <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
        {feature.statLabel}
      </div>

      {/* Đường kẻ phân cách */}
      <div className="w-12 h-0.5 bg-green-500/40 mb-5 group-hover:w-full transition-all duration-500" />

      {/* Tiêu đề và mô tả */}
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

// ── Component chính ───────────────────────────────────────────────────────────
export default function FeatureScrollytelling() {
  const isMobile = useMobileDetect();

  return (
    <section
      id="features"
      className="py-24 px-6 bg-zinc-900 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section title — xuất hiện trước các card */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.5, ease: 'easeOut' }}
            className="inline-block text-green-500 text-xs font-bold tracking-widest uppercase mb-4 origin-left"
          >
            ── Công Nghệ Đỉnh Cao ──
          </motion.span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Được thiết kế để{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              thống trị
            </span>
          </h2>
        </motion.div>

        {/* Grid 3 card — mỗi card có delay tăng dần */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} isMobile={isMobile} />
          ))}
        </div>

        {/* Bottom CTA — xuất hiện cuối cùng */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 text-sm">
            Và còn nhiều hơn nữa —{' '}
            <a
              href="https://www.razer.com/gaming-mice/razer-viper-v4-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 underline underline-offset-4 transition-colors"
            >
              xem thông số đầy đủ
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
