# HƯỚNG DẪN THÊM HÌNH ẢNH

Để hoàn thiện trang web, bạn cần thêm các hình ảnh sau:

## 1. Gallery Photos (src/images/gallery/)

Thêm 6 ảnh prewedding của bạn với tên:
- photo-1.jpg
- photo-2.jpg
- photo-3.jpg
- photo-4.jpg
- photo-5.jpg
- photo-6.jpg

**Khuyến nghị:**
- Kích thước: 1200x900px hoặc tương tự (tỷ lệ 4:3)
- Format: JPG hoặc WebP
- Chất lượng: 80-85% (để tối ưu dung lượng)
- Dung lượng mỗi ảnh: < 500KB

## 2. Favicon (src/images/icons/)

Thêm favicon cho website:
- favicon.png (32x32px hoặc 64x64px)

**Gợi ý:** Icon hình trái tim màu hồng hoặc máy bay nhỏ

## 3. Tối ưu hóa ảnh

Trước khi thêm, nên compress ảnh bằng các công cụ:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)
- RIOT (Windows)

## 4. Placeholder

Hiện tại các ảnh đang dùng đường dẫn tạm. Parcel sẽ tự động optimize khi bạn thêm ảnh thật vào.

## 5. Lưu ý

- Tất cả ảnh sẽ tự động được Parcel optimize khi build
- Lazy loading đã được enable để tải nhanh hơn
- Mobile responsive đã được xử lý
