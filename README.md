# Landing Page - Razer Viper V4 Pro

Đây là dự án Landing Page giới thiệu sản phẩm chuột gaming **Razer Viper V4 Pro**, được xây dựng hoàn toàn bằng **React** và **Tailwind CSS**. Dự án không chỉ tập trung vào giao diện đẹp mắt, hiện đại theo phong cách "Dark Mode" mà còn tích hợp nhiều tính năng tương tác cao cấp để nâng cao trải nghiệm người dùng.

> **Mục tiêu dự án:** Xây dựng một trang giới thiệu sản phẩm hoàn chỉnh, đáp ứng các tiêu chuẩn cao về UI/UX, hiệu năng, và chất lượng mã nguồn.

## ✨ Các Tính Năng Nổi Bật

Dưới đây là danh sách các tính năng đã được triển khai trong dự án:

#### 1. **Giao Diện Hiện Đại & Tương Tác**
- **Dark Mode:** Giao diện được thiết kế theo tông màu tối chủ đạo, mang lại cảm giác cao cấp, đúng chất gaming.
- **Responsive Design:** Giao diện được tối ưu để hiển thị hoàn hảo trên mọi kích thước màn hình, từ Mobile đến Desktop.
- **Hiệu ứng Gradient cho Text:** Tiêu đề chính "RAZER VIPER V4 PRO" sử dụng kỹ thuật `bg-clip-text` của Tailwind để tạo hiệu ứng màu chuyển sắc ấn tượng.
- **Hiệu ứng Hover & Transitions:** Các nút bấm, thẻ, và các yếu tố tương tác đều có hiệu ứng chuyển động mượt mà.

#### 2. **Các Section Nội Dung Chính**
- **Hero Section:**
  - Sử dụng **Video Background** tự động phát để tạo ấn tượng thị giác mạnh mẽ.
  - Nút Call-to-Action (CTA) "Mua Ngay" và "Xem Chi Tiết" rõ ràng.
- **Features Section:** Giới thiệu 3 tính năng cốt lõi của sản phẩm trong layout dạng lưới (grid) trực quan.
- **Product Annotation Section (Chú thích sản phẩm):**
  - Một tính năng độc đáo cho phép người dùng khám phá các bộ phận của sản phẩm.
  - Các điểm chú thích luôn hiển thị và có hiệu ứng `animate-pulse`.
  - Khi người dùng di chuột vào **khu vực ảnh**, toàn bộ thông tin chi tiết và đường kẻ sẽ hiện ra đồng loạt với hiệu ứng `transition` đẹp mắt.
- **Specs Section:** Bảng thông số kỹ thuật chi tiết, trình bày khoa học, dễ đọc.
- **Newsletter Section:** Form đăng ký nhận tin tức qua email.

#### 3. **Modal Thanh Toán (Checkout Modal)**
- Khi nhấn nút "Mua Ngay", một modal thanh toán sẽ trượt từ dưới lên.
- **Form validation HTML5:** Tự động kiểm tra định dạng email và số điện thoại.
- **Tính Tổng Tiền Động:**
  - Mặc định hiển thị giá gốc với tùy chọn "Giao hàng tiêu chuẩn (Miễn phí)".
  - Nếu người dùng chọn "Giao hàng nhanh", hệ thống sẽ **tự động cộng thêm $15.00** vào tổng tiền và hiển thị ngay lập tức.

#### 4. **Trợ Lý Ảo (AI Assistant)**
- Tích hợp một **ChatBot AI** ở góc dưới bên phải màn hình.
- Sử dụng API của **Groq** với model `llama3-8b-8192` cho tốc độ phản hồi siêu nhanh.
- **System Prompt:** ChatBot được "dạy" để đóng vai một nhân viên hỗ trợ khách hàng của Razer, có sẵn kiến thức về sản phẩm (giá, cân nặng, thông số...).
- **Xử lý lỗi:** Có cơ chế thông báo cho người dùng khi gặp sự cố kết nối hoặc lỗi từ API.

## 🚀 Công Nghệ Sử Dụng

- **Framework:** React (khởi tạo bằng Vite)
- **Styling:** Tailwind CSS (sử dụng các utility classes mặc định, không phụ thuộc vào config phức tạp)
- **AI:** Groq API (với model Llama3 8B)
- **Ngôn ngữ:** JavaScript (ES6+), JSX

## 📂 Cấu Trúc Thư Mục

```
razer-viper-v4-pro/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx
│   │   ├── CheckoutModal.jsx
│   │   └── ProductAnnotation.jsx
│   ├── App.jsx           # Component chính chứa layout của toàn trang
│   ├── index.css         # Chứa directive của Tailwind và các style tùy chỉnh
│   └── main.jsx          # Điểm khởi đầu của ứng dụng
├── .env                  # File chứa API key (QUAN TRỌNG)
├── index.html
├── package.json
└── tailwind.config.js
```

## 🛠️ Hướng Dẫn Cài Đặt và Chạy Dự Án

1. **Clone repository về máy:**
   ```sh
   git clone <your-repo-url>
   ```

2. **Di chuyển vào thư mục dự án:**
   ```sh
   cd razer-viper-v4-pro
   ```

3. **Cài đặt các dependencies:**
   ```sh
   npm install
   ```

4. **Tạo file biến môi trường:**
   - Tạo một file mới ở thư mục gốc tên là `.env`.
   - Mở file `.env` và thêm vào dòng sau, thay thế `YOUR_GROQ_API_KEY_HERE` bằng API key của bạn:
     ```
     VITE_GROQ_API_KEY=YOUR_GROQ_API_KEY_HERE
     ```

5. **Khởi chạy server development:**
   ```sh
   npm run dev
   ```

   Mở trình duyệt và truy cập vào địa chỉ `http://localhost:5173` (hoặc một port khác nếu port 5173 đã bị chiếm).
