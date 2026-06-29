import React from 'react';

const features = [
  {
    title: 'Mắt Đọc Quang Học Razer™ Focus Pro 35K Gen-2',
    description: 'Độ chính xác tuyệt đối với công nghệ mắt đọc thông minh, đảm bảo mọi chuyển động của bạn được ghi lại một cách hoàn hảo.',
    icon: '🎯', // Placeholder icon
  },
  {
    title: 'Polling Rate Thực 8000Hz',
    description: 'Phản hồi siêu tốc với độ trễ gần như bằng không, mang lại lợi thế cạnh tranh trong các trận đấu đỉnh cao.',
    icon: '⚡️', // Placeholder icon
  },
  {
    title: 'Thiết Kế Siêu Nhẹ 54g',
    description: 'Di chuyển chuột nhanh và dễ dàng hơn bao giờ hết, giảm mỏi tay và tối ưu hóa cho những pha xử lý tốc độ cao.',
    icon: '🕊️', // Placeholder icon
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-400">HIỆU NĂNG VƯỢT TRỘI</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tất cả những gì bạn cần để chiến thắng
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Được trang bị những công nghệ tiên tiến nhất, Razer Viper V4 Pro là vũ khí tối thượng cho mọi game thủ chuyên nghiệp.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col p-6 rounded-lg border border-gray-800 hover:border-green-500/50 hover:bg-gray-900/50 transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
