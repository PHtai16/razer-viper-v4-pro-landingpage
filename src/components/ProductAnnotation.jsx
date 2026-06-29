import React from 'react';

// Data for annotation points to keep the JSX clean
const annotationPoints = [
  {
    id: 1,
    top: '38%',
    left: '28%',
    text: 'Các nút cạnh tách biệt để tránh bấm nhầm.',
  },
  {
    id: 2,
    top: '55%',
    left: '55%',
    text: 'Lớp phủ bề mặt mềm mịn, mượt mà nhưng vẫn dễ cầm nắm.',
  },
  {
    id: 3,
    top: '80%',
    left: '45%',
    text: 'Chân chuột lớn giúp lướt mượt mà hơn.',
  },
];

const ProductAnnotation = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-green-500 font-bold uppercase tracking-widest">
          Hình dáng tin cậy số 1, nay còn nhẹ hơn nữa.
        </h2>
        <p className="text-4xl lg:text-5xl font-bold mt-2 mb-12 text-zinc-100">
          Linh hoạt hơn bao giờ hết.
        </p>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* 
            NOTE: I'm using a high-quality image from Razer's website. 
            You can download it and place it in `/public/` for better performance.
          */}
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/d65c6f86228b5512f05759715b13d7ef/razer-viper-v3-pro-usp-2-shape-desktop.webp" 
            className="w-full" 
            alt="Razer Viper V4 Pro Shape" 
          />

          {/* Mapping over the points to render them */}
          {annotationPoints.map((point) => (
            <div
              key={point.id}
              className="absolute group"
              style={{ top: point.top, left: point.left }}
            >
              {/* The pulsing green dot */}
              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse cursor-pointer"></div>
              
              {/* The tooltip text box that appears on hover */}
              <div className="absolute left-6 -top-4 w-52 p-3 bg-zinc-900 border border-zinc-700 rounded-md text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {point.text}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-lg text-zinc-400">
          Hình dáng được giới chuyên nghiệp tin dùng, nay còn nhẹ hơn ở mức 49g mà không làm ảnh hưởng đến cấu trúc hay độ cân bằng—mang lại sự linh hoạt thích ứng tức thì với mọi kiểu cầm chuột.
        </p>
      </div>
    </section>
  );
};

export default ProductAnnotation;
