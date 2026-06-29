import React from 'react';

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-gutter py-4 bg-surface-dim/95 backdrop-blur-md border-b border-surface-variant">
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Razer</div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 font-body-md text-body-md">
        <li><a className="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200" href="#features">Features</a></li>
        <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#specs">Specs</a></li>
        <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#contact">Contact</a></li>
      </ul>
      <button className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-2 rounded uppercase hover:bg-primary-fixed transition-colors active:scale-95">
        Mua Ngay
      </button>
    </nav>
  );
};

export default TopNavBar;
