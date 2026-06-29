import React from 'react';

const NewsletterForm = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-gutter bg-surface-container-lowest border-t border-b border-surface-variant">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Cập Nhật Thông Tin</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">Đăng ký để nhận tin tức mới nhất về phần mềm và thiết bị Razer.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            className="w-full sm:w-96 bg-surface-dim border border-surface-variant text-on-surface font-body-md rounded px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
            placeholder="Nhập email của bạn" 
            type="email"
          />
          <button 
            className="bg-surface-variant text-on-surface hover:text-primary font-label-caps text-label-caps px-8 py-3 rounded uppercase border border-surface-variant hover:border-primary transition-colors whitespace-nowrap" 
            type="submit"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
