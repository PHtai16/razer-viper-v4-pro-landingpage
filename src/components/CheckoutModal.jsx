import { useState, useEffect } from 'react';

const BASE_PRICE = 159.99;
const FAST_DELIVERY_FEE = 15.00;

export default function CheckoutModal({ isOpen, onClose }) {
  const [fastDelivery, setFastDelivery] = useState('');
  const [freeDelivery, setFreeDelivery] = useState('');
  
  // State để quản lý phương thức giao hàng và tổng tiền
  const [deliveryMethod, setDeliveryMethod] = useState('free'); // Mặc định là giao hàng miễn phí
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

  // Cập nhật tổng tiền khi phương thức giao hàng thay đổi
  useEffect(() => {
    if (deliveryMethod === 'fast') {
      setTotalPrice(BASE_PRICE + FAST_DELIVERY_FEE);
    } else {
      setTotalPrice(BASE_PRICE);
    }
  }, [deliveryMethod]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tuyệt vời! Bạn đã đặt hàng thành công Razer Viper V4 Pro với tổng chi phí là $${totalPrice.toFixed(2)}.`);
    onClose();
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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">XÁC NHẬN MUA HÀNG</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Info */}
          <div>
            <input type="text" required placeholder="Họ và tên người nhận" className="w-full bg-zinc-900 border border-zinc-700 text-white rounded p-3 focus:outline-none focus:border-green-500 transition-colors" />
          </div>
          <div>
            <input type="tel" pattern="[0-9]+" required placeholder="Số điện thoại (Chỉ nhập số)" title="Vui lòng chỉ nhập các chữ số" className="w-full bg-zinc-900 border border-zinc-700 text-white rounded p-3 focus:outline-none focus:border-green-500 transition-colors" />
          </div>
          <div>
            <input type="email" required placeholder="Địa chỉ Email" className="w-full bg-zinc-900 border border-zinc-700 text-white rounded p-3 focus:outline-none focus:border-green-500 transition-colors" />
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
            <button type="submit" className="w-full bg-green-500 text-black font-bold py-4 rounded hover:bg-green-400 transition-colors uppercase tracking-widest">
              Xác Nhận Đặt Hàng
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
