import React from 'react';

export default function SpecsSection() {
  return (
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
  );
}
