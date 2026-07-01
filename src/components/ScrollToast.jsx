import { useState, useEffect, useRef } from 'react';

/**
 * ScrollToast
 * ─────────────────────────────────────────────────────────────────────────────
 * Hiển thị một toast trượt từ trái vào khi người dùng cuộn quá 70% chiều cao
 * trang. Sau khi đóng (nhấn X), toast sẽ KHÔNG hiện lại trong phiên đó.
 *
 * Lắp vào App.jsx: <ScrollToast />
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function ScrollToast() {
  const [isVisible, setIsVisible] = useState(false);
  // useRef thay vì useState cho flag "đã đóng" để KHÔNG gây re-render
  // và KHÔNG bị reset khi component re-render vì lý do khác.
  const hasDismissed = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Không xử lý gì nếu người dùng đã tắt toast rồi
      if (hasDismissed.current) return;

      // Tính phần trăm trang đã cuộn
      // scrollHeight - clientHeight = tổng khoảng có thể cuộn
      const scrolled = window.scrollY;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;

      // Tránh chia cho 0 trên trang quá ngắn
      if (totalScrollable <= 0) return;

      const scrollPercent = scrolled / totalScrollable;

      if (scrollPercent >= 0.7) {
        setIsVisible(true);
      }
    };

    // passive: true → trình duyệt KHÔNG cần đợi handler trước khi scroll
    // → cải thiện hiệu năng cuộn, đặc biệt trên Mobile (quan trọng cho PageSpeed)
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── Cleanup: bắt buộc phải có để tránh memory leak ──────────────────────
    // Khi component unmount, listener bị gỡ ra khỏi window.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] → chỉ đăng ký/gỡ 1 lần duy nhất

  const handleDismiss = () => {
    // Đánh dấu đã đóng → handler scroll sẽ bỏ qua mọi lần gọi tiếp theo
    hasDismissed.current = true;
    setIsVisible(false);
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className={[
        // ── Vị trí: góc trái, giữa màn hình theo chiều dọc ────────────────
        'fixed left-4 bottom-8 z-[80]',
        'max-w-xs w-[calc(100%-2rem)] sm:max-w-sm',
        // ── Giao diện ────────────────────────────────────────────────────────
        'bg-zinc-900 border border-green-500 rounded-xl',
        'shadow-[0_0_24px_rgba(34,197,94,0.25)]',
        'px-4 py-3 pr-10',
        // ── Animation: trượt từ trái vào / ra ────────────────────────────────
        // Dùng translate + opacity + transition thuần CSS, không cần Framer Motion
        'transition-all duration-500 ease-out',
        isVisible
          ? 'translate-x-0 opacity-100'
          : '-translate-x-[110%] opacity-0 pointer-events-none',
      ].join(' ')}
    >
      {/* Nội dung */}
      <p className="text-white text-sm leading-relaxed">
        💡{' '}
        <span className="font-semibold text-green-400">Đang phân vân thông số?</span>{' '}
        Nhấn vào biểu tượng Chatbot góc phải để AI tư vấn ngay!
      </p>

      {/* Nút đóng X */}
      <button
        onClick={handleDismiss}
        aria-label="Đóng thông báo"
        className={[
          'absolute top-2 right-2',
          'text-zinc-400 hover:text-white',
          'transition-colors duration-200',
          'p-1 rounded-md hover:bg-zinc-700',
        ].join(' ')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
