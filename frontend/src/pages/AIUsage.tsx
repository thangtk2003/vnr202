import { motion } from "framer-motion";
import "./AIUsage.css";

const AIUsage = () => {
  const usageData = [
    {
      title: "Gemini AI - Quiz Generator",
      icon: "fa-brain",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tool: "Google Gemini API (gemini-pro model)",
      purpose:
        "Tạo câu hỏi trắc nghiệm tự động về nội dung lịch sử, giúp học sinh kiểm tra kiến thức một cách sinh động và linh hoạt",
      prompt: `Bạn là một giáo viên lịch sử chuyên nghiệp. Tạo 10 câu hỏi trắc nghiệm về chủ đề:
"Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)"

Yêu cầu:
- Mỗi câu có 4 đáp án A, B, C, D
- Đáp án phải chính xác lịch sử
- Câu hỏi có độ khó từ dễ đến khó
- Trả về format JSON`,
      result:
        "AI tạo ra 10 câu hỏi chất lượng với độ chính xác cao, phù hợp với nội dung chương học",
      edit: "Kiểm tra và điều chỉnh một số câu hỏi để đảm bảo độ chính xác 100% với sự kiện lịch sử",
    },
    {
      title: "Gemini AI - Voice Chatbot",
      icon: "fa-comments",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tool: "Google Gemini API + Web Speech API",
      purpose:
        "Tạo chatbot hỗ trợ học tập, trả lời câu hỏi về lịch sử thông qua giọng nói và văn bản",
      prompt: `Bạn là chuyên gia lịch sử Việt Nam giai đoạn 1975-1986.
Hãy trả lời câu hỏi:
- Chính xác lịch sử
- Dễ hiểu cho học sinh
- Ngắn gọn (150 từ)
- Có ví dụ minh họa`,
      result:
        "Chatbot phản hồi nhanh, chính xác với khả năng nhận diện giọng nói tiếng Việt",
      edit: "Thêm system prompt để giới hạn phạm vi trả lời trong nội dung chương học, tránh lan man",
    },
    {
      title: "React + TypeScript",
      icon: "fa-code",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tool: "React 18 + Vite + TypeScript + Framer Motion",
      purpose:
        "Xây dựng frontend hiện đại với type safety, component-based architecture và animations mượt mà",
      prompt: `// Component structure
- Navbar: Navigation với responsive menu
- Home: Nội dung lý thuyết với animations
- TrainJourney: Timeline animation với train movement
- Quiz: AI-generated quiz với progress tracking
- Chatbot: Voice-enabled chat interface
- AIUsage: Documentation component`,
      result:
        "Frontend responsive, type-safe, với UX/UI chuyên nghiệp và animations mượt mà",
      edit: "Tối ưu performance, thêm error handling, cải thiện accessibility",
    },
    {
      title: "Framer Motion Animations",
      icon: "fa-magic",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      tool: "Framer Motion Library",
      purpose:
        "Tạo animations và transitions mượt mà, tăng trải nghiệm người dùng",
      prompt: `Animation techniques:
- Fade in on mount
- Smooth page transitions
- Train movement animation
- Hover effects
- Loading states
- Voice indicator animation`,
      result:
        "Website có animations chuyên nghiệp, mượt mà, tăng tính tương tác",
      edit: "Điều chỉnh timing và easing để animations tự nhiên hơn",
    },
  ];

  return (
    <section className="ai-usage-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">AI Usage Documentation</h2>
          <p className="section-subtitle">
            Chi tiết sử dụng công cụ AI và công nghệ trong dự án
          </p>
        </motion.div>

        <div className="usage-grid">
          {usageData.map((item, index) => (
            <motion.div
              key={index}
              className="usage-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className="usage-header"
                style={{ background: item.gradient }}
              >
                <i className={`fas ${item.icon}`}></i>
                <h3>{item.title}</h3>
              </div>

              <div className="usage-content">
                <div className="usage-item">
                  <h4>
                    <i className="fas fa-tools"></i> Công Cụ
                  </h4>
                  <p>{item.tool}</p>
                </div>

                <div className="usage-item">
                  <h4>
                    <i className="fas fa-bullseye"></i> Mục Đích
                  </h4>
                  <p>{item.purpose}</p>
                </div>

                <div className="usage-item">
                  <h4>
                    <i className="fas fa-code"></i> Prompt/Code Chính
                  </h4>
                  <div className="code-block">
                    <code>{item.prompt}</code>
                  </div>
                </div>

                <div className="usage-item">
                  <h4>
                    <i className="fas fa-check-circle"></i> Kết Quả
                  </h4>
                  <p>{item.result}</p>
                </div>

                <div className="usage-item">
                  <h4>
                    <i className="fas fa-edit"></i> Chỉnh Sửa
                  </h4>
                  <p>{item.edit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIUsage;
