import productImage from '../assets/razer-viper-v4-pro-pointers-760 (1).webp';

export default function ProductAnnotation() {
  return (
    <section className="py-24 px-4 bg-zinc-950 text-center">
      {/* Phần Tiêu đề */}
      <h2 className="text-green-500 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
        Hình dáng tin cậy số 1, nay còn nhẹ hơn nữa.
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Linh hoạt hơn bao giờ hết.
      </h3>
      <p className="text-zinc-400 max-w-3xl mx-auto mb-16 text-base md:text-lg">
        Hình dáng được giới chuyên nghiệp tin dùng, nay còn nhẹ hơn ở mức 49g mà không làm ảnh hưởng đến cấu trúc hay độ cân bằng—mang lại sự linh hoạt thích ứng tức thì với mọi kiểu cầm chuột.
      </p>

      {/* Phần Hình ảnh tương tác (Lưu ý class "group" ở đây) */}
      <div className="relative w-full max-w-5xl mx-auto group cursor-crosshair">

        {/*
         * ── TỐI ƯU ẢNH BELOW THE FOLD ──────────────────────────────────
         * loading="lazy"   : Trình duyệt chỉ tải ảnh khi user cuộn gần đến.
         *                    Giảm tải mạng lúc khởi động → FCP/LCP tốt hơn.
         * decoding="async" : Giải mã ảnh trên luồng riêng (off main thread),
         *                    không block rendering → giảm điểm TBT (Total
         *                    Blocking Time) và INP trên Mobile.
         * width/height     : Đặt kích thước để trình duyệt giữ chỗ (CLS = 0).
         * ────────────────────────────────────────────────────────────── */}
        <img
          src={productImage}
          alt="Razer Viper V4 Pro Shape"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
          width="760"
          height="507"
        />

        {/* =========================================
            BỘ 3 DẤU CHẤM (Luôn hiện và chớp nháy) 
            ========================================= */}
        {/* Nút hông */}
        <div className="absolute top-[36%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e] z-20"></div>
        {/* Bề mặt chuột */}
        <div className="absolute top-[66%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e] z-20"></div>

        {/* Chân chuột (Cái chấm) */}
        <div className="absolute top-[88%] left-[73%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e] z-20"></div>


        {/* =========================================
            BỘ 3 TEXT & ĐƯỜNG KẺ (Chỉ hiện khi Hover) 
            ========================================= */}
        {/* Nút hông */}
        <div className="absolute top-[36%] left-[5%] w-[33%] -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
          <p className="text-white text-xs md:text-sm font-bold pb-2 text-left pr-4">Các nút cạnh tách biệt để tránh bấm nhầm</p>
          <div className="w-full h-[2px] bg-green-500"></div>
        </div>

        {/* Bề mặt chuột */}
        <div className="absolute top-[66%] left-[5%] w-[50%] -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
          <p className="text-white text-xs md:text-sm font-bold pb-2 text-left pr-4">Lớp phủ bề mặt mềm mịn, mượt mà nhưng vẫn dễ cầm nắm</p>
          <div className="w-full h-[2px] bg-green-500"></div>
        </div>

        {/* Chân chuột (Đường kẻ và Text) */}
        <div className="absolute top-[88%] left-[5%] w-[68%] -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-10">
          <p className="text-white text-xs md:text-sm font-bold pb-2 text-left pr-4">Feet chuột lớn giúp lướt mượt mà hơn</p>
          <div className="w-full h-[2px] bg-green-500"></div>
        </div>

      </div>
    </section>
  );
}
