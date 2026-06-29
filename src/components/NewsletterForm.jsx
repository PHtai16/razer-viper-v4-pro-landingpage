import React from 'react';

const NewsletterForm = () => {
  return (
    <div className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Đừng bỏ lỡ thông tin mới nhất
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Đăng ký để nhận các bản cập nhật sản phẩm, tin tức và các ưu đãi độc quyền từ Razer.
          </p>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-y-4 sm:flex-row sm:gap-x-4">
            <div className="flex-1">
              <label htmlFor="full-name" className="sr-only">
                Họ và tên
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 flex-auto w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                placeholder="Họ và tên"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email-address" className="sr-only">
                Địa chỉ email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                placeholder="Địa chỉ email"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Đăng ký
            </button>
          </form>
          {/* Hiệu ứng nền */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#4ade80" />
                <stop offset={1} stopColor="#166534" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
