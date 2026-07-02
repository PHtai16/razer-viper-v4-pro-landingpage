import React from 'react';
import { User, Phone, Mail, ExternalLink } from 'lucide-react';

// ── Dữ liệu link cột 2 ──────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Tính năng nổi bật', href: '#features' },
  { label: 'Thông số kỹ thuật', href: '#specs' },
  { label: 'Cộng đồng Razer', href: 'https://insider.razer.com', external: true },
];

// ── Dữ liệu cột 3 (Developer Contact) ───────────────────────────────────────
const CONTACT_INFO = [
  {
    id: 'name',
    icon: User,
    label: 'Họ và tên',
    value: 'Phan Văn Tài',
    href: null,
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Số điện thoại',
    value: '0912 361 090',
    href: 'tel:0912361090',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'phanvantai061605@gmail.com',
    href: 'mailto:phanvantai061605@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800">

      {/* ── Khu vực 3 cột chính ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* ── Cột 1: About ──────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* Logo chữ */}
          <span className="text-3xl font-extrabold text-white tracking-tight">
            RAZER
          </span>

          {/* Đường nhấn màu xanh */}
          <div className="w-10 h-0.5 bg-green-500 rounded-full" />

          {/* Disclaimer */}
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Sản phẩm demo phục vụ bài test vòng 2 — Vị trí{' '}
            <span className="text-zinc-400 font-medium">Thực tập sinh IT phát triển Website</span>{' '}
            tại{' '}
            <span className="text-green-500 font-semibold">HELICORP</span>.{' '}
            Không sử dụng cho mục đích thương mại.
          </p>
        </div>

        {/* ── Cột 2: Links ──────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-base uppercase tracking-widest">
            Khám Phá
          </h3>
          <div className="w-10 h-0.5 bg-green-500 rounded-full" />

          <ul className="flex flex-col gap-3 mt-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 text-zinc-400 text-sm hover:text-green-500 transition-colors duration-200"
                >
                  {/* Dấu chấm nhỏ bên trái */}
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-green-500 transition-colors duration-200 flex-shrink-0" />
                  {link.label}
                  {link.external && (
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Cột 3: Developer Contact ───────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-base uppercase tracking-widest">
            Thông Tin Ứng Viên
          </h3>
          <div className="w-10 h-0.5 bg-green-500 rounded-full" />

          <ul className="flex flex-col gap-4 mt-1">
            {CONTACT_INFO.map(({ id, icon: Icon, label, value, href }) => (
              <li key={id} className="flex items-start gap-3 group">
                {/* Icon container */}
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-green-500/40 group-hover:bg-green-500/5 transition-all duration-300">
                  <Icon size={14} className="text-green-500" />
                </div>

                {/* Nội dung */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-600 text-xs uppercase tracking-widest font-semibold">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-zinc-400 text-sm hover:text-green-500 transition-colors duration-200 break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-zinc-400 text-sm">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Copyright */}
          <p className="text-zinc-600 text-xs text-center sm:text-left">
            © 2024 Razer Inc. All rights reserved.
          </p>

          {/* Badge HELICORP */}
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600">
            Built by{' '}
            <span className="text-green-500 font-semibold tracking-wide">Phan Văn Tài</span>
          </span>
        </div>
      </div>

    </footer>
  );
}
