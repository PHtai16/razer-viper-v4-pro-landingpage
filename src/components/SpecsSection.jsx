import React from 'react';

const specs = [
    { name: 'FORM FACTOR', value: 'Symmetrical Right-Handed' },
    { name: 'CONNECTIVITY', value: 'Razer™ HyperSpeed Wireless, Wired - Speedflex Cable' },
    { name: 'BATTERY LIFE', value: 'Up to 95 hours at 1000 Hz, Up to 17 hours at 8000 Hz' },
    { name: 'SWITCH TYPE', value: 'Optical Mouse Switches Gen-3 (90-million click lifecycle)' },
];

const SpecsSection = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter" id="specs">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-12 text-on-surface border-l-4 border-primary pl-4">Thông Số Kỹ Thuật</h2>
        <div className="flex flex-col border-t border-surface-variant">
          {specs.map((spec) => (
            <div key={spec.name} className="flex flex-col sm:flex-row justify-between py-6 border-b border-surface-variant hover:bg-surface-container-low/50 px-4 transition-colors">
              <span className="font-label-caps text-label-caps text-on-surface-variant w-1/3">{spec.name}</span>
              <span className="font-mono-spec text-mono-spec text-on-surface sm:w-2/3">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
