import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-stack-gap px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-lowest">
      <div className="font-mono-spec text-mono-spec text-on-surface-variant">
        © 2024 Razer Inc. All rights reserved.
      </div>
      <ul className="flex flex-wrap justify-center gap-6 font-mono-spec text-mono-spec">
        <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Privacy Policy</a></li>
        <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Terms of Service</a></li>
        <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Cookie Settings</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
