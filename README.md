# 🖱️ Razer Viper V4 Pro — Landing Page

> Landing page sản phẩm cao cấp cho **Razer Viper V4 Pro**, xây dựng bằng **React 19 + Vite 8 + Tailwind CSS v4**. Tối ưu hiệu năng đạt điểm Google PageSpeed Insights Mobile ≥ 85/100.

![Preview](https://assets2.razerzone.com/images/pnx.assets/21cd6b3b987baf37ce411ffec58be660/razer-viper-v4-pro-video-1920x700.mp4)

---

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Luồng hoạt động](#-luồng-hoạt-động)
- [Tải về và chạy trên máy](#-tải-về-và-chạy-trên-máy)
- [Cấu hình biến môi trường](#-cấu-hình-biến-môi-trường)
- [Tối ưu SEO & Performance](#-tối-ưu-seo--performance)

---

## ✨ Tính năng

### 🎬 Hero Section — Parallax 3 lớp
- Hiệu ứng parallax chiều sâu 3D bằng **framer-motion** (`useScroll` + `useTransform`)
- Lớp backglow → cuộn chậm nhất | Lớp ảnh sản phẩm → cuộn vừa | Lớp text/CTA → cuộn nhanh nhất
- Entrance animation: tiêu đề, mô tả, nút CTA trượt từ dưới lên lần lượt khi tải trang
- Chỉ báo cuộn xuống (scroll indicator) tự ẩn sau khi cuộn
- Nút **"Mua Ngay"** mở Checkout Modal

### 🔧 Features Section — Scrollytelling
- 3 card tính năng (Cảm biến 35K / Polling 8000Hz / Trọng lượng 54g) xuất hiện cascade khi cuộn đến
- Mỗi card trễ hơn 0.15s để tạo cảm giác kể chuyện liên mạch
- Hover lift effect + viền xanh + đường kẻ mở rộng khi hover

### 🖼️ Product Annotation Section
- Ảnh sản phẩm interactive với 3 điểm chú thích (dot) nhấp nháy
- Hover vào ảnh → hiển thị 3 đường kẻ + label mô tả từng bộ phận

### 📊 Specs Section
- Bảng thông số kỹ thuật đầy đủ (Form Factor / Connectivity / Battery Life / Switch Type)
- Row hover effect

### 📬 Newsletter — Đăng ký nhận tin
- Form nhập email controlled (React state)
- Khi submit, **bắn 2 tác vụ đồng thời** bằng `Promise.all`:
  1. **EmailJS** → Gửi email xác nhận tự động đến địa chỉ người đăng ký
  2. **Discord Webhook** → Thông báo tức thì đến kênh Discord của admin
- Loading spinner + nút disable trong lúc xử lý
- Reset form sau khi thành công

### 🛒 Checkout Modal — Đặt hàng
- Slide-up modal từ dưới màn hình
- Form 3 trường: Họ tên / SĐT / Email (tất cả có validation)
- Chọn phương thức giao hàng: Nhanh (+$15) hoặc Tiêu chuẩn (Miễn phí)
- Tự tính ngày giao hàng dự kiến
- Tính tổng tiền động theo lựa chọn
- Submit → POST JSON đến **Discord Webhook** với rich embed (màu Razer, fields đẹp)
- Loading state + disable button + CSS spinner

### 🤖 AI Chatbot
- Floating button góc dưới phải, mở/đóng có animation scale
- Tích hợp **Groq API** (model `llama-3.1-8b-instant`) — phản hồi cực nhanh, miễn phí
- System prompt được cài sẵn thông tin sản phẩm → bot trả lời chuyên về Viper V4 Pro
- Hiển thị dot loader 3 chấm khi AI đang xử lý
- Lịch sử chat giữ nguyên trong phiên

### 🔔 Scroll Toast — Thông báo thông minh
- Tự động xuất hiện khi người dùng cuộn quá **70%** chiều cao trang
- Toast trượt từ trái vào với viền xanh Razer
- Nhắc người dùng dùng Chatbot AI để tư vấn
- Đóng bằng nút X → **không hiện lại** trong phiên (dùng `useRef`, không re-render)
- Listener scroll dùng `{ passive: true }` → không giảm hiệu năng cuộn mobile

### 🔗 Navigation Bar
- Fixed top, glassmorphism (`backdrop-blur-md`)
- Link anchor đến Features / Specs / Contact
- Nút "Mua Ngay" mở Checkout Modal

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Phiên bản | Vai trò |
|---|---|---|
| **React** | 19.x | UI framework |
| **Vite** | 8.x | Build tool, Dev server |
| **Tailwind CSS** | 4.x | Styling |
| **framer-motion** | 12.x | Parallax, Scrollytelling animations |
| **@emailjs/browser** | 4.x | Gửi email tự động phía client |
| **Groq API** | - | AI Chatbot (LLaMA 3.1 8B) |
| **Discord Webhook** | - | Nhận thông báo đặt hàng & đăng ký |

---

## 📁 Cấu trúc dự án

```
razer-viper-v4-pro/
│
├── index.html                    # Entry HTML — SEO meta tags đầy đủ
│   ├── <title>                   # "Razer Viper V4 Pro | Chuột Gaming..."
│   ├── <meta description>        # 155 ký tự chuẩn SEO
│   ├── Open Graph tags           # Facebook / Zalo / LinkedIn preview
│   ├── Twitter Card tags         # X (Twitter) preview
│   └── <link preconnect>         # Tăng tốc Google Fonts
│
├── vite.config.js                # Cấu hình Vite + Build optimization
│   ├── manualChunks              # Tách vendor-react / vendor-motion / vendor-ui
│   ├── minify: 'esbuild'         # Nén JS nhanh
│   └── drop: ['console']         # Xóa console.log khỏi production
│
├── package.json                  # Dependencies
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Root component — điều phối toàn bộ trang
    ├── App.css                   # CSS toàn cục
    ├── index.css                 # Tailwind directives
    │
    └── components/
        ├── HeroParallax.jsx      # Hero section với parallax 3 lớp (framer-motion)
        ├── FeatureScrollytelling.jsx  # 3 feature cards với cascade scroll animation
        ├── ProductAnnotation.jsx # Ảnh chuột + 3 điểm chú thích interactive
        ├── CheckoutModal.jsx     # Modal đặt hàng + Discord Webhook
        ├── Newsletter.jsx        # Form đăng ký + EmailJS + Discord Webhook
        ├── ChatBot.jsx           # AI Chatbot tích hợp Groq API
        ├── ScrollToast.jsx       # Toast thông báo scroll-triggered
        │
        │── (Legacy — chưa xóa)
        ├── HeroSection.jsx       # Hero gốc (không dùng)
        ├── FeaturesSection.jsx   # Features gốc (không dùng)
        ├── NewsletterForm.jsx    # Newsletter gốc (không dùng)
        ├── SpecsSection.jsx      # Specs section (không dùng)
        ├── TopNavBar.jsx         # Nav gốc (không dùng)
        └── Footer.jsx            # Footer gốc (không dùng)
```

---

## 🔄 Luồng hoạt động

### Trang tải lần đầu
```
Browser request → index.html
    → Vite serve /src/main.jsx
    → React render App.jsx
    → Load ngay: HeroParallax, FeatureScrollytelling, ProductAnnotation, Newsletter, ScrollToast
    → Lazy load (chỉ khi cần): CheckoutModal, ChatBot
    → framer-motion: animate h1 → p → buttons từ dưới lên (delay 0s / 0.15s / 0.3s)
```

### Người dùng cuộn trang
```
scroll event (passive) → ScrollToast.handleScroll()
    → scrollY / totalScrollable >= 0.7
    → setIsVisible(true)
    → Toast trượt vào từ trái

scroll → useScroll() trong HeroParallax
    → scrollYProgress: 0 → 1
    → imageY:  0px → 150px  (ảnh trôi chậm xuống)
    → textY:   0px → -100px (text vút lên nhanh)
    → glowY:   0px → 80px   (glow trôi chậm)
    → heroOpacity: 1 → 0    (fade out toàn hero)

scroll → FeatureScrollytelling cards vào viewport
    → whileInView trigger → opacity 0→1, y 60→0, scale 0.97→1
    → Card 1: delay 0s | Card 2: delay 0.15s | Card 3: delay 0.30s
```

### Người dùng bấm "Mua Ngay"
```
onClick → setIsModalOpen(true)
    → React.lazy() load CheckoutModal chunk (JS chunk tách riêng)
    → Modal slide-up từ dưới (translateY: 100% → 0)
    → Người dùng điền form → chọn giao hàng → xem tổng tiền động
    → Submit → handleSubmit() async
        → setIsSubmitting(true) → nút "Đang xử lý..." + disable
        → fetch() POST → Discord Webhook (embed màu xanh, fields đẹp)
        → SUCCESS: alert() + onClose() + reset form
        → CATCH:   alert() báo lỗi
        → FINALLY: setIsSubmitting(false)
```

### Người dùng đăng ký newsletter
```
Input email → onChange → setEmail()
Submit → handleSubmit() async
    → Promise.all([emailjs.send(), fetch(discordWebhook)])
        ├── EmailJS → Gửi mail xác nhận đến user_email
        └── Discord → POST {"content": "Có người mới đăng ký: email"}
    → SUCCESS: alert() + setEmail('')
    → CATCH:   alert() báo lỗi
```

### Người dùng dùng Chatbot
```
Click FAB → setIsOpen(true) → scale animation (0 → 1)
Nhập câu hỏi → submit form
    → fetch('https://api.groq.com/openai/v1/chat/completions')
        → Authorization: Bearer VITE_GROQ_API_KEY
        → model: llama-3.1-8b-instant
        → messages: [system_prompt, ...lịch_sử_chat, user_message]
    → isLoading → dot loader 3 chấm nhấp nháy
    → Response → setMessages() → render bubble chat
```

---

## 🚀 Tải về và chạy trên máy

### Yêu cầu hệ thống
- **Node.js** ≥ 18.0 ([tải tại nodejs.org](https://nodejs.org))
- **npm** ≥ 9.0 (đi kèm Node.js)
- **Git** ([tải tại git-scm.com](https://git-scm.com))

### Bước 1 — Clone repository
```bash
git clone https://github.com/your-username/razer-viper-v4-pro.git
cd razer-viper-v4-pro
```

> **Không có Git?** Tải file ZIP trực tiếp trên GitHub → nhấn nút **Code → Download ZIP** → giải nén → mở folder trong terminal.

### Bước 2 — Cài dependencies
```bash
npm install
```
> Lệnh này tự động cài toàn bộ: React, Vite, Tailwind CSS, framer-motion, @emailjs/browser, lucide-react...

### Bước 3 — Tạo file biến môi trường
```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Hoặc tạo thủ công file .env trong thư mục gốc
```

Nội dung file `.env`:
```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> **Lấy Groq API Key miễn phí:** Vào [console.groq.com](https://console.groq.com) → Đăng ký → API Keys → Create API Key → Copy.

### Bước 4 — Cấu hình Webhook & EmailJS

Mở file `src/components/CheckoutModal.jsx` → sửa dòng 6:
```js
const WEBHOOK_URL = 'https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN';
```

Mở file `src/components/Newsletter.jsx` → sửa dòng 5:
```js
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN';
```

> **Tạo Discord Webhook:** Server Discord → Cài đặt kênh → Tích hợp → Webhooks → Tạo Webhook → Copy URL.

### Bước 5 — Chạy dev server
```bash
npm run dev
```

Mở trình duyệt tại: **http://localhost:5173**

---

### Các lệnh hữu ích khác

```bash
# Chạy development server (hot reload)
npm run dev

# Build production (tạo thư mục dist/)
npm run build

# Preview bản production trên máy (sau khi build)
npm run preview

# Kiểm tra lỗi ESLint
npm run lint
```

---

## ⚙️ Cấu hình biến môi trường

| Biến | Bắt buộc | Mô tả |
|---|---|---|
| `VITE_GROQ_API_KEY` | ✅ | API key Groq để chạy AI Chatbot |

> **Lưu ý bảo mật:** File `.env` đã được thêm vào `.gitignore`. **Không commit** file `.env` lên GitHub vì sẽ lộ API key.

---

## 🔧 Tối ưu SEO & Performance

### SEO Technical (index.html)
- ✅ `<title>` chuẩn 60 ký tự
- ✅ `<meta description>` chuẩn 155 ký tự
- ✅ `<meta robots>` content="index, follow"
- ✅ `<link rel="canonical">` trỏ về helicorp.vn
- ✅ **Open Graph tags** đầy đủ (og:type / og:title / og:description / og:url / og:image + kích thước)
- ✅ **Twitter Card** tags (summary_large_image)
- ✅ `og:locale` = vi_VN
- ✅ `<link rel="preconnect">` cho Google Fonts → giảm FCP

### Performance (PageSpeed Insights Mobile)
- ✅ `<video poster="...">` → LCP không bị trống
- ✅ `<video preload="none">` → không tải video cho đến khi autoplay
- ✅ `loading="lazy"` + `decoding="async"` cho ảnh below-the-fold
- ✅ `width` + `height` trên `<img>` → CLS = 0
- ✅ `React.lazy()` + `Suspense` cho CheckoutModal & ChatBot → giảm initial JS bundle
- ✅ `{ passive: true }` trên scroll listener → không block main thread
- ✅ Vite `manualChunks` → tách vendor-react / vendor-motion / vendor-ui
- ✅ `esbuildOptions: { drop: ['console'] }` → xóa log khỏi production build

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "framer-motion": "^12.42.2",
    "lucide-react": "^1.22.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  }
}
```

---

## 🏗️ Được xây dựng bởi

**Helicorp** · [helicorp.vn](https://helicorp.vn)

> *Dự án đồ án Landing Page — React + Vite + Tailwind CSS*
