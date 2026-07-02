import React, { useState, lazy, Suspense } from 'react';
import ProductAnnotation from './components/ProductAnnotation';
import ScrollToast from './components/ScrollToast';
import HeroParallax from './components/HeroParallax';
import FeatureScrollytelling from './components/FeatureScrollytelling';
import Newsletter from './components/Newsletter';

const CheckoutModal = lazy(() => import('./components/CheckoutModal'));
const ChatBot = lazy(() => import('./components/ChatBot'));

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
        {/* Hero Section — Parallax */}
        <HeroParallax onBuyClick={() => setIsModalOpen(true)} />

        {/* Features Section — Scrollytelling */}
        <FeatureScrollytelling />

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

        {/* Newsletter Section — EmailJS + Discord Webhook */}
        <Newsletter />
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

      {/* Modals and Overlays — Bọc trong Suspense vì dùng React.lazy() */}
      {/* fallback={null}: không hiển thị spinner vì modal mặc định đang ẩn */}
      <Suspense fallback={null}>
        <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Suspense>
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>

      {/* Scroll Toast — Hiện khi user cuộn qua 70% trang */}
      <ScrollToast />

    </div>
  );
}

export default App;
