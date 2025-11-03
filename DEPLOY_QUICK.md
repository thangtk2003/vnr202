# ⚡ Deploy Vercel - Quick Guide

## 🚀 3 Bước Nhanh Nhất

### Bước 1: Push Code lên GitHub (2 phút)

```bash
git add .
git commit -m "Ready for deployment"
git push origin master
```

### Bước 2: Import vào Vercel (1 phút)

1. Vào https://vercel.com/new
2. Import repository từ GitHub
3. Chọn `vnr202`
4. **Root Directory**: Để trống hoặc chọn `/`
5. Click **Deploy**

### Bước 3: Thêm API Key (30 giây)

1. Vercel Dashboard → Project → Settings
2. Environment Variables
3. Add:
   - Name: `VITE_GEMINI_API_KEY`
   - Value: `your_api_key_here`
   - Apply to: All (Production, Preview, Development)
4. Deployments → Latest → ... → Redeploy

## ✅ Done!

Website live tại: `https://your-project.vercel.app`

---

## 🔧 Nếu gặp lỗi

### Build failed?

```bash
# Test build local
cd frontend
npm run build

# Fix lỗi → commit → push
```

### API key không hoạt động?

- Kiểm tra tên biến: `VITE_GEMINI_API_KEY` (PHẢI có VITE\_)
- Redeploy sau khi thêm env variable

### 404 Error?

- Kiểm tra `vercel.json` có trong root folder
- Redeploy

---

**Xem hướng dẫn đầy đủ: `DEPLOYMENT.md`**
