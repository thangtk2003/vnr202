import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Trang Chủ", icon: "fa-home" },
    { path: "/train", label: "Chuyến Tàu Ký Ức", icon: "fa-train" },
    { path: "/quiz", label: "Quiz", icon: "fa-question-circle" },
    { path: "/chatbot", label: "Chatbot", icon: "fa-robot" },
    { path: "/ai-usage", label: "AI Usage", icon: "fa-chart-line" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">
          <i className="fas fa-train"></i>
          <span>Chuyến Tàu Ký Ức</span>
        </Link>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <i className={`fas ${link.icon}`}></i>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
