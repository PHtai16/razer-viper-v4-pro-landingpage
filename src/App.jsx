import React, { useState } from 'react';
import ProductAnnotation from './components/ProductAnnotation';
import CheckoutModal from './components/CheckoutModal'; // Import the modal component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans overflow-x-hidden">
      
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="text-2xl font-bold text-green-500 tracking-tight">Razer</div>
        <ul className="hidden md:flex items-center gap-8 text-base">
          <li><a className="text-green-500 font-bold border-b-2 border-green-500 pb-1 transition-colors duration-200" href="#features">Features</a></li>
          <li><a className="text-zinc-400 hover:text-green-500 transition-colors duration-200" href="#specs">Specs</a></li>
          <li><a className="text-zinc-400 hover:text-green-500 transition-colors duration-200" href="#contact">Contact</a></li>
        </ul>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-zinc-900 text-sm font-bold px-6 py-2 rounded-md uppercase hover:bg-green-400 transition-colors active:scale-95"
        >
          Mua Ngay
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] hero-backglow rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 mb-6">
                RAZER VIPER V4 PRO
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mb-12">
              Thống trị mọi giải đấu với trọng lượng siêu nhẹ 54g và cảm biến 35K. Sự kết hợp hoàn hảo giữa thiết kế công thái học và công nghệ không dây độ trễ thấp.
            </p>
            <div className="w-full max-w-2xl mb-16 relative">
              <video 
                className="w-full h-auto object-cover drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out rounded-xl"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source 
                    src="https://assets2.razerzone.com/images/pnx.assets/21cd6b3b987baf37ce411ffec58be660/razer-viper-v4-pro-video-1920x700.mp4" 
                    type="video/mp4" 
                />
              </video>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 text-zinc-900 font-bold text-sm px-8 py-4 rounded-md uppercase hover:bg-green-400 transition-colors tracking-widest razer-glow"
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
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-zinc-900 border-t border-zinc-800" id="features">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Công Nghệ Đỉnh Cao</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 border border-zinc-800 p-8 rounded-lg hover:border-green-500/50 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-green-500 mb-6 block group-hover:scale-110 transition-transform">precision_manufacturing</span>
                <h3 className="text-2xl font-semibold mb-4">Cảm biến Focus Pro 35K</h3>
                <p className="text-base text-zinc-400">Cảm biến quang học Gen-2 tiên tiến nhất, theo dõi từng chuyển động pixel hoàn hảo trên mọi bề mặt, kể cả kính.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-800 p-8 rounded-lg hover:border-green-500/50 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-green-500 mb-6 block group-hover:scale-110 transition-transform">bolt</span>
                <h3 className="text-2xl font-semibold mb-4">HyperPolling 8000Hz</h3>
                <p className="text-base text-zinc-400">Tốc độ phản hồi cực nhanh, truyền tín hiệu gấp 8 lần so với chuột thông thường, loại bỏ hoàn toàn độ trễ.</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-800 p-8 rounded-lg hover:border-green-500/50 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-green-500 mb-6 block group-hover:scale-110 transition-transform">speed</span>
                <h3 className="text-2xl font-semibold mb-4">Trọng lượng siêu nhẹ 54g</h3>
                <p className="text-base text-zinc-400">Thiết kế công thái học tối giản, tối ưu hóa vật liệu để mang lại sự linh hoạt tối đa mà không giảm độ bền.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Annotation Section */}
        <ProductAnnotation />

        {/* Specs Section */}
        <section className="py-24 px-6" id="specs">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 border-l-4 border-green-500 pl-4">Thông Số Kỹ Thuật</h2>
            <div className="flex flex-col border-t border-zinc-800">
              <div className="flex flex-col sm:flex-row justify-between py-6 border-b border-zinc-800 hover:bg-zinc-900/50 px-4 transition-colors">
                <span className="font-semibold text-sm uppercase tracking-wider text-zinc-400 w-1/3">FORM FACTOR</span>
                <span className="font-mono text-base text-zinc-200 sm:w-2/3">Symmetrical Right-Handed</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between py-6 border-b border-zinc-800 hover:bg-zinc-900/50 px-4 transition-colors">
                <span className="font-semibold text-sm uppercase tracking-wider text-zinc-400 w-1/3">CONNECTIVITY</span>
                <span className="font-mono text-base text-zinc-200 sm:w-2/3">Razer™ HyperSpeed Wireless, Wired - Speedflex Cable</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between py-6 border-b border-zinc-800 hover:bg-zinc-900/50 px-4 transition-colors">
                <span className="font-semibold text-sm uppercase tracking-wider text-zinc-400 w-1/3">BATTERY LIFE</span>
                <span className="font-mono text-base text-zinc-200 sm:w-2/3">Up to 95 hours at 1000 Hz, Up to 17 hours at 8000 Hz</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between py-6 border-b border-zinc-800 hover:bg-zinc-900/50 px-4 transition-colors">
                <span className="font-semibold text-sm uppercase tracking-wider text-zinc-400 w-1/3">SWITCH TYPE</span>
                <span className="font-mono text-base text-zinc-200 sm:w-2/3">Optical Mouse Switches Gen-3 (90-million click lifecycle)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 bg-zinc-900 border-t border-b border-zinc-800" id="contact">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Cập Nhật Thông Tin</h2>
            <p className="text-base text-zinc-400 mb-8">Đăng ký để nhận tin tức mới nhất về phần mềm và thiết bị Razer.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input className="w-full sm:w-96 bg-zinc-800 border border-zinc-700 text-zinc-200 text-base rounded-md px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all" placeholder="Nhập email của bạn" type="email" />
              <button className="bg-zinc-800 text-zinc-300 hover:text-green-500 font-bold text-sm px-8 py-3 rounded-md uppercase border border-zinc-700 hover:border-green-500 transition-colors whitespace-nowrap" type="submit">
                Đăng Ký
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-zinc-900">
        <div className="text-sm text-zinc-500">
          © 2024 Razer Inc. All rights reserved.
        </div>
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li><a className="text-zinc-500 hover:text-green-500 transition-colors duration-200" href="#">Privacy Policy</a></li>
          <li><a className="text-zinc-500 hover:text-green-500 transition-colors duration-200" href="#">Terms of Service</a></li>
          <li><a className="text-zinc-500 hover:text-green-500 transition-colors duration-200" href="#">Cookie Settings</a></li>
        </ul>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

export default App;
