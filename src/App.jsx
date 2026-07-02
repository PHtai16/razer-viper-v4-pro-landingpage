import React, { Suspense, lazy } from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';

// CẮT BỎ CỤC TẠ JAVASCRIPT: Bắt trình duyệt tách các component bên dưới thành file riêng
// Chỉ tải khi cần thiết, giải phóng CPU lúc mới vào web
const HeroParallax = lazy(() => import('./components/HeroParallax'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const ProductAnnotation = lazy(() => import('./components/ProductAnnotation'));
const FeatureScrollytelling = lazy(() => import('./components/FeatureScrollytelling'));
const SpecsSection = lazy(() => import('./components/SpecsSection'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));
const ChatBot = lazy(() => import('./components/ChatBot'));
const ScrollToast = lazy(() => import('./components/ScrollToast'));

export default function App() {
  return (
      <div className="bg-zinc-950 min-h-screen text-zinc-50 font-sans selection:bg-green-500/30">
        {/* 2 Thằng này nằm ở màn hình đầu tiên -> Phải load ngay lập tức */}
        <TopNavBar />
        <HeroSection />

        {/* Toàn bộ phần dưới bị bọc trong Suspense -> Tải ngầm, không block màn hình */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-zinc-500">Đang tải giao diện...</div>}>
          <HeroParallax />
          <FeaturesSection />
          <ProductAnnotation />
          <FeatureScrollytelling />
          <SpecsSection />
          <Newsletter />
          <Footer />
          <ChatBot />
          <ScrollToast />
        </Suspense>
      </div>
  );
}