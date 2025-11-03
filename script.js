// Global variables
let geminiApiKey = localStorage.getItem("geminiApiKey") || "";
let currentQuizData = null;
let currentQuestionIndex = 0;
let score = 0;
let trainInterval = null;
let trainPosition = 5;
let isTrainRunning = false;

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initTrain();
  initQuiz();
  initChatbot();
  checkApiKey();
});

// Navigation
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Update active link
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        // Close mobile menu
        navMenu.classList.remove("active");
      }
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll(".section").forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Train Animation
function initTrain() {
  const trainStart = document.getElementById("trainStart");
  const trainPause = document.getElementById("trainPause");
  const trainReset = document.getElementById("trainReset");

  if (trainStart) {
    trainStart.addEventListener("click", startTrain);
  }
  if (trainPause) {
    trainPause.addEventListener("click", pauseTrain);
  }
  if (trainReset) {
    trainReset.addEventListener("click", resetTrain);
  }
}

function startTrain() {
  if (!isTrainRunning) {
    isTrainRunning = true;
    const train = document.getElementById("train");
    const stations = document.querySelectorAll(".station");

    trainInterval = setInterval(() => {
      trainPosition += 0.5;
      if (trainPosition >= 95) {
        trainPosition = 95;
        pauseTrain();
        showCompletionMessage();
      }

      if (train) {
        train.style.left = trainPosition + "%";
      }

      // Highlight current station
      highlightNearestStation(trainPosition, stations);
    }, 50);
  }
}

function pauseTrain() {
  isTrainRunning = false;
  if (trainInterval) {
    clearInterval(trainInterval);
    trainInterval = null;
  }
}

function resetTrain() {
  pauseTrain();
  trainPosition = 5;
  const train = document.getElementById("train");
  if (train) {
    train.style.left = trainPosition + "%";
  }

  // Remove all highlights
  document.querySelectorAll(".station-info").forEach((info) => {
    info.style.background = "white";
    info.style.transform = "translateY(0)";
  });
}

function highlightNearestStation(position, stations) {
  const stationPositions = [5, 20, 35, 50, 65, 80, 95];
  let nearest = 0;
  let minDiff = 100;

  stationPositions.forEach((pos, index) => {
    const diff = Math.abs(position - pos);
    if (diff < minDiff) {
      minDiff = diff;
      nearest = index;
    }
  });

  stations.forEach((station, index) => {
    const info = station.querySelector(".station-info");
    if (index === nearest && minDiff < 5) {
      info.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      info.style.color = "white";
      info.style.transform = "translateY(-10px)";
    } else {
      info.style.background = "white";
      info.style.color = "#333";
      info.style.transform = "translateY(0)";
    }
  });
}

function showCompletionMessage() {
  setTimeout(() => {
    alert("🎉 Chuyến tàu đã đi qua tất cả các mốc lịch sử quan trọng!");
  }, 500);
}

// API Key Management
function checkApiKey() {
  if (geminiApiKey) {
    showQuizContent();
  }
}

function showQuizContent() {
  const apiKeySetup = document.getElementById("apiKeySetup");
  const quizContent = document.getElementById("quizContent");

  if (apiKeySetup && quizContent) {
    apiKeySetup.style.display = "none";
    quizContent.style.display = "block";
  }
}

// Quiz Functions
function initQuiz() {
  const saveApiKeyBtn = document.getElementById("saveApiKey");
  const generateQuizBtn = document.getElementById("generateQuiz");
  const nextQuestionBtn = document.getElementById("nextQuestion");
  const retakeQuizBtn = document.getElementById("retakeQuiz");

  if (saveApiKeyBtn) {
    saveApiKeyBtn.addEventListener("click", saveApiKey);
  }
  if (generateQuizBtn) {
    generateQuizBtn.addEventListener("click", generateQuiz);
  }
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener("click", nextQuestion);
  }
  if (retakeQuizBtn) {
    retakeQuizBtn.addEventListener("click", retakeQuiz);
  }
}

function saveApiKey() {
  const apiKeyInput = document.getElementById("apiKeyInput");
  const key = apiKeyInput.value.trim();

  if (!key) {
    alert("Vui lòng nhập API key!");
    return;
  }

  geminiApiKey = key;
  localStorage.setItem("geminiApiKey", key);
  showQuizContent();
  alert("✓ API key đã được lưu thành công!");
}

async function generateQuiz() {
  if (!geminiApiKey) {
    alert("Vui lòng cấu hình API key trước!");
    return;
  }

  const generateBtn = document.getElementById("generateQuiz");
  generateBtn.disabled = true;
  generateBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Đang tạo quiz...';

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
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    const textResponse = data.candidates[0].content.parts[0].text;

    // Extract JSON from response
    const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Invalid response format");
    }

    currentQuizData = JSON.parse(jsonMatch[0]);

    if (!currentQuizData.questions || currentQuizData.questions.length === 0) {
      throw new Error("No questions generated");
    }

    startQuiz();
  } catch (error) {
    console.error("Error generating quiz:", error);
    alert(
      "❌ Có lỗi xảy ra khi tạo quiz. Vui lòng kiểm tra API key và thử lại!"
    );
  } finally {
    generateBtn.disabled = false;
    generateBtn.innerHTML = '<i class="fas fa-magic"></i> Tạo Quiz Mới';
  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById("quizResult").style.display = "none";
  document.getElementById("questionContainer").style.display = "block";
  document.getElementById("generateQuiz").style.display = "none";

  updateScore();
  showQuestion();
}

