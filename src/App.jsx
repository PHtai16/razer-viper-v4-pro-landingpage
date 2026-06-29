import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SpecsSection from './components/SpecsSection';
import NewsletterForm from './components/NewsletterForm';

function App() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturesSection />
      <SpecsSection />
      <NewsletterForm />
    </div>
  );
}

export default App;
