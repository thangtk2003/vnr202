import { motion } from "framer-motion";
import "./AIUsage.css";

const AIUsage = () => {
  const usageData = [
    {
      title: "Gemini AI - Quiz Generator",
      icon: "fa-brain",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tool: "Google Gemini 2.0 Flash Exp API",
      purpose:
        "Hỗ trợ tạo câu hỏi trắc nghiệm tự động về nội dung lịch sử, giúp học sinh kiểm tra kiến thức",
      prompt: `Bạn là một giáo viên lịch sử chuyên nghiệp. Tạo 10 câu hỏi trắc nghiệm về chủ đề:
"Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)"

Yêu cầu:
- Mỗi câu có 4 đáp án A, B, C, D
- Đáp án phải chính xác lịch sử
- Câu hỏi có độ khó từ dễ đến khó
- Trả về format JSON`,
      result: "AI sinh ra 10 câu hỏi ban đầu với cấu trúc JSON chuẩn",
      edit: "Kiểm chứng 100% câu hỏi với giáo trình Lịch sử LLCT. Điều chỉnh 3/10 câu không chính xác về năm và sự kiện. Bổ sung thêm 5 câu tự viết về Đại hội V và Khoán 100.",
      source:
        "Giáo trình Lịch sử LLCT (2021), Nghị quyết Đại hội IV, V của Đảng",
    },
    {
      title: "Gemini AI - Voice Chatbot",
      icon: "fa-comments",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tool: "Google Gemini API + Web Speech API (Browser native)",
      purpose:
        "Hỗ trợ trả lời câu hỏi học sinh về lịch sử giai đoạn 1975-1986 thông qua giọng nói và văn bản",
      prompt: `Bạn là chuyên gia lịch sử Việt Nam giai đoạn 1975-1986.

Context: Chương 3 - Đảng lãnh đạo cả nước quá độ lên CNXH (1975-1986)
Bao gồm: Xây dựng CNXH và bảo vệ Tổ quốc (1975-1981), Đại hội V và đổi mới kinh tế (1982-1986)

Hãy trả lời câu hỏi:
- Chính xác lịch sử
- Dễ hiểu cho học sinh THPT
- Ngắn gọn (150 từ)
- Có ví dụ minh họa`,
      result:
        "AI sinh ra câu trả lời tự nhiên bằng tiếng Việt với độ chính xác trung bình",
      edit: "Thêm system prompt giới hạn phạm vi trả lời. Kiểm chứng các câu trả lời mẫu với tài liệu chính thống. Thêm tính năng Text-to-Speech cho phản hồi. Sinh viên không sử dụng AI để TRẢ LỜI trực tiếp mà chỉ để TẠO GIAO DIỆN chatbot.",
      source: "Văn kiện Đại hội Đảng các kỳ IV, V, VI",
    },
    {
      title: "GitHub Copilot - Code Assistant",
      icon: "fa-robot",
      gradient: "linear-gradient(135deg, #24c6dc 0%, #514a9d 100%)",
      tool: "GitHub Copilot (GPT-4 based)",
      purpose:
        "Hỗ trợ viết code React/TypeScript, tạo components, xử lý logic và styling",
      prompt: `// Ví dụ prompt cho Copilot:
- "Create a Vietnam map component using react-simple-maps"
- "Add animation for train journey timeline"
- "Implement voice recognition with Web Speech API"
- "Create responsive navbar with mobile menu"`,
      result: "AI sinh ra code boilerplate và suggestions cho components",
      edit: "Sinh viên tự viết 70% logic nghiệp vụ. Copilot chỉ hỗ trợ syntax, import statements và CSS styling. Toàn bộ nội dung lịch sử, dữ liệu 7 ga tàu, timeline đều do sinh viên tự nghiên cứu và nhập tay.",
      source: "React documentation, TypeScript handbook, MDN Web Docs",
    },
    {
      title: "AI Image Generation & Search",
      icon: "fa-images",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      tool: "Google Image Search + Historical Archives",
      purpose: "Tìm kiếm hình ảnh lịch sử chân thực để minh họa cho các ga tàu",
      prompt: `Search queries:
- "Tàu Thống Nhất 30/4/1975"
- "Đại hội IV Đảng 1976"
- "Chiến tranh biên giới 1979"
- "Nông dân đổi tiền 1985"`,
      result:
        "Tìm được các hình ảnh lịch sử từ nguồn uy tín (VnExpress, Tuổi Trẻ, QĐND)",
      edit: "Sinh viên tự chọn lọc và kiểm chứng nguồn gốc hình ảnh. Tất cả hình ảnh đều có credit và link nguồn. Không sử dụng AI tạo ảnh giả (DALL-E, Midjourney).",
      source:
        "VnExpress, Báo Tuổi Trẻ, Báo Quân đội Nhân dân, Lưu trữ Quốc gia",
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
            Minh bạch việc sử dụng AI trong dự án - Tuân thủ liêm chính học
            thuật
          </p>
        </motion.div>

        {/* Cam kết sử dụng AI có trách nhiệm */}
        <motion.div
          className="commitment-box"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="commitment-header">
            <i className="fas fa-shield-alt"></i>
            <h3>Cam Kết Liêm Chính Học Thuật</h3>
          </div>
          <div className="commitment-content">
            <div className="commitment-item">
              <i className="fas fa-check-circle"></i>
              <p>
                <strong>Không để AI làm thay hoàn toàn:</strong> AI chỉ đóng vai
                trò hỗ trợ kỹ thuật (tạo quiz, chatbot interface, animations).
                Toàn bộ nội dung lịch sử, phân tích sự kiện, thiết kế timeline 7
                ga tàu đều do sinh viên tự nghiên cứu và biên soạn.
              </p>
            </div>
            <div className="commitment-item">
              <i className="fas fa-edit"></i>
              <p>
                <strong>Phân định rõ AI output và phần sinh viên:</strong> Mỗi
                mục dưới đây có phần "Kết Quả AI" (output thô) và "Chỉnh Sửa
                Sinh Viên" (edit, validate, bổ sung). Sinh viên chịu trách nhiệm
                100% về nội dung cuối cùng.
              </p>
            </div>
            <div className="commitment-item">
              <i className="fas fa-book"></i>
              <p>
                <strong>Đối chiếu nguồn chính thống:</strong> Tất cả thông tin
                lịch sử đều được kiểm chứng với giáo trình Lịch sử LLCT, Văn
                kiện Đại hội Đảng, và tài liệu học thuật. Nguồn tham khảo được
                ghi rõ cho từng mục.
              </p>
            </div>
            <div className="commitment-item">
              <i className="fas fa-user-graduate"></i>
              <p>
                <strong>Tuyên bố:</strong> Tôi cam kết đã tự mình nghiên cứu,
                biên soạn nội dung chính và chịu trách nhiệm về sản phẩm cuối
                cùng. AI chỉ là công cụ hỗ trợ, không thay thế quá trình học tập
                và sáng tạo của bản thân.
              </p>
            </div>
          </div>
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
                    <i className="fas fa-check-circle"></i> Kết Quả AI
                  </h4>
                  <p>{item.result}</p>
                </div>

                <div className="usage-item">
                  <h4>
                    <i className="fas fa-edit"></i> Chỉnh Sửa Sinh Viên
                  </h4>
                  <p>{item.edit}</p>
                </div>

                <div className="usage-item source-item">
                  <h4>
                    <i className="fas fa-book-open"></i> Nguồn Tham Khảo
                  </h4>
                  <p>{item.source}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bảng phân định AI vs Sinh viên */}
        <motion.div
          className="delineation-table"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Phân Định Rõ: AI Output vs Công Việc Sinh Viên</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Thành Phần</th>
                  <th>AI Làm Gì</th>
                  <th>Sinh Viên Làm Gì</th>
                  <th>Tỷ Lệ SV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quiz Questions</td>
                  <td>Sinh 10 câu hỏi ban đầu (JSON format)</td>
                  <td>
                    Kiểm chứng 100%, điều chỉnh 3 câu sai, thêm 5 câu tự viết
                  </td>
                  <td className="ratio high">75%</td>
                </tr>
                <tr>
                  <td>Chatbot Logic</td>
                  <td>Trả lời câu hỏi theo context</td>
                  <td>
                    Viết system prompt, giới hạn scope, thêm TTS, tự code UI
                  </td>
                  <td className="ratio high">80%</td>
                </tr>
                <tr>
                  <td>React Components</td>
                  <td>Gợi ý code syntax, imports</td>
                  <td>
                    Tự viết 100% logic nghiệp vụ, 7 ga tàu, timeline, animations
                  </td>
                  <td className="ratio high">90%</td>
                </tr>
                <tr>
                  <td>Nội Dung Lịch Sử</td>
                  <td>Không tham gia</td>
                  <td>
                    Tự nghiên cứu, tóm tắt, viết lại từ giáo trình và văn kiện
                  </td>
                  <td className="ratio high">100%</td>
                </tr>
                <tr>
                  <td>Hình Ảnh</td>
                  <td>Không sử dụng AI tạo ảnh</td>
                  <td>Tự tìm kiếm từ nguồn uy tín, kiểm chứng nguồn gốc</td>
                  <td className="ratio high">100%</td>
                </tr>
                <tr>
                  <td>CSS/Styling</td>
                  <td>Gợi ý syntax CSS</td>
                  <td>Tự thiết kế 7 theme ga tàu, responsive, animations</td>
                  <td className="ratio high">85%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Nguồn tham khảo chính thống */}
        <motion.div
          className="sources-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Nguồn Tham Khảo Chính Thống</h3>
          <p className="sources-description">
            Tất cả thông tin lịch sử trong dự án đều được đối chiếu với các
            nguồn sau:
          </p>
          <div className="sources-grid">
            <div className="source-item-box">
              <i className="fas fa-book"></i>
              <h4>Giáo Trình Chính</h4>
              <ul>
                <li>Giáo trình Lịch sử Đảng Cộng sản Việt Nam (2021)</li>
                <li>
                  Chương 3: Đảng lãnh đạo cả nước quá độ lên CNXH (1975-1986)
                </li>
              </ul>
            </div>
            <div className="source-item-box">
              <i className="fas fa-file-alt"></i>
              <h4>Văn Kiện Đảng</h4>
              <ul>
                <li>Nghị quyết Đại hội IV (1976)</li>
                <li>Nghị quyết Đại hội V (1982)</li>
                <li>Nghị quyết Đại hội VI (1986)</li>
                <li>Nghị quyết TW 6 khóa IV (1979)</li>
              </ul>
            </div>
            <div className="source-item-box">
              <i className="fas fa-graduation-cap"></i>
              <h4>Tài Liệu Học Thuật</h4>
              <ul>
                <li>
                  Lịch sử Kinh tế Việt Nam 1975-2000 (NXB Chính trị Quốc gia)
                </li>
              </ul>
            </div>
            <div className="source-item-box">
              <i className="fas fa-images"></i>
              <h4>Hình Ảnh Lịch Sử</h4>
              <ul>
                <li>Lưu trữ Quốc gia Việt Nam</li>
                <li>Báo VnExpress, Tuổi Trẻ, Quân đội Nhân dân</li>
                <li>Tất cả đều có credit và link nguồn</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Tuyên bố cuối cùng */}
        <motion.div
          className="final-statement"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="statement-content">
            <i className="fas fa-certificate"></i>
            <p>
              <strong>Tuyên bố:</strong> Sinh viên cam kết đã tự mình nghiên cứu
              nội dung lịch sử, biên soạn timeline 7 ga tàu, thiết kế UI/UX và
              chịu trách nhiệm hoàn toàn về sản phẩm cuối cùng. AI chỉ đóng vai
              trò công cụ hỗ trợ kỹ thuật, không thay thế quá trình học tập và
              sáng tạo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIUsage;
