import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SpecsSection from './components/SpecsSection';

function App() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturesSection />
      <SpecsSection />
      {/* Các section khác sẽ được thêm vào đây */}
    </div>
  );
}

export default App;
