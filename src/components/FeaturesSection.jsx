import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface-container-lowest border-t border-surface-variant" id="features">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-16 text-center text-on-surface">Công Nghệ Đỉnh Cao</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-surface-container-low border border-surface-variant p-8 rounded hover:border-primary/50 transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">precision_manufacturing</span>
            <h3 className="font-headline-md text-[24px] leading-8 font-semibold mb-4 text-on-surface">Cảm biến Focus Pro 35K</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Cảm biến quang học Gen-2 tiên tiến nhất, theo dõi từng chuyển động pixel hoàn hảo trên mọi bề mặt, kể cả kính.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-surface-container-low border border-surface-variant p-8 rounded hover:border-primary/50 transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">bolt</span>
            <h3 className="font-headline-md text-[24px] leading-8 font-semibold mb-4 text-on-surface">HyperPolling 8000Hz</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Tốc độ phản hồi cực nhanh, truyền tín hiệu gấp 8 lần so với chuột thông thường, loại bỏ hoàn toàn độ trễ.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-surface-container-low border border-surface-variant p-8 rounded hover:border-primary/50 transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">speed</span>
            <h3 className="font-headline-md text-[24px] leading-8 font-semibold mb-4 text-on-surface">Trọng lượng siêu nhẹ 54g</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Thiết kế công thái học tối giản, tối ưu hóa vật liệu để mang lại sự linh hoạt tối đa mà không giảm độ bền.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
