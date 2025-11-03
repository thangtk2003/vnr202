# ✅ Pre-Deployment Checklist

## 📋 Kiểm Tra Trước Khi Deploy

### 1. Git & GitHub

- [ ] Code đã được commit hết
- [ ] Đã push lên GitHub
- [ ] Repository là public (hoặc Vercel có quyền truy cập)

### 2. Environment Variables

- [ ] File `.env` đã tạo và test local
- [ ] File `.env` đã thêm vào `.gitignore`
- [ ] File `.env.example` đã tạo (template)
- [ ] Có API key Gemini hợp lệ

### 3. Build & Test

```bash
# Test build local
cd frontend
npm run build

# Test preview
npm run preview
```

- [ ] Build thành công (không có lỗi)
- [ ] Preview hoạt động tốt
- [ ] Tất cả routes hoạt động (/, /train, /quiz, /chatbot)

### 4. Files Cần Thiết

- [ ] `vercel.json` ở root folder
- [ ] `.vercelignore` ở root folder
- [ ] `package.json` có script `build`
- [ ] `vite.config.ts` đã cấu hình đúng

### 5. Code Quality

- [ ] Không có console.error quan trọng
- [ ] Không có API key hardcoded trong code
- [ ] CSS responsive đã test
- [ ] Cross-browser đã test (Chrome, Edge)

### 6. Content

- [ ] README.md đầy đủ thông tin
- [ ] DEPLOYMENT.md có hướng dẫn
- [ ] Screenshots (optional)

## 🚀 Sẵn Sàng Deploy!

Nếu tất cả ✅, bạn có thể deploy:

### Option 1: Vercel Dashboard

1. https://vercel.com/new
2. Import from GitHub
3. Deploy

### Option 2: Vercel CLI

```bash
vercel --prod
```

## 🔍 Kiểm Tra Sau Deploy

### Ngay sau deploy:

- [ ] Website load được
- [ ] Homepage hiển thị đúng
- [ ] Navigation hoạt động
- [ ] Responsive trên mobile

### Test từng tính năng:

- [ ] Train Journey: Animation tàu chạy
- [ ] Quiz: Tạo quiz thành công (cần config env)
- [ ] Chatbot: Gửi message thành công (cần config env)
- [ ] Voice: Microphone hoạt động (chỉ HTTPS)

### Performance:

- [ ] Lighthouse score > 80
- [ ] Load time < 3s
- [ ] No console errors

## ❌ Nếu Có Lỗi

### Build Failed

```bash
# Debug local
cd frontend
npm install
npm run build
```

### 404 Error

- Check `vercel.json` routes
- Check build output directory

### API Not Working

- Vercel Settings → Environment Variables
- Check key name: `VITE_GEMINI_API_KEY`
- Redeploy after adding env

### Voice Not Working

- Voice chỉ work trên HTTPS
- Vercel auto có HTTPS
- Check browser permissions

## 📊 Monitoring

Sau khi deploy thành công:

- [ ] Add domain custom (optional)
- [ ] Enable analytics
- [ ] Share link với giảng viên
- [ ] Backup code trên GitHub

---

**Good luck! 🎉**
