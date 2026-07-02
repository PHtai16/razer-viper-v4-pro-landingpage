import React, { useState, lazy, Suspense } from 'react';

// --- Các component cần tải ngay lập tức ---
import TopNavBar from './components/TopNavBar';
import HeroParallax from './components/HeroParallax';

// --- Lazy Load các component không cần thiết cho màn hình đầu tiên ---
// React.lazy() + Suspense giúp tách các component này thành các JS chunk riêng biệt.
// Trình duyệt sẽ chỉ tải chúng khi component được render, giảm kích thước gói ban đầu.
const FeatureScrollytelling = lazy(() => import('./components/FeatureScrollytelling'));
const ProductAnnotation = lazy(() => import('./components/ProductAnnotation'));
const SpecsSection = lazy(() => import('./components/SpecsSection'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));
const CheckoutModal = lazy(() => import('./components/CheckoutModal'));
const ChatBot = lazy(() => import('./components/ChatBot'));

// --- Fallback UI: Hiển thị trong khi component đang được tải ---
const LoadingFallback = () => <div className="h-20 w-full bg-zinc-900" />;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans overflow-x-hidden">
      
      <TopNavBar onBuyClick={() => setIsModalOpen(true)} />

      <main>
        {/* --- Phần nội dung tải ngay lập tức --- */}
        <HeroParallax onBuyClick={() => setIsModalOpen(true)} />

        {/* --- Bọc các component được lazy-load trong Suspense --- */}
        <Suspense fallback={<LoadingFallback />}>
          <FeatureScrollytelling />
          <ProductAnnotation />
          <SpecsSection />
          <Newsletter />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-24 w-full bg-zinc-900" />}>
        <Footer />
      </Suspense>

      {/* --- Các component không ảnh hưởng layout có thể có fallback riêng --- */}
      <Suspense fallback={null}>
        <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ChatBot />
      </Suspense>

    </div>
  );
}

export default App;
