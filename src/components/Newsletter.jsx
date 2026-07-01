import { useState } from 'react';
import emailjs from '@emailjs/browser';

// ── Cấu hình — thay URL webhook Discord thực tế của bạn vào đây ───────────────
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1510999536691052675/UHqzQYSKw_s-oRELpF-9r1C08pc3L8ATeu4fLLWhVkrtzlcOCI2uuskcLgihQj2gMgI6';

// ── EmailJS credentials (đã fix cứng theo yêu cầu) ───────────────────────────
const EMAILJS_SERVICE_ID = 'service_6xqi5ok';
const EMAILJS_TEMPLATE_ID = 'template_a586ogp';
const EMAILJS_PUBLIC_KEY = '0XJi9vFGZnnsZnKFc';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      // ── Thực thi 2 tác vụ ĐỒNG THỜI bằng Promise.all ──────────────────────
      // Cả 2 request được bắn cùng lúc, không chờ cái này xong mới bắn cái kia.
      // Tổng thời gian chờ = max(t1, t2) thay vì t1 + t2.
      await Promise.all([

        // Tác vụ 1: Gửi email xác nhận qua EmailJS
        // ── GỬI ĐỦ CÁC TÊN BIẾN PHỔ BIẾN ─────────────────────────────────
        // Lỗi "recipients address is empty" xảy ra khi trường "To Email"
        // trong EmailJS template dùng tên biến khác với tên mình gửi lên.
        // Gửi tất cả biến phổ biến để template tìm được đúng tên:
        //   · to_email   → EmailJS default template variable
        //   · email      → biến ngắn gọn
        //   · user_email → tên đã dùng ban đầu
        //   · reply_to   → dùng làm địa chỉ Reply-To trong nhiều template
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_email:   email,
            email:      email,
            user_email: email,
            reply_to:   email,
          },
          EMAILJS_PUBLIC_KEY
        ),

        // Tác vụ 2: Bắn thông báo đến Discord Webhook
        fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `📬 Có người mới đăng ký nhận tin: **${email}**`,
          }),
        }),
      ]);

      alert('Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận tin từ Razer.');
      setEmail(''); // Xóa trắng input sau khi thành công
    } catch (error) {
      console.error('[Newsletter] Lỗi gửi đăng ký:', error);
      alert(`Đăng ký thất bại. Vui lòng thử lại.\n\nLỗi: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-zinc-900 border-t border-b border-zinc-800"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Tiêu đề */}
        <span className="inline-block text-xs font-bold text-green-500 tracking-widest uppercase mb-4 px-2 py-1 bg-green-500/10 rounded">
          Cộng Đồng Razer
        </span>
        <h2 className="text-3xl font-bold text-white mb-3">
          Cập Nhật Thông Tin
        </h2>
        <p className="text-zinc-400 mb-8 text-base">
          Đăng ký để nhận tin tức mới nhất về phần mềm, thiết bị và ưu đãi độc quyền từ Razer.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch"
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Nhập email của bạn..."
            disabled={isSubmitting}
            className={[
              'flex-1 min-w-0 sm:max-w-sm',
              'bg-zinc-800 border border-zinc-700 rounded-md',
              'px-4 py-3 text-white placeholder-zinc-500 text-sm',
              'focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500',
              'transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed',
            ].join(' ')}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={[
              'px-7 py-3 rounded-md font-bold text-sm uppercase tracking-widest',
              'transition-all duration-200 whitespace-nowrap',
              'flex items-center justify-center gap-2',
              isSubmitting
                ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                : 'bg-green-500 text-zinc-900 hover:bg-green-400 active:scale-[0.97] shadow-[0_0_16px_rgba(34,197,94,0.3)] hover:shadow-[0_0_24px_rgba(34,197,94,0.5)]',
            ].join(' ')}
          >
            {isSubmitting ? (
              <>
                {/* Spinner thuần CSS — không cần thư viện */}
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Đang xử lý...
              </>
            ) : (
              'Đăng Ký'
            )}
          </button>
        </form>

        {/* Disclaimer nhỏ */}
        <p className="mt-4 text-zinc-600 text-xs">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
        </p>
      </div>
    </section>
  );
}
