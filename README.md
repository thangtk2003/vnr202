# Chuyến Tàu Lịch Sử - VNR202 Assignment

## 📚 Giới Thiệu Dự Án

Website học tập tương tác về lịch sử Việt Nam giai đoạn 1975-1986, kết hợp công nghệ AI để tạo trải nghiệm học tập sinh động và hiện đại.

### 🎯 Nội Dung

**Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)**

- 3.1. Đảng lãnh đạo cả nước xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975 - 1986)
  - 3.1.1. Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc 1975 - 1981
  - 3.1.2. Đại hội đại biểu toàn quốc lần thứ V của Đảng và các bước đột phá tiếp tục đổi mới kinh tế 1982 - 1986

## ✨ Tính Năng Chính

### 1. 🏠 Trang Chủ

- Trình bày chi tiết lý thuyết lịch sử
- Bố cục rõ ràng, dễ đọc
- Thiết kế responsive cho mọi thiết bị

### 2. 🚂 Chuyến Tàu Ký Ức

- Animation đoàn tàu di chuyển qua timeline
- 7 ga dừng tương ứng với các mốc lịch sử quan trọng:
  - 1975: Giải phóng hoàn toàn miền Nam
  - 1976: Đại hội IV - Kế hoạch 5 năm
  - 1979: Chiến thắng chiến tranh biên giới
  - 1981: Chỉ thị 100
  - 1982: Đại hội V
  - 1985: Nghị quyết 06
  - 1986: Chuẩn bị Đổi Mới
- Điều khiển tàu: Khởi hành, Tạm dừng, Quay lại
- Hiệu ứng highlight khi tàu đi qua mỗi ga

### 3. 📝 Quiz AI

- Tạo câu hỏi tự động bằng **Gemini AI**
- 10 câu trắc nghiệm đa dạng độ khó
- Hiển thị kết quả và đánh giá ngay lập tức
- Có thể tạo quiz mới nhiều lần

### 4. 🤖 Chatbot Giọng Nói

- Hỏi đáp thông minh với **Gemini AI**
- Hỗ trợ nhập văn bản và giọng nói (tiếng Việt)
- Trả lời chính xác về nội dung lịch sử
- Giao diện chat hiện đại, thân thiện

### 5. 📊 AI Usage Documentation

- Chi tiết công cụ AI được sử dụng
- Prompt chính cho mỗi tính năng
- Kết quả và phần chỉnh sửa
- Minh họa bằng code blocks

## 🛠️ Công Nghệ Sử Dụng

### Frontend

- **HTML5**: Cấu trúc semantic, accessible
- **CSS3**:
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Gradient backgrounds
  - Responsive design
- **JavaScript (ES6+)**:
  - Async/Await
  - DOM Manipulation
  - Event Handling
  - Local Storage
  - Web Speech API

### AI Integration

- **Google Gemini AI (gemini-pro)**
  - Quiz Generation
  - Chatbot Response
- **Web Speech API**
  - Voice Recognition (Tiếng Việt)

### Icons & Fonts

- **Font Awesome 6.4.0**: Icons library
- **Google Fonts**: Segoe UI fallback

## 📦 Cấu Trúc Dự Án

```
assignment/
├── index.html          # File HTML chính
├── styles.css          # File CSS styling
├── script.js           # File JavaScript logic
└── README.md           # File documentation (this file)
```

## 🚀 Hướng Dẫn Sử Dụng

### 1. Cài Đặt & Chạy

#### Cách 1: Chạy trực tiếp

- Mở file `index.html` bằng trình duyệt web hiện đại (Chrome, Edge, Firefox)
- Không cần cài đặt server

#### Cách 2: Sử dụng Live Server (khuyến nghị)

```bash
# Nếu dùng VS Code
1. Cài extension "Live Server"
2. Right-click vào index.html
3. Chọn "Open with Live Server"
```

### 2. Cấu Hình Gemini API Key

