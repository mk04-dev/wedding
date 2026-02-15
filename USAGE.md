# HƯỚNG DẪN SỬ DỤNG

## Cài đặt Dependencies

Mở terminal và chạy:

```bash
npm install
```

Lệnh này sẽ cài đặt:
- Parcel bundler
- AOS.js (scroll animations)
- FlipDown.js (countdown timer)
- GLightbox (photo gallery lightbox)
- Leaflet.js (interactive map)

## Chạy Development Server

```bash
npm run dev
```

Website sẽ mở tại: http://localhost:1234

Hot reload được bật - mọi thay đổi sẽ tự động cập nhật.

## Thêm Ảnh

1. Thêm 6 ảnh prewedding vào `src/images/gallery/`:
   - photo-1.jpg đến photo-6.jpg
   - Kích thước khuyến nghị: 1200x900px
   - Format: JPG hoặc WebP
   - Compress trước khi thêm

2. Thêm favicon vào `src/images/icons/`:
   - favicon.png (32x32px)

## Tùy chỉnh Nội dung

### 1. Thay đổi thông tin cơ bản

Mở `src/index.html` và tìm các phần sau để chỉnh sửa:

- Tên cô dâu chú rê: tìm "Lê Na" và "Tuấn Anh"
- Ngày cưới: tìm "09/03/2026"
- Địa điểm: tìm "Xã Nghĩa Giang" và "Phường An Lạc"

### 2. Cập nhật Story Timeline

Tìm section `#story` trong `src/index.html` và chỉnh sửa:
- Timeline dates (năm gặp gỡ, hẹn hò, cầu hôn)
- Nội dung mỗi milestone

### 3. Thay đổi màu sắc

Mở `src/styles/theme.css` và chỉnh sửa CSS variables:

```css
:root {
    --primary-pink: #FFB6C1;  /* Màu hồng chính */
    --soft-pink: #FFC0CB;     /* Màu hồng nhạt */
    --rose-pink: #FFD1DC;     /* Màu hồng pastel */
}
```

### 4. Cập nhật countdown

Mở `src/scripts/main.js` và tìm:

```javascript
const weddingDate = new Date('2026-03-09T16:05:00').getTime() / 1000;
```

Đổi thành ngày giờ cưới của bạn.

### 5. Cập nhật bản đồ

Trong `src/scripts/main.js`, tìm:

```javascript
const quangNgai = [15.1214, 108.8044];
const dongThap = [10.6803, 105.4122];
```

Thay bằng tọa độ chính xác (lấy từ Google Maps).

## Build cho Production

```bash
npm run build
```

Kết quả được tạo trong folder `dist/` - sẵn sàng để deploy.

## Deploy lên Vercel

### Cách 1: Vercel CLI (Nhanh nhất)

1. Cài Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Lần đầu sẽ yêu cầu đăng nhập và config project.

### Cách 2: Git Deploy (Khuyến nghị)

1. Push code lên GitHub:
```bash
git init
git add .
git commit -m "Initial wedding website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Đăng nhập Vercel (https://vercel.com)
3. Click "Add New Project"
4. Import GitHub repository
5. Build settings tự động được phát hiện từ `vercel.json`:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### Cách 3: Drag & Drop

1. Chạy `npm run build`
2. Vào https://vercel.com/new
3. Kéo thả folder `dist/` vào

### Custom Domain (Optional)

Trong Vercel dashboard:
1. Project Settings → Domains
2. Add domain
3. Follow DNS setup instructions

## Troubleshooting

### Lỗi khi chạy npm install

```bash
# Xóa và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Port 1234 đã được sử dụng

```bash
# Chỉ định port khác
npx parcel src/index.html --port 3000
```

### Ảnh không hiển thị

- Kiểm tra đường dẫn file
- Đảm bảo tên file khớp với HTML
- Xóa cache: `npm run clean` rồi `npm run dev`

### Map không load

- Kiểm tra kết nối internet (cần load OpenStreetMap tiles)
- Kiểm tra tọa độ có đúng format [lat, lng]

## Performance Tips

- Compress tất cả ảnh trước khi thêm
- Parcel tự động optimize khi build
- Lazy loading đã được enable
- Kết quả build đã minified

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Cấu trúc Project

```
wedding-website/
├── src/
│   ├── index.html          # HTML chính
│   ├── styles/
│   │   ├── theme.css       # Màu sắc và biến
│   │   ├── main.css        # Styles chính
│   │   └── responsive.css  # Mobile responsive
│   ├── scripts/
│   │   └── main.js         # JavaScript chính
│   └── images/
│       ├── gallery/        # Ảnh prewedding
│       ├── icons/          # Favicon
│       └── vietnam-map.svg # SVG map
├── dist/                   # Build output (tự động tạo)
├── package.json            # Dependencies
├── netlify.toml            # Netlify config
└── README.md               # File này
```

## Cần hỗ trợ?

- Kiểm tra console trong browser (F12) để xem lỗi
- Đọc Parcel docs: https://parceljs.org
- Xem AOS docs: https://michalsnik.github.io/aos/
