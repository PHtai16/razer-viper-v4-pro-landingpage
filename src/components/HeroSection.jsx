import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-section-gap px-margin-mobile md:px-gutter">
      {/* Backglow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] hero-backglow rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-display-xl text-display-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed mb-6">
          RAZER VIPER V4 PRO
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
          Thống trị mọi giải đấu với trọng lượng siêu nhẹ 54g và cảm biến 35K. Sự kết hợp hoàn hảo giữa thiết kế công thái học và công nghệ không dây độ trễ thấp.
        </p>
        <div className="w-full max-w-2xl mb-16 relative">
          <img 
            alt="Razer Viper V4 Pro" 
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDzK_wvkPPj-trxsXnk4sQsbinlwk5MS1CA_ZK4bR4LsZV2bGtSS7gWE8ZbN5H6CBwvlDPh7ez5yUVlMoxA9gvQdp61YGlPYfGLgHG6BGxfuIv756xroLnPfKjRTL6W-2DI4pnZpNkQHtMPgRvPc6FVTzrFcNHCkJvHTLfJrckx6XJMCRrzPVkb5C-XiAEIQ9Q8-IfDuM7J_uisHLJL1LbLaLf3xiYiFYsxmNNCMZX8FKjxkVvwLmY8ViWuND_KjiozTSBD5EhPYsX"
            loading="lazy"
            width="1024"
            height="512"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded uppercase hover:bg-primary-fixed transition-colors tracking-widest razer-glow">
            Mua Ngay
          </button>
          <button className="border border-primary text-primary bg-transparent font-label-caps text-label-caps px-8 py-4 rounded uppercase hover:bg-primary/10 transition-colors tracking-widest">
            Xem Chi Tiết
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