**⚠️ QUAN TRỌNG**: API Key được lưu trong file `.env` (không commit lên Git)

#### Lấy API Key:

1. Truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập bằng tài khoản Google
3. Tạo API key mới
4. Copy API key

#### Cấu hình cho Quiz (Frontend):

1. Trong thư mục `frontend/`, tạo file `.env`:

   ```bash
   # Windows PowerShell
   New-Item -Path frontend/.env -ItemType File

   # Linux/Mac
   touch frontend/.env
   ```

2. Thêm API key vào file `.env`:

   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Khởi động lại dev server**:

   ```bash
   cd frontend
   npm run dev
   ```

4. Xem hướng dẫn chi tiết: `frontend/QUIZ_SETUP.md`

#### Cấu hình cho Chatbot:

- Chatbot yêu cầu nhập API key trực tiếp trong giao diện
- API key được lưu trong Local Storage (client-side)
- Click vào nút **Cài Đặt API** để nhập key

### 3. Sử Dụng Từng Tính Năng

#### Trang Chủ

- Đọc nội dung lý thuyết chi tiết
- Click "Bắt Đầu Hành Trình" để xuống phần Timeline

#### Chuyến Tàu Ký Ức

- Nhấn **Khởi Hành**: Tàu bắt đầu di chuyển
- Nhấn **Tạm Dừng**: Dừng tàu tại vị trí hiện tại
- Nhấn **Quay Lại**: Reset tàu về vị trí ban đầu
- Quan sát ga được highlight khi tàu đi qua

#### Quiz

- Nhấn **Tạo Quiz Mới**: AI tạo 10 câu hỏi
- Click chọn đáp án
- Xem kết quả ngay (màu xanh: đúng, màu đỏ: sai)
- Nhấn **Câu Tiếp Theo**
- Xem tổng kết điểm và đánh giá
- Nhấn **Làm Lại** để tạo quiz mới

#### Chatbot

- **Gõ văn bản**: Nhập câu hỏi và nhấn Enter hoặc nút gửi
- **Giọng nói**:
  - Nhấn icon microphone
  - Nói câu hỏi bằng tiếng Việt
  - Đợi AI trả lời
- Ví dụ câu hỏi:
  - "Đại hội V diễn ra khi nào?"
  - "Chỉ thị 100 là gì?"
  - "Ý nghĩa của Nghị quyết 06?"

## 🎨 Thiết Kế & UX

### Color Palette

- **Primary**: `#da251c` (Đỏ cờ Việt Nam)
- **Secondary**: `#ffcd00` (Vàng sao)
- **Gradients**:
  - Purple: `#667eea → #764ba2`
  - Pink: `#f093fb → #f5576c`
  - Blue: `#4facfe → #00f2fe`

### Typography

- Font chính: Segoe UI (fallback: system fonts)
- Font code: Courier New, monospace

### Animations

- Smooth scroll navigation
- Fade in on scroll
- Train movement animation
- Hover effects
- Loading spinners

### Responsive Breakpoints

- Desktop: > 768px
- Tablet: 768px
- Mobile: < 480px

## 🤖 Chi Tiết Sử Dụng AI

### 1. Gemini AI - Quiz Generator

**Công cụ**: Google Gemini API (gemini-pro model)

**Mục đích**: Tạo câu hỏi trắc nghiệm tự động

**Prompt chính**:

```
Bạn là một giáo viên lịch sử chuyên nghiệp. Tạo 10 câu hỏi trắc nghiệm về chủ đề:
"Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)"

Yêu cầu:
- Mỗi câu có 4 đáp án A, B, C, D
- Đáp án phải chính xác lịch sử
- Câu hỏi có độ khó từ dễ đến khó
- Trả về format JSON
```

**Kết quả**: 10 câu hỏi chất lượng cao, đa dạng nội dung

**Chỉnh sửa**: Validate độ chính xác lịch sử, format JSON

### 2. Gemini AI - Voice Chatbot