function showQuestion() {
  if (
    !currentQuizData ||
    currentQuestionIndex >= currentQuizData.questions.length
  ) {
    showResults();
    return;
  }

  const question = currentQuizData.questions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const currentQuestionEl = document.getElementById("currentQuestion");
  const totalQuestionsEl = document.getElementById("totalQuestions");
  const progressFill = document.getElementById("progressFill");

  questionEl.textContent = question.question;
  currentQuestionEl.textContent = currentQuestionIndex + 1;
  totalQuestionsEl.textContent = currentQuizData.questions.length;

  const progress =
    ((currentQuestionIndex + 1) / currentQuizData.questions.length) * 100;
  progressFill.style.width = progress + "%";

  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.textContent = option;
    optionDiv.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(optionDiv);
  });

  document.getElementById("nextQuestion").style.display = "none";
}

function selectAnswer(selectedIndex) {
  const question = currentQuizData.questions[currentQuestionIndex];
  const options = document.querySelectorAll(".option");

  // Disable all options
  options.forEach((option, index) => {
    option.style.pointerEvents = "none";

    if (index === question.correctAnswer) {
      option.classList.add("correct");
    }

    if (index === selectedIndex && index !== question.correctAnswer) {
      option.classList.add("incorrect");
    }
  });

  // Update score
  if (selectedIndex === question.correctAnswer) {
    score++;
    updateScore();
  }

  // Show next button
  document.getElementById("nextQuestion").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

function showResults() {
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("quizResult").style.display = "block";

  const finalScore = document.getElementById("finalScore");
  const resultMessage = document.getElementById("resultMessage");

  finalScore.textContent = score;

  let message = "";
  const percentage = (score / currentQuizData.questions.length) * 100;

  if (percentage >= 90) {
    message = "🌟 Xuất sắc! Bạn có kiến thức rất tốt về lịch sử!";
  } else if (percentage >= 70) {
    message = "👍 Tốt lắm! Bạn đã nắm vững phần lớn kiến thức!";
  } else if (percentage >= 50) {
    message = "📚 Khá tốt! Hãy ôn lại một số nội dung!";
  } else {
    message = "💪 Cố gắng thêm nhé! Hãy đọc lại nội dung và thử lại!";
  }

  resultMessage.textContent = message;
}

function retakeQuiz() {
  document.getElementById("quizResult").style.display = "none";
  document.getElementById("generateQuiz").style.display = "inline-block";
}

// Chatbot Functions
function initChatbot() {
  const sendBtn = document.getElementById("sendBtn");
  const chatInput = document.getElementById("chatInput");
  const voiceBtn = document.getElementById("voiceBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }

  if (voiceBtn) {
    voiceBtn.addEventListener("click", toggleVoiceRecognition);
  }
}

async function sendMessage() {
  if (!geminiApiKey) {
    alert("Vui lòng cấu hình API key ở phần Quiz trước!");
    return;
  }

  const chatInput = document.getElementById("chatInput");
  const message = chatInput.value.trim();

  if (!message) return;

  // Add user message
  addMessage(message, "user");
  chatInput.value = "";

  // Show typing indicator
  const typingId = addMessage("Đang suy nghĩ...", "bot");

  try {
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

Câu hỏi: ${message}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    const botResponse = data.candidates[0].content.parts[0].text;

    // Remove typing indicator and add real response
    removeMessage(typingId);
    addMessage(botResponse, "bot");
  } catch (error) {
    console.error("Error sending message:", error);
    removeMessage(typingId);
    addMessage("❌ Xin lỗi, tôi gặp sự cố. Vui lòng thử lại!", "bot");
  }
}

function addMessage(text, sender) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${sender}`;

  const messageId = Date.now();
  messageDiv.id = `msg-${messageId}`;

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.innerHTML =
    sender === "bot"
      ? '<i class="fas fa-robot"></i>'
      : '<i class="fas fa-user"></i>';

  const content = document.createElement("div");
  content.className = "message-content";
  content.innerHTML = `<p>${text}</p>`;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);
  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  return messageId;
}

function removeMessage(messageId) {
  const message = document.getElementById(`msg-${messageId}`);
  if (message) {
    message.remove();
  }
}

// Voice Recognition
let recognition = null;
let isListening = false;

function toggleVoiceRecognition() {
  if (
    !("webkitSpeechRecognition" in window) &&
    !("SpeechRecognition" in window)
  ) {
    alert("❌ Trình duyệt của bạn không hỗ trợ nhận diện giọng nói!");
    return;
  }

  if (isListening) {
    stopListening();
  } else {
    startListening();
  }
}

function startListening() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();

  recognition.lang = "vi-VN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    isListening = true;
    document.getElementById("voiceBtn").classList.add("listening");
    document.getElementById("voiceIndicator").style.display = "block";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("chatInput").value = transcript;
    stopListening();
    sendMessage();
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    stopListening();
    alert("❌ Có lỗi xảy ra khi nhận diện giọng nói!");
  };

  recognition.onend = () => {
    stopListening();
  };

  try {
    recognition.start();
  } catch (error) {
    console.error("Error starting recognition:", error);
    stopListening();
  }
}

function stopListening() {
  isListening = false;
  document.getElementById("voiceBtn").classList.remove("listening");
  document.getElementById("voiceIndicator").style.display = "none";

  if (recognition) {
    recognition.stop();
    recognition = null;
  }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});
