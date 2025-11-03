import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./Chatbot.css";

interface ChatbotProps {
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC<ChatbotProps> = ({ apiKey, onSaveApiKey }) => {
  const [showApiSetup, setShowApiSetup] = useState(!apiKey);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý AI. Bạn có thể hỏi tôi về lịch sử Đảng Cộng sản Việt Nam giai đoạn 1975-1986. Bạn có thể gõ hoặc sử dụng giọng nói!",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSaveApiKey = () => {
    if (!apiKeyInput.trim()) {
      alert("Vui lòng nhập API key!");
      return;
    }
    onSaveApiKey(apiKeyInput);
    setShowApiSetup(false);
    alert("✓ API key đã được lưu thành công!");
  };

  const sendMessage = async (text: string = inputText) => {
    if (!text.trim()) return;
    if (!apiKey) {
      alert("Vui lòng cấu hình API key trước!");
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    const prompt = `Bạn là một chuyên gia lịch sử Việt Nam, đặc biệt về giai đoạn 1975-1986.

Context: Chương 3 - Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)
Bao gồm:
- Xây dựng CNXH và bảo vệ Tổ quốc (1975-1981)
- Đại hội V và đổi mới kinh tế (1982-1986)

Hãy trả lời câu hỏi của học sinh một cách:
- Chính xác về mặt lịch sử
- Dễ hiểu, phù hợp với học sinh THPT
- Ngắn gọn (tối đa 150 từ)
- Có thể đưa ra ví dụ cụ thể

Câu hỏi: ${text}`;

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "❌ Xin lỗi, tôi gặp sự cố. Vui lòng thử lại!",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("❌ Trình duyệt của bạn không hỗ trợ nhận diện giọng nói!");
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();

    recognitionRef.current.lang = "vi-VN";
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      setIsListening(false);
      sendMessage(transcript);
    };

    recognitionRef.current.onerror = () => {
      setIsListening(false);
      alert("❌ Có lỗi xảy ra khi nhận diện giọng nói!");
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error("Error starting recognition:", error);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleVoiceRecognition = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  if (showApiSetup) {
    return (
      <section className="chatbot-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="section-title">Chatbot Giọng Nói</h2>
            <p className="section-subtitle">Hỏi đáp lịch sử với Gemini AI</p>
          </motion.div>

          <div className="chatbot-container">
            <div className="api-key-setup">
              <h3>Cấu Hình Gemini API</h3>
              <p>Vui lòng nhập API key của bạn để sử dụng tính năng Chatbot</p>
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
    <section className="chatbot-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">Chatbot Giọng Nói</h2>
          <p className="section-subtitle">Hỏi đáp lịch sử với Gemini AI</p>
        </motion.div>

        <div className="chatbot-container">
          <div className="chat-messages">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`chat-message ${message.sender}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="message-avatar">
                    <i
                      className={`fas ${
                        message.sender === "bot" ? "fa-robot" : "fa-user"
                      }`}
                    ></i>
                  </div>
                  <div className="message-content">
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="chat-message bot"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="message-content">
                    <p>Đang suy nghĩ...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <motion.button
              className={`voice-btn ${isListening ? "listening" : ""}`}
              onClick={toggleVoiceRecognition}
              title="Nhấn để nói"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i
                className={`fas ${isListening ? "fa-stop" : "fa-microphone"}`}
              ></i>
            </motion.button>

            <input
              type="text"
              placeholder="Nhập câu hỏi của bạn..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              disabled={isListening}
            />

            <motion.button
              className="send-btn"
              onClick={() => sendMessage()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-paper-plane"></i>
            </motion.button>
          </div>

          {isListening && (
            <motion.div
              className="voice-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="voice-wave"></div>
              <p>Đang lắng nghe...</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
