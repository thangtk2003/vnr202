# 🚀 HƯỚNG DẪN NHANH - QUIZ VỚI GEMINI AI

## Bước 1: Lấy API Key (2 phút)

1. Mở trình duyệt, truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập bằng Google
3. Click **"Create API Key"**
4. Copy key (dạng: AIzaSy...)

## Bước 2: Cấu hình (1 phút)

### Windows (PowerShell):

```powershell
# Di chuyển vào thư mục frontend
cd frontend

# Tạo file .env
New-Item -Path .env -ItemType File

# Mở file bằng notepad
notepad .env
```

### Mac/Linux:

```bash
# Di chuyển vào thư mục frontend
cd frontend

# Tạo file .env
touch .env

# Mở file bằng text editor
nano .env
# hoặc
code .env
```

### Nội dung file .env:

```
VITE_GEMINI_API_KEY=AIzaSy_paste_your_key_here
```

**⚠️ LƯU Ý**: Thay `AIzaSy_paste_your_key_here` bằng API key thực của bạn!

## Bước 3: Khởi động (30 giây)

```bash
# Nếu dev server đang chạy, dừng lại (Ctrl + C)

# Chạy lại dev server
npm run dev
```

## Bước 4: Kiểm tra

1. Mở trình duyệt: http://localhost:5173
2. Click vào **"Kiểm Tra Kiến Thức"** (Quiz)
3. Nếu thấy nút **"Tạo Quiz Mới"** → ✅ Thành công!
4. Nếu thấy **"Chưa Cấu Hình API Key"** → ❌ Kiểm tra lại

## ❌ Xử lý lỗi

### Lỗi: "Chưa Cấu Hình API Key"

```bash
# Kiểm tra file .env có tồn tại không
ls .env    # Mac/Linux
dir .env   # Windows

# Kiểm tra nội dung
cat .env   # Mac/Linux
type .env  # Windows

# Đảm bảo có dòng:
# VITE_GEMINI_API_KEY=your_key_here
```

### Lỗi: "Cannot find module"

```bash
# Cài đặt lại dependencies
npm install
```

### Lỗi: API key không hoạt động

1. Kiểm tra key có đúng không (không có khoảng trắng thừa)
2. Kiểm tra key đã enable Gemini API chưa
3. Thử tạo key mới

## 📝 Ghi chú quan trọng

✅ **CÓ NÊN**:

- Lưu API key trong file `.env`
- Thêm `.env` vào `.gitignore`
- Khởi động lại server sau khi thay đổi `.env`

❌ **KHÔNG NÊN**:

- Commit file `.env` lên Git
- Chia sẻ API key công khai
- Để API key trong code

## 🎯 Sử dụng Quiz

1. Click **"Tạo Quiz Mới"**
2. Đợi AI tạo câu hỏi (5-10 giây)
3. Click chọn đáp án
4. Xem kết quả (màu xanh = đúng, đỏ = sai)
5. Click **"Câu Tiếp Theo"**
6. Xem tổng điểm cuối cùng
7. Click **"Tạo Quiz Mới"** để làm lại

## 🆘 Cần trợ giúp?

Xem file chi tiết: `QUIZ_SETUP.md`

---

**Chúc bạn học tốt! 🎓**
