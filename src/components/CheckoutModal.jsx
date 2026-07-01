import { useState, useEffect } from 'react';

// ── Cấu hình ──────────────────────────────────────────────────────────────────
// Thay 'LINK_DISCORD_CUA_TOI' bằng Webhook URL thực tế của bạn.
// Lấy tại: Server Discord → Cài đặt kênh → Tích hợp → Webhooks → Tạo Webhook.
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1510999536691052675/UHqzQYSKw_s-oRELpF-9r1C08pc3L8ATeu4fLLWhVkrtzlcOCI2uuskcLgihQj2gMgI6';

const BASE_PRICE = 159.99;
const FAST_DELIVERY_FEE = 15.00;

export default function CheckoutModal({ isOpen, onClose }) {
  // ── State form ───────────────────────────────────────────────────────────────
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── State giao hàng ──────────────────────────────────────────────────────────
  const [fastDelivery, setFastDelivery] = useState('');
  const [freeDelivery, setFreeDelivery] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('free');
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

  // Tính ngày giao hàng
  useEffect(() => {
    const formatDate = (daysToAdd) => {
      const date = new Date();
      date.setDate(date.getDate() + daysToAdd);
      return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    };
    setFastDelivery(`${formatDate(2)} - ${formatDate(3)}`);
    setFreeDelivery(`${formatDate(7)} - ${formatDate(9)}`);
  }, []);

  // Cập nhật tổng tiền
  useEffect(() => {
    setTotalPrice(deliveryMethod === 'fast' ? BASE_PRICE + FAST_DELIVERY_FEE : BASE_PRICE);
  }, [deliveryMethod]);

  // ── Handler input ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ── Submit & gửi Webhook ─────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Payload gửi đến Discord Webhook (format "embeds" hiển thị đẹp hơn plain text)
    const payload = {
      username: 'Razer Store Bot 🖱️',
      avatar_url: 'https://helicorp.vn/assets/hero.png',
      embeds: [
        {
          title: '🛒 ĐƠN HÀNG MỚI — Razer Viper V4 Pro',
          color: 0x22c55e, // Màu xanh lá Razer (#22c55e)
          fields: [
            { name: '👤 Khách hàng', value: formData.name, inline: true },
            { name: '📞 Số điện thoại', value: formData.phone, inline: true },
            { name: '📧 Email', value: formData.email, inline: false },
            {
              name: '🚚 Phương thức giao hàng',
              value: deliveryMethod === 'fast'
                ? `Giao nhanh — Dự kiến: ${fastDelivery}`
                : `Tiêu chuẩn (Miễn phí) — Dự kiến: ${freeDelivery}`,
              inline: false,
            },
            { name: '💵 Tổng thanh toán', value: `US$${totalPrice.toFixed(2)}`, inline: true },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'Razer Viper V4 Pro Landing Page — helicorp.vn' },
        },
      ],
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Discord trả về 204 No Content khi thành công (không có body JSON)
      if (!response.ok) {
        throw new Error(`Webhook thất bại: HTTP ${response.status}`);
      }

      alert(`✅ Đặt hàng thành công!\nCảm ơn ${formData.name}, chúng tôi sẽ liên hệ qua ${formData.phone} sớm nhất!`);
      // Reset form và đóng modal
      setFormData({ name: '', phone: '', email: '' });
      onClose();
    } catch (error) {
      // Lỗi mạng hoặc server → thông báo rõ ràng cho người dùng
      console.error('[CheckoutModal] Lỗi gửi đơn hàng:', error);
      alert(`❌ Không thể gửi đơn hàng.\nVui lòng thử lại hoặc liên hệ trực tiếp qua Chatbot.\n\nLỗi: ${error.message}`);
    } finally {
      // Dù thành công hay thất bại, luôn tắt trạng thái loading
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#111111] border border-zinc-800 rounded-t-2xl p-6 z-[70] transition-transform duration-400 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">XÁC NHẬN MUA HÀNG</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Info — dùng name để handleChange hoạt động đúng */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Họ và tên người nhận"
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded p-3 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]+"
              required
              placeholder="Số điện thoại (Chỉ nhập số)"
              title="Vui lòng chỉ nhập các chữ số"
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded p-3 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Địa chỉ Email"
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded p-3 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          {/* Delivery Options */}
          <div className="pt-4 space-y-3 border-t border-zinc-800">
            <p className="text-sm font-bold text-zinc-400 uppercase">Phương thức giao hàng</p>

            <label className="flex items-center justify-between p-3 border border-zinc-700 rounded cursor-pointer hover:border-green-500 transition-colors has-[:checked]:border-green-500 has-[:checked]:bg-green-500/10">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="delivery"
                  value="fast"
                  checked={deliveryMethod === 'fast'}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="accent-green-500 w-4 h-4"
                />
                <div>
                  <p className="text-white font-bold text-sm">Giao hàng nhanh ($15.00)</p>
                  <p className="text-zinc-400 text-xs">Dự kiến: {fastDelivery}</p>
                </div>
              </div>
            </label>

            <label className="flex items-center justify-between p-3 border border-zinc-700 rounded cursor-pointer hover:border-green-500 transition-colors has-[:checked]:border-green-500 has-[:checked]:bg-green-500/10">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="delivery"
                  value="free"
                  checked={deliveryMethod === 'free'}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="accent-green-500 w-4 h-4"
                />
                <div>
                  <p className="text-white font-bold text-sm">Giao hàng tiêu chuẩn (Miễn phí)</p>
                  <p className="text-zinc-400 text-xs">Dự kiến: {freeDelivery}</p>
                </div>
              </div>
            </label>
          </div>

          {/* Total and Submit */}
          <div className="pt-6">
            <div className="flex justify-between items-end mb-4">
              <span className="text-zinc-400">Tổng thanh toán:</span>
              <span className="text-2xl font-bold text-white">US${totalPrice.toFixed(2)}</span>
            </div>

            {/* Nút Submit — đổi text và disable khi đang gửi */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={[
                'w-full font-bold py-4 rounded uppercase tracking-widest transition-all duration-200',
                isSubmitting
                  ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                  : 'bg-green-500 text-black hover:bg-green-400 active:scale-[0.98]',
              ].join(' ')}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  {/* Spinner thuần CSS, không cần thư viện */}
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
                </span>
              ) : (
                'Xác Nhận Đặt Hàng'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
