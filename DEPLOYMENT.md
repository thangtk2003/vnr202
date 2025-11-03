# 🚀 Hướng Dẫn Deploy lên Vercel

## 📋 Chuẩn Bị

### 1. Tài khoản Vercel
- Đăng ký tài khoản miễn phí tại: https://vercel.com/signup
- Kết nối với GitHub account

### 2. Push code lên GitHub
```bash
# Khởi tạo git (nếu chưa có)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for Vercel deployment"

# Add remote repository
git remote add origin https://github.com/your-username/vnr202.git

# Push code
git push -u origin master
```

## 🔑 Cấu Hình Environment Variables

### Trên Vercel Dashboard:

1. Vào project settings
2. Chọn tab **Environment Variables**
3. Thêm biến:
   - **Key**: `VITE_GEMINI_API_KEY`
   - **Value**: `your_gemini_api_key_here`
   - **Environments**: Production, Preview, Development (chọn tất cả)

⚠️ **QUAN TRỌNG**: API key PHẢI có prefix `VITE_` để Vite nhận diện!

## 🌐 Deploy bằng Vercel Dashboard

### Cách 1: Import từ GitHub (Khuyến nghị)

1. Đăng nhập Vercel: https://vercel.com
2. Click **"Add New Project"**
3. Import repository từ GitHub
4. Chọn repository: `vnr202`
5. Cấu hình project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Thêm Environment Variables (như trên)
7. Click **Deploy**

### Cách 2: Vercel CLI

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (chạy trong thư mục root)
vercel

# Làm theo hướng dẫn:
# - Link to existing project? No
# - Project name? vnr202
# - Which directory? frontend
# - Want to override settings? Yes
#   - Build Command: npm run build
#   - Output Directory: dist
#   - Development Command: npm run dev

# Deploy production
vercel --prod
```

## 📁 Cấu Trúc File Quan Trọng

```
assignment/
├── vercel.json              # ✅ Cấu hình Vercel
├── .vercelignore           # ✅ Ignore files
├── .gitignore              # ✅ Ignore .env
├── frontend/
│   ├── .env                # ❌ KHÔNG commit (local only)
│   ├── .env.example        # ✅ Template
│   ├── package.json        # ✅ Dependencies
│   ├── vite.config.ts      # ✅ Vite config
│   └── dist/               # Build output (tự động)
└── README.md
```

## 🔧 File vercel.json Giải Thích

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/$1"
    }
  ]
}
```

- `builds`: Chỉ định cách build project
- `routes`: Routing configuration
- `distDir`: Output directory (dist)

## 🎯 Sau Khi Deploy

### 1. Kiểm tra URL
Vercel sẽ tạo URL dạng: `https://vnr202-xxx.vercel.app`

### 2. Kiểm tra các trang
- ✅ Home: `/`
- ✅ Train Journey: `/train`
- ✅ Quiz: `/quiz`
- ✅ Chatbot: `/chatbot`
- ✅ AI Usage: `/ai-usage`

### 3. Test Environment Variable
- Mở `/quiz`
- Click "Tạo Quiz Mới"
- Nếu thấy nút → ✅ API key OK
- Nếu thấy "Chưa cấu hình" → ❌ Kiểm tra lại env

## 🔄 Cập Nhật Code

```bash
# Sửa code locally
# ...

# Commit
git add .
git commit -m "Update features"

# Push
git push origin master

# Vercel tự động deploy lại!
```

## 🐛 Xử Lý Lỗi

### Lỗi 1: "Build failed"
```bash
# Kiểm tra build local
cd frontend
npm run build

# Fix lỗi, sau đó push lại
```

### Lỗi 2: "Environment variable not found"
- Vào Vercel Dashboard
- Settings → Environment Variables
- Kiểm tra key có đúng `VITE_GEMINI_API_KEY` không
- Redeploy: Deployments → ... → Redeploy

### Lỗi 3: "404 Not Found"
- Kiểm tra `vercel.json` routes
- Kiểm tra `vite.config.ts` base path

### Lỗi 4: "Quiz/Chatbot không hoạt động"
- F12 → Console → Kiểm tra lỗi API
- Kiểm tra API key trong env variables
- Kiểm tra CORS settings

## 📊 Performance Tips

### 1. Optimize Build
```json
// vite.config.ts
export default {
  build: {
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
}
```

### 2. Enable Caching
Vercel tự động cache static assets

### 3. Analytics
Vercel Dashboard → Analytics → Xem traffic

## 🔒 Security Checklist

- [x] `.env` trong `.gitignore`
- [x] API key không hardcode
- [x] Environment variables trên Vercel
- [x] HTTPS enabled (mặc định)
- [x] `.vercelignore` đã setup

## 📱 Custom Domain (Optional)

1. Mua domain (hoặc dùng domain có sẵn)
2. Vercel Dashboard → Settings → Domains
3. Add domain
4. Cấu hình DNS theo hướng dẫn
5. Đợi SSL certificate tự động

## 🎉 Hoàn Thành!

Website của bạn đã live tại:
```
https://vnr202-your-username.vercel.app
```

Chia sẻ link với giảng viên và bạn bè! 🚀

---

## 📞 Hỗ Trợ

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/
- GitHub Issues: Tạo issue nếu gặp vấn đề

**Made with ❤️ for VNR202 Assignment**
