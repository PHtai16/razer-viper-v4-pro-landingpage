import React from 'react';

const specifications = [
  { name: 'Kiểu Dáng', value: 'Đối xứng cho người thuận tay phải' },
  { name: 'Kết Nối', value: 'Razer HyperSpeed Wireless, Dây Speedflex' },
  { name: 'Thời Lượng Pin', value: 'Lên đến 95 giờ ở 1000 Hz, 28 giờ ở 8000 Hz' },
  { name: 'Mắt Đọc', value: 'Focus Pro 35K Optical Sensor Gen-2' },
  { name: 'Độ Nhạy Tối Đa (DPI)', value: '35000' },
  { name: 'Tốc Độ Tối Đa (IPS)', value: '750' },
  { name: 'Gia Tốc Tối Đa (G)', value: '70' },
  { name: 'Số Nút Lập Trình', value: '8' },
  { name: 'Loại Switch', value: 'Optical Mouse Switches Gen-3' },
  { name: 'Tuổi Thọ Switch', value: '90 triệu lượt nhấn' },
  { name: 'Feet Chuột', value: '100% PTFE' },
  { name: 'Trọng Lượng', value: '54 g (Không tính dây)' },
  { name: 'Kích Thước (Dài x Rộng x Cao)', value: '126.7 mm x 66.2 mm x 37.8 mm' },
];

const SpecsSection = () => {
  return (
    <div className="bg-gray-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Thông số kỹ thuật</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Chi tiết từng thông số làm nên hiệu năng đỉnh cao của Razer Viper V4 Pro.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="overflow-hidden rounded-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <tbody className="divide-y divide-gray-800">
                {specifications.map((spec, index) => (
                  <tr key={spec.name} className={index % 2 === 0 ? 'bg-black/20' : 'bg-black/40'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400 w-1/3">
                      {spec.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsSection;
