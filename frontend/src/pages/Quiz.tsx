import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./Quiz.css";

interface QuizProps {
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizData {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ apiKey, onSaveApiKey }) => {
  const [showApiSetup, setShowApiSetup] = useState(!apiKey);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveApiKey = () => {
    if (!apiKeyInput.trim()) {
      alert("Vui lòng nhập API key!");
      return;
    }
    onSaveApiKey(apiKeyInput);
    setShowApiSetup(false);
    alert("✓ API key đã được lưu thành công!");
  };

  const generateQuiz = async () => {
    if (!apiKey) {
      alert("Vui lòng cấu hình API key trước!");
      return;
    }

    setIsLoading(true);
    const prompt = `Bạn là một giáo viên lịch sử Việt Nam chuyên nghiệp. Tạo 10 câu hỏi trắc nghiệm về chủ đề:

"Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)"

Tập trung vào hai giai đoạn:
1. Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975-1981)
2. Đại hội V của Đảng và đổi mới kinh tế (1982-1986)

Yêu cầu:
- Mỗi câu có 4 đáp án A, B, C, D
- Đáp án phải chính xác về mặt lịch sử
- Câu hỏi có độ khó từ dễ đến trung bình
- Câu hỏi phải đa dạng: về sự kiện, con số, nhân vật, ý nghĩa

Trả về CHÍNH XÁC format JSON sau (không thêm markdown, không thêm giải thích):
{
  "questions": [
    {
      "question": "Câu hỏi ở đây?",
      "options": ["A. Đáp án A", "B. Đáp án B", "C. Đáp án C", "D. Đáp án D"],
      "correctAnswer": 0,
      "explanation": "Giải thích ngắn gọn"
    }
  ]
}`;

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      const textResponse = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = textResponse.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        throw new Error("Invalid response format");
      }

      const data: QuizData = JSON.parse(jsonMatch[0]);

      if (!data.questions || data.questions.length === 0) {
        throw new Error("No questions generated");
      }

      setQuizData(data);
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
    } catch (error) {
      console.error("Error generating quiz:", error);
      alert(
        "❌ Có lỗi xảy ra khi tạo quiz. Vui lòng kiểm tra API key và thử lại!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (
      quizData &&
      index === quizData.questions[currentQuestionIndex].correctAnswer
    ) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!quizData) return;

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getResultMessage = () => {
    if (!quizData) return "";
    const percentage = (score / quizData.questions.length) * 100;

    if (percentage >= 90)
      return "🌟 Xuất sắc! Bạn có kiến thức rất tốt về lịch sử!";
    if (percentage >= 70)
      return "👍 Tốt lắm! Bạn đã nắm vững phần lớn kiến thức!";
    if (percentage >= 50) return "📚 Khá tốt! Hãy ôn lại một số nội dung!";
    return "💪 Cố gắng thêm nhé! Hãy đọc lại nội dung và thử lại!";
  };

  if (showApiSetup) {
    return (
      <section className="quiz-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="section-title">Kiểm Tra Kiến Thức</h2>
            <p className="section-subtitle">Quiz được tạo bởi Gemini AI</p>
          </motion.div>

          <div className="quiz-container">
            <div className="api-key-setup">
              <h3>Cấu Hình Gemini API</h3>
              <p>Vui lòng nhập API key của bạn để sử dụng tính năng Quiz</p>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Nhập Gemini API Key..."
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                />
                <button onClick={handleSaveApiKey} className="btn-primary">
                  <i className="fas fa-save"></i> Lưu
                </button>
              </div>
              <p className="help-text">
                <i className="fas fa-info-circle"></i>
                Lấy API key tại:{" "}
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google AI Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">Kiểm Tra Kiến Thức</h2>
          <p className="section-subtitle">Quiz được tạo bởi Gemini AI</p>
        </motion.div>

        <div className="quiz-container">
          {!quizData && !showResult && (
            <div className="quiz-start">
              <motion.button
                className="btn-primary btn-large"
                onClick={generateQuiz}
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Đang tạo quiz...
                  </>
                ) : (
                  <>
                    <i className="fas fa-magic"></i> Tạo Quiz Mới
                  </>
                )}
              </motion.button>
            </div>
          )}

          {quizData && !showResult && (
            <div className="quiz-content">
              <div className="quiz-header">
                <div className="quiz-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${
                          ((currentQuestionIndex + 1) /
                            quizData.questions.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="progress-text">
                    Câu {currentQuestionIndex + 1} / {quizData.questions.length}
                  </p>
                </div>
                <div className="quiz-score">
                  <i className="fas fa-star"></i>
                  <span>{score}</span> điểm
                </div>
              </div>

              <div className="quiz-body">
                <h3 className="question">
                  {quizData.questions[currentQuestionIndex].question}
                </h3>
                <div className="options">
                  {quizData.questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <motion.div
                        key={index}
                        className={`option ${
                          selectedAnswer !== null
                            ? index ===
                              quizData.questions[currentQuestionIndex]
                                .correctAnswer
                              ? "correct"
                              : index === selectedAnswer
                              ? "incorrect"
                              : ""
                            : ""
                        }`}
                        onClick={() => handleSelectAnswer(index)}
                        whileHover={selectedAnswer === null ? { x: 10 } : {}}
                      >
                        {option}
                      </motion.div>
                    )
                  )}
                </div>

                {selectedAnswer !== null && (
                  <motion.button
                    className="btn-secondary btn-large"
                    onClick={handleNextQuestion}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {currentQuestionIndex < quizData.questions.length - 1
                      ? "Câu Tiếp Theo"
                      : "Xem Kết Quả"}
                    <i className="fas fa-arrow-right"></i>
                  </motion.button>
                )}
              </div>
            </div>
          )}

          {showResult && quizData && (
            <motion.div
              className="quiz-result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="result-card">
                <i className="fas fa-trophy"></i>
                <h3>Hoàn Thành!</h3>
                <p className="result-score">
                  Bạn đạt <span>{score}</span>/{quizData.questions.length} điểm
                </p>
                <p className="result-message">{getResultMessage()}</p>
                <motion.button
                  className="btn-primary btn-large"
                  onClick={handleRetake}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-redo"></i> Tạo Quiz Mới
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
