import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

function App() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturesSection />
      {/* Các section khác sẽ được thêm vào đây */}
    </div>
  );
}

export default App;
