# Chuyến Tàu Ký Ức - VNR202 Assignment

> Website học tập tương tác về lịch sử Việt Nam giai đoạn 1975-1986 với React + TypeScript + Django

## 🚀 Tech Stack

### Frontend

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **React Router DOM** - Routing
- **Framer Motion** - Animations
- **Axios** - HTTP Client

### Backend

- **Django 5.0** - Web Framework
- **Django REST Framework** - API Framework
- **Google Gemini AI** - AI Integration
- **CORS Headers** - Cross-Origin Support

## 📁 Cấu Trúc Dự Án

```
assignment/
├── frontend/                # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── TrainJourney.tsx
│   │   │   ├── Quiz.tsx
│   │   │   ├── Chatbot.tsx
│   │   │   └── AIUsage.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
│
└── backend/                 # Django Backend
    ├── vnr202_backend/     # Django project
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── api/                # API app
    │   ├── views.py
    │   └── urls.py
    ├── requirements.txt
    └── manage.py
```

## 🛠️ Cài Đặt & Chạy Dự Án

### Prerequisites

- **Node.js** 18+ và npm
- **Python** 3.10+
- **Gemini API Key** (từ https://makersuite.google.com/app/apikey)

### 1. Setup Frontend

```powershell
# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Frontend sẽ chạy tại: **http://localhost:3000**

### 2. Setup Backend (Optional)

Backend là optional vì frontend có thể gọi trực tiếp Gemini API. Nhưng nếu muốn dùng backend:

```powershell
# Di chuyển vào thư mục backend
cd backend

# Tạo virtual environment
python -m venv venv

# Activate virtual environment
.\venv\Scripts\activate  # Windows PowerShell
# hoặc: venv\Scripts\activate.bat  # Windows CMD
# hoặc: source venv/bin/activate  # Linux/Mac

# Cài đặt dependencies
pip install -r requirements.txt

# Copy file .env.example thành .env
copy .env.example .env

# Chỉnh sửa file .env và thêm GEMINI_API_KEY

# Chạy migrations
python manage.py migrate

# Chạy development server
python manage.py runserver
```

Backend sẽ chạy tại: **http://localhost:8000**

## 🎯 Tính Năng Chính

### 1. 🏠 Trang Chủ (Home)

- Nội dung lý thuyết đầy đủ về giai đoạn 1975-1986
- Animations mượt mà với Framer Motion
- Responsive design

### 2. 🚂 Chuyến Tàu Ký Ức (Train Journey)

- Animation đoàn tàu di chuyển qua timeline
- 7 ga dừng với các mốc lịch sử quan trọng
- Điều khiển: Khởi hành, Tạm dừng, Quay lại
- Real-time highlighting

### 3. 📝 Quiz AI

- Tạo câu hỏi tự động bằng Gemini AI
- 10 câu trắc nghiệm đa dạng
- Progress tracking
- Feedback ngay lập tức
- Đánh giá kết quả

### 4. 🤖 Chatbot Giọng Nói

- Hỏi đáp thông minh với Gemini AI
- Hỗ trợ nhập văn bản
- Nhận diện giọng nói tiếng Việt (Web Speech API)
- Giao diện chat hiện đại

### 5. 📊 AI Usage Documentation

- Chi tiết công cụ AI sử dụng
- Prompts và kết quả
- Code examples
- Best practices

## 🔑 Cấu Hình API Key

### Cách 1: Nhập trực tiếp trên website

1. Truy cập trang Quiz hoặc Chatbot
2. Nhập Gemini API key vào form
3. Click "Lưu"
4. API key sẽ được lưu trong LocalStorage

### Cách 2: Cấu hình trong Backend

1. Mở file `backend/.env`
2. Thêm: `GEMINI_API_KEY=your-api-key-here`
3. Restart Django server

## 📦 Build Production

### Frontend

```powershell
cd frontend
npm run build
```

Build output sẽ nằm trong thư mục `frontend/dist/`

### Backend

```powershell
cd backend

# Cài đặt Gunicorn
pip install gunicorn

# Chạy với Gunicorn
gunicorn vnr202_backend.wsgi:application
```

## 🎨 Công Nghệ & Kỹ Thuật

### Frontend Architecture

- **Component-based**: Tái sử dụng components
- **Type Safety**: TypeScript cho code chất lượng
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Routing**: React Router DOM với nested routes
- **Animations**: Framer Motion cho UX mượt mà
- **API Calls**: Axios với async/await
- **Local Storage**: Lưu API key persistent

### Backend Architecture

- **RESTful API**: Django REST Framework
- **CORS Enabled**: Cho phép frontend gọi API
- **AI Integration**: Google Gemini API
- **Error Handling**: Comprehensive error responses
- **Environment Variables**: Secure configuration

### AI Integration

- **Gemini Pro Model**: Text generation
- **Structured Prompts**: Context-aware responses
- **JSON Parsing**: Extract structured data
- **Error Recovery**: Fallback mechanisms

## 🔧 Scripts

### Frontend

```json
{
  "dev": "vite", // Development server
  "build": "tsc && vite build", // Production build
  "preview": "vite preview" // Preview production build
}
```

### Backend

```powershell
python manage.py runserver     # Development server
python manage.py migrate       # Run migrations
python manage.py createsuperuser  # Create admin user
python manage.py makemigrations   # Create migrations
```

## 🌐 API Endpoints

### Backend API (Optional)

- `GET /api/health/` - Health check
- `POST /api/quiz/generate/` - Generate quiz
- `POST /api/chat/` - Chat with AI
- `GET /api/history/` - Get history content

## 🎯 Nội Dung Lịch Sử

**Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)**

### 3.1.1. Xây Dựng CNXH và Bảo Vệ Tổ Quốc (1975-1981)

- Bối cảnh lịch sử sau thống nhất
- Đại hội IV và Kế hoạch 5 năm
- Chiến tranh biên giới
- Khó khăn kinh tế

### 3.1.2. Đại Hội V và Đổi Mới Kinh Tế (1982-1986)

- Đại hội V của Đảng (1982)
- Chỉ thị 100 (1981)
- Nghị quyết 06 (1985)
- Chuẩn bị Đổi Mới

## 🐛 Troubleshooting

### Frontend không chạy được?

- Kiểm tra Node.js version: `node --version` (cần >=18)
- Xóa `node_modules` và chạy lại `npm install`
- Kiểm tra port 3000 có bị chiếm không

### Backend không chạy được?

- Kiểm tra Python version: `python --version` (cần >=3.10)
- Activate virtual environment đúng cách
- Kiểm tra đã cài đặt dependencies: `pip list`

### Voice recognition không hoạt động?

- Chỉ hoạt động trên HTTPS hoặc localhost
- Cần browser hiện đại (Chrome/Edge khuyến nghị)
- Check microphone permissions

### API key không hoạt động?

- Kiểm tra đã lấy key từ https://makersuite.google.com/app/apikey
- Key phải còn valid và có quota
- Clear LocalStorage và nhập lại

## 📝 License

Dự án này được tạo cho mục đích học tập - VNR202 Assignment

## 👨‍💻 Tác Giả

- **Sinh viên**: [Tên của bạn]
- **Lớp**: VNR202
- **Môn học**: Lịch Sử Việt Nam
- **Năm**: 2025

## 🙏 Acknowledgments

- Google Gemini AI team
- React & Vite teams
- Django & DRF teams
- Framer Motion
- Font Awesome
- Web Speech API contributors

---

**Made with ❤️ using React + TypeScript + Django for VNR202 Assignment**
