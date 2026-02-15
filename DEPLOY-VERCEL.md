# HƯỚNG DẪN DEPLOY LÊN VERCEL

## Bước 1: Cài đặt dependencies

```bash
npm install
```

## Bước 2: Test local

```bash
npm run dev
```

Mở http://localhost:1234 để kiểm tra.

## Bước 3: Build

```bash
npm run build
```

Kiểm tra folder `dist/` được tạo ra.

## Bước 4: Deploy lên Vercel

### Cách A: Dùng Vercel CLI (Nhanh nhất)

1. Cài Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy ngay:
```bash
vercel
```

Làm theo hướng dẫn để đăng nhập và deploy.

### Cách B: Qua GitHub + Vercel (Khuyến nghị - Auto deploy khi push)

1. Push code lên GitHub:
```bash
git init
git add .
git commit -m "Wedding website for Lê Na & Tuấn Anh"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Đăng nhập Vercel:
- Vào https://vercel.com
- Sign in with GitHub

3. Import project:
- Click "Add New Project"
- Chọn repository vừa push
- Vercel tự động detect settings từ `vercel.json`:
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`
- Click "Deploy"

4. Đợi vài phút → Website live! 🎉

### Cách C: Manual Deploy

1. Build local:
```bash
npm run build
```

2. Vào https://vercel.com/new
3. Kéo thả folder `dist/` vào

## Bước 5: Custom Domain (Optional)

1. Vào Vercel Dashboard → Your Project
2. Settings → Domains
3. Add domain của bạn (ví dụ: lena-tuananh.com)
4. Follow DNS instructions

## Lợi ích của Vercel

✅ **Miễn phí** cho personal projects
✅ **Auto deploy** mỗi khi push code
✅ **HTTPS tự động** với SSL certificate
✅ **CDN global** - tốc độ nhanh toàn cầu
✅ **Preview URLs** cho mỗi pull request
✅ **Zero config** - chỉ cần push là xong

## Cấu trúc sau khi deploy

```
https://your-site.vercel.app/
├── index.html (trang chính)
├── assets/
│   ├── index.xxxxx.js (JS đã minify)
│   ├── index.xxxxx.css (CSS đã minify)
│   └── images/ (ảnh đã optimize)
```

## Analytics (Optional)

Enable Vercel Analytics để theo dõi traffic:
1. Project Settings → Analytics
2. Enable Analytics
3. Xem real-time visitors

## Troubleshooting

### Build failed
```bash
# Clean và build lại
npm run clean
npm install
npm run build
```

### Wrong build settings
Kiểm tra `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Environment variables
Nếu cần add biến môi trường:
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

## Automatic Deployments

Sau khi setup xong, mỗi khi bạn:
1. Update code
2. `git commit` và `git push`
3. Vercel tự động build và deploy! 🚀

Không cần chạy build manually nữa.