**Công cụ**: Google Gemini API + Web Speech API

**Mục đích**: Trả lời câu hỏi học sinh bằng AI

**Prompt chính**:

```
Bạn là chuyên gia lịch sử Việt Nam giai đoạn 1975-1986.
Trả lời câu hỏi:
- Chính xác lịch sử
- Dễ hiểu cho học sinh
- Ngắn gọn (150 từ)
- Có ví dụ minh họa
```

**Kết quả**: Phản hồi nhanh, chính xác, dễ hiểu

**Chỉnh sửa**: Thêm context, giới hạn độ dài câu trả lời

### 3. GitHub Copilot - Code Assistant

**Công cụ**: GitHub Copilot (VS Code Extension)

**Mục đích**: Hỗ trợ viết code nhanh chóng

**Kỹ thuật**:

- Code completion
- Function generation
- CSS animations
- Error handling

**Kết quả**: Tăng 60% tốc độ coding

**Chỉnh sửa**: Review code, fix bugs, optimize performance

## 📝 Đánh Giá & Hạn Chế

### ✅ Ưu Điểm

- Giao diện đẹp, hiện đại
- Tích hợp AI mạnh mẽ
- Trải nghiệm người dùng tốt
- Responsive design hoàn chỉnh
- Code sạch, có comment

### ⚠️ Hạn Chế & Cải Tiến

- **API Key**: Cần user tự cung cấp (vì security)
- **Offline**: Không hoạt động không có internet
- **Browser Support**: Cần browser hiện đại (Chrome/Edge khuyến nghị)
- **Voice Recognition**: Chỉ hoạt động trên HTTPS hoặc localhost

### 🔮 Phát Triển Tương Lai

- [ ] Thêm database lưu kết quả quiz
- [ ] Chế độ thi thử với thời gian
- [ ] Thêm hình ảnh minh họa lịch sử
- [ ] Export kết quả thành PDF
- [ ] Multiplayer quiz mode
- [ ] Tích hợp Text-to-Speech cho câu trả lời bot
- [ ] Dark mode
- [ ] Multi-language support

## 🔒 Bảo Mật

- API Key được lưu trong `.env` (Quiz) và Local Storage (Chatbot)
- File `.env` không được commit lên Git
- Environment variables được set trên Vercel
- User tự quản lý API key của mình
- Khuyến nghị: Giới hạn API key usage trên Google Cloud Console

## 🚀 Deployment

### Deploy lên Vercel

```bash
# Quick deploy
vercel

# Production deploy
vercel --prod
```

**Xem hướng dẫn chi tiết:**
- 📘 Đầy đủ: [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- ⚡ Nhanh: [`DEPLOY_QUICK.md`](./DEPLOY_QUICK.md)

**Live Demo**: `https://vnr202.vercel.app` (sau khi deploy)

### Environment Variables trên Vercel

1. Vercel Dashboard → Settings → Environment Variables
2. Add: `VITE_GEMINI_API_KEY` = `your_api_key`
3. Apply to: Production, Preview, Development
4. Redeploy

## 📄 License

Dự án này được tạo cho mục đích học tập - VNR202 Assignment

## 👨‍💻 Tác Giả

- **Sinh viên**: [Tên của bạn]
- **Lớp**: VNR202
- **Môn học**: Lịch Sử Việt Nam
- **Năm**: 2025

## 🙏 Lời Cảm Ơn

- Google Gemini AI team
- GitHub Copilot
- Font Awesome
- Web Speech API contributors
- Giảng viên môn VNR202

## 📞 Liên Hệ & Hỗ Trợ

Nếu gặp vấn đề khi sử dụng:

1. Kiểm tra API key đã nhập đúng chưa
2. Kiểm tra kết nối internet
3. Thử trình duyệt khác (Chrome khuyến nghị)
4. Xóa cache và thử lại
5. Check Console (F12) để xem lỗi chi tiết

---

**Made with ❤️ and AI for VNR202 Assignment**
