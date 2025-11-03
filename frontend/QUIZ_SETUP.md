# Hướng Dẫn Cấu Hình Quiz với Gemini API

## 📋 Yêu Cầu

Để sử dụng tính năng Quiz, bạn cần có Gemini API key từ Google.

## 🔧 Cách Cấu Hình

### Bước 1: Lấy API Key

1. Truy cập [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Đăng nhập bằng tài khoản Google
3. Nhấn "Create API Key"
4. Sao chép API key

### Bước 2: Cấu Hình Environment Variable

1. Trong thư mục `frontend/`, tạo file `.env`:

   ```bash
   # Windows PowerShell
   New-Item -Path .env -ItemType File

   # Linux/Mac
   touch .env
   ```

2. Mở file `.env` và thêm API key:

   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **LƯU Ý**: Thay `your_actual_api_key_here` bằng API key thực của bạn

### Bước 3: Khởi Động Lại Dev Server

```bash
# Dừng server hiện tại (Ctrl + C)
# Sau đó chạy lại:
npm run dev
```

## 📝 Nội Dung Quiz

Quiz được tạo tự động bởi Gemini AI về các chủ đề:

- **Chương 3**: Đảng lãnh đạo cả nước quá độ lên CNXH (1975-1986)
  - Giai đoạn 1975-1981: Xây dựng CNXH và bảo vệ Tổ quốc
  - Giai đoạn 1982-1986: Đại hội V và đổi mới kinh tế

## 🎯 Tính Năng

- ✅ Tự động tạo 10 câu hỏi trắc nghiệm
- ✅ 4 đáp án cho mỗi câu
- ✅ Hiển thị kết quả và giải thích
- ✅ Đánh giá điểm số
- ✅ Tạo quiz mới không giới hạn

## ⚠️ Lưu Ý Bảo Mật

- **KHÔNG** commit file `.env` lên Git
- **KHÔNG** chia sẻ API key với người khác
- File `.env` đã được thêm vào `.gitignore`
- Sử dụng `.env.example` làm template

## 🔒 File .env.example

File `.env.example` được cung cấp như một template:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Sao chép file này thành `.env` và thay thế bằng API key thực của bạn.

## 🐛 Xử Lý Lỗi

### Lỗi: "Chưa Cấu Hình API Key"

- Kiểm tra file `.env` có tồn tại không
- Kiểm tra tên biến: `VITE_GEMINI_API_KEY`
- Khởi động lại dev server

### Lỗi: "Có lỗi xảy ra khi tạo quiz"

- Kiểm tra API key có đúng không
- Kiểm tra kết nối internet
- Kiểm tra quota của API key

## 📞 Hỗ Trợ

Nếu gặp vấn đề, vui lòng kiểm tra:

1. File `.env` đã được tạo chưa
2. API key có hợp lệ không
3. Dev server đã được khởi động lại chưa
