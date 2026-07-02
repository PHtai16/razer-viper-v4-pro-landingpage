import React from 'react';

export default function Footer() {
  return (
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
  );
}
