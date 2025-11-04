# 🎉 Happy Birthday Tuấn Kiệt - Manchester United Theme

Một trang web chúc mừng sinh nhật đặc biệt dành cho Tuấn Kiệt với chủ đề Manchester United!

## ✨ Tính năng

- 🔴 **Giao diện MU**: Màu sắc đỏ, đen, vàng đặc trưng của Manchester United
- 🎵 **Nhạc nền tự động**: Phát nhạc tự động khi tải trang (có nút bật/tắt)
- 🎆 **Hiệu ứng pháo hoa**: Hiệu ứng pháo hoa động tuyệt đẹp
- 🎈 **Bóng bay bay**: Hiệu ứng bóng bay màu đỏ, đen, vàng bay lên
- 📱 **Responsive**: Hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile)
- ⚡ **React + TypeScript**: Code hiện đại, dễ bảo trì
- 🏟️ **Old Trafford**: Tôn vinh sân nhà huyền thoại
- 👹 **Quỷ Đỏ**: Biểu tượng huyền thoại của MU
- ⭐ **Huyền thoại**: Ronaldo, Cantona, Beckham, Van Persie

## 🚀 Cài đặt

### Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy development server:**
```bash
npm run dev
```

3. **Mở trình duyệt:**
   - Trang web sẽ tự động mở tại `http://localhost:3000`
   - Hoặc mở thủ công địa chỉ trên

## 🎨 Cấu trúc dự án

```
hp-tk/
├── src/
│   ├── components/
│   │   ├── Fireworks.tsx      # Hiệu ứng pháo hoa
│   │   └── MusicPlayer.tsx    # Trình phát nhạc
│   ├── App.tsx                # Component chính
│   ├── App.css                # Styles chính
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
└── vite.config.ts             # Vite config
```

## 🎵 Về nhạc nền

Hiện tại trang web sử dụng một bản nhạc miễn phí từ Pixabay. Để sử dụng bài "Tình yêu ngủ quên" của Hiếu Thứ Hai:

1. Tải file nhạc MP3
2. Đặt file vào thư mục `public/`
3. Cập nhật đường dẫn trong `src/components/MusicPlayer.tsx`:
```tsx
src="/tinh-yeu-ngu-quen.mp3"
```

**Lưu ý**: Đảm bảo bạn có quyền sử dụng bài hát này.

## 🎯 Build cho production

```bash
npm run build
```

Files sẽ được tạo trong thư mục `dist/` và sẵn sàng để deploy.

## 🌐 Deploy

Bạn có thể deploy trang web này lên:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Kéo thả thư mục `dist/`
- **GitHub Pages**: Push code và enable GitHub Pages
- **Firebase Hosting**: `firebase deploy`

## 🎨 Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa trong `src/App.css`:
- MU Red: `#DA291C`
- MU Gold: `#FFD700`
- MU Black: `#000000`

### Thay đổi nội dung

Chỉnh sửa trong `src/App.tsx`:
- Tiêu đề: `.main-title`
- Lời chúc: `.wishes-text`
- Tên huyền thoại: `.legends-grid`

### Thêm/bớt hiệu ứng

- **Pháo hoa**: Chỉnh `src/components/Fireworks.tsx`
- **Bóng bay**: Chỉnh `.balloons-container` trong CSS
- **Animation**: Điều chỉnh `@keyframes` trong CSS

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🎂 Lời chúc đặc biệt

> Chúc Tuấn Kiệt của anh luôn mạnh khỏe, học tập tốt và mãi giữ vững tình yêu với Quỷ Đỏ! Mong em sẽ có một mùa giải mới rực rỡ như bàn thắng phút bù giờ! Cheer you 3000. 💖

## ⚽ Glory Glory Man United!

**United We Stand, Divided We Fall** ❤️

---

Made with ❤️ for Tuấn Kiệt - The Next Red Devil! 🔴👹
