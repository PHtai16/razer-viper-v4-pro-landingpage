import { useState, useRef } from 'react';
// emailjs KHÔNG import tĩnh — chỉ load khi user thực sự submit form
// Giảm initial bundle size ~44KB (gzipped) → cải thiện TTI/TBT trên Mobile

const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Cache module sau lần tải đầu tiên — tránh dynamic import mỗi lần submit
    const emailjsRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsSubmitting(true);

        const webhookPromise = fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `📬 Có người mới đăng ký nhận tin: **${email}**`,
            }),
        });

        // Dynamic import emailjs — chỉ tải lần đầu, sau đó dùng cache
        if (!emailjsRef.current) {
            const mod = await import('@emailjs/browser');
            emailjsRef.current = mod.default;
        }
        const emailjs = emailjsRef.current;

        const emailPromise = emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                to_email: email,
                email: email,
                user_email: email,
                reply_to: email,
            },
            EMAILJS_PUBLIC_KEY
        );

        try {
            await Promise.allSettled([webhookPromise, emailPromise]);
            alert('Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận tin từ Razer.');
            setEmail('');
        } catch (error) {
            console.error('[Newsletter] Lỗi:', error);
            alert('Đã ghi nhận yêu cầu của bạn.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-zinc-900 border-t border-b border-zinc-800">
            <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block text-xs font-bold text-green-500 tracking-widest uppercase mb-4 px-2 py-1 bg-green-500/10 rounded">
          Cộng Đồng Razer
        </span>
                <h2 className="text-3xl font-bold text-white mb-3">
                    Cập Nhật Thông Tin
                </h2>
                <p className="text-zinc-400 mb-8 text-base">
                    Đăng ký để nhận tin tức mới nhất về phần mềm, thiết bị và ưu đãi độc quyền từ Razer.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-stretch" noValidate>
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
                                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                                Đang xử lý...
                            </>
                        ) : (
                            'Đăng Ký'
                        )}
                    </button>
                </form>

                <p className="mt-4 text-zinc-600 text-xs">
                    Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
                </p>
            </div>
        </section>
    );
}