import React from 'react';

// TODO: Sau này, hãy đặt ảnh sản phẩm vào 'src/assets/images/'
// và import vào đây, ví dụ: import heroImage from '../assets/images/viper-v4-pro.png';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Hiệu ứng ánh sáng xanh đặc trưng của Razer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-green-500/30 rounded-full blur-[150px] z-0"></div>

      <div className="relative z-10 flex flex-col items-center p-4">
        {/* 
          PHẦN HIỂN THỊ ẢNH SẢN PHẨM
          - Thay thế thẻ div này bằng thẻ <img /> của bạn.
          - Ví dụ: <img src={heroImage} alt="Razer Viper V4 Pro" className="max-w-sm md:max-w-md mb-8" />
        */}
        <div className="max-w-sm md:max-w-md mb-8 h-[200px] flex items-center justify-center">
            <p className="text-gray-400 italic">Ảnh chuột Razer Viper V4 Pro sẽ hiển thị ở đây</p>
        </div>

        <p className="text-green-400 font-semibold tracking-widest mb-2">RAZER VIPER V4 PRO</p>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4 uppercase">
          For The Pro
        </h1>
        <p className="max-w-2xl text-gray-300 mb-8">
          Chuột gaming esports đỉnh cao được tái định nghĩa. Siêu nhẹ, trang bị công nghệ tiên tiến nhất, được thiết kế cùng với các game thủ chuyên nghiệp hàng đầu thế giới.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-500 text-black font-bold py-3 px-8 rounded hover:bg-green-400 transition-colors duration-300">
            Mua Ngay
          </button>
          <button className="border border-gray-700 bg-black bg-opacity-50 text-white font-bold py-3 px-8 rounded hover:bg-gray-800 transition-colors duration-300">
            Khám Phá
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
