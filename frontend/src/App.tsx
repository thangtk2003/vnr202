import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TrainJourney from "./pages/TrainJourney";
import Quiz from "./pages/Quiz";
import Chatbot from "./pages/Chatbot";
import AIUsage from "./pages/AIUsage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [geminiApiKey, setGeminiApiKey] = useState<string>("");

  useEffect(() => {
    const savedKey = localStorage.getItem("geminiApiKey");
    if (savedKey) {
      setGeminiApiKey(savedKey);
    }
  }, []);

  const handleSaveApiKey = (key: string) => {
    localStorage.setItem("geminiApiKey", key);
    setGeminiApiKey(key);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/train" element={<TrainJourney />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route
              path="/chatbot"
              element={
                <Chatbot
                  apiKey={geminiApiKey}
                  onSaveApiKey={handleSaveApiKey}
                />
              }
            />
            <Route path="/ai-usage" element={<AIUsage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
