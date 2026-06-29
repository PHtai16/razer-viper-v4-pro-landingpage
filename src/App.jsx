import React from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SpecsSection from './components/SpecsSection';
import NewsletterForm from './components/NewsletterForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SpecsSection />
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
