import { useState } from "react";
import { motion } from "framer-motion";
import VietnamMap from "../components/VietnamMap";
import "./TrainJourney.css";

interface Station {
  year: string;
  title: string;
  subtitle: string;
  icon: string;
  content: {
    description: string;
    facts: string[];
    quote?: string;
    challenge?: string;
  };
  interactive?: {
    type: string;
    data?: unknown;
  };
}

const stations: Station[] = [
  {
    year: "1975",
    title: "Ga Thống Nhất",
    subtitle: "Đất nước liền một dải",
    icon: "fa-flag",
    content: {
      description:
        "Đại thắng Mùa Xuân 1975 giải phóng hoàn toàn miền Nam, thống nhất đất nước. Nhiệm vụ mới: Hàn gắn vết thương chiến tranh, thống nhất hai miền về kinh tế - xã hội, và xây dựng Chủ nghĩa Xã hội.",
      facts: [
        "Hậu quả chiến tranh nặng nề",
        "Hai miền có 2 chế độ kinh tế khác biệt",
        "Nạn thất nghiệp, mù chữ cao",
      ],
      challenge:
        "Bạn có biết? Sau 1975, Việt Nam đối mặt với 3 thách thức lớn!",
    },
    interactive: {
      type: "unification1975",
    },
  },
  {
    year: "1976",
    title: "Ga Định Hướng",
    subtitle: "Vạch đường lối mới",
    icon: "fa-compass",
    content: {
      description:
        "Đại hội IV của Đảng (12/1976) vạch ra đường lối xây dựng CNXH trên cả nước. Quốc hội thống nhất được bầu ra, đổi tên nước thành CHXHCN Việt Nam. Kế hoạch 5 năm (1976-1980) bắt đầu.",
      facts: [
        "Đại hội IV của Đảng (tháng 12/1976)",
        "Tổng tuyển cử bầu Quốc hội khóa VI thống nhất",
        "Đổi tên nước: Cộng hòa XHCN Việt Nam",
        "Xác lập mô hình Kinh tế Kế hoạch hóa Tập trung (bao cấp)",
      ],
    },
    interactive: {
      type: "congress1976",
    },
  },
  {
    year: "1979",
    title: "Ga Thử Lửa",
    subtitle: "Vừa xây dựng, vừa chiến đấu",
    icon: "fa-shield-alt",
    content: {
      description:
        "Đất nước vừa phải xây dựng kinh tế, vừa phải tiến hành 2 cuộc chiến tranh bảo vệ biên giới Tây Nam (chống Pôn Pốt) và biên giới phía Bắc.",
      facts: [
        "Chiến tranh biên giới phía Bắc",
        "Bảo vệ biên giới Tây Nam",
        "Khẩu hiệu: Vừa sản xuất, vừa sẵn sàng chiến đấu",
      ],
      quote: "Nguồn lực quốc gia bị chia hai hướng: Kinh tế và Quốc phòng",
    },
    interactive: {
      type: "war1979",
    },
  },
  {
    year: "1981",
    title: "Ga Phá Rào",
    subtitle: "Khoán 100 - Cởi trói nông dân",
    icon: "fa-seedling",
    content: {
      description:
        "Mô hình kế hoạch hóa tập trung bộc lộ khuyết điểm. Sản xuất nông nghiệp đình đốn, thiếu lương thực. Chỉ thị 100-CT/TW (Khoán 100) ra đời, 'cởi trói' cho nông dân.",
      facts: [
        "Khoán sản phẩm đến nhóm lao động",
        "Nông dân được hưởng sản phẩm vượt khoán",
        "Năng suất lúa gạo tăng mạnh",
      ],
      quote: "Chỉ thị 100 - Bước đột phá đầu tiên trong tư duy kinh tế",
    },
    interactive: {
      type: "comparison",
    },
  },
  {
    year: "1982",
    title: "Ga Chuyển Hướng",
    subtitle: "Nhìn thẳng vào sự thật",
    icon: "fa-exchange-alt",
    content: {
      description:
        "Đại hội V (3/1982) - Bước ngoặt 'nhìn thẳng vào sự thật'. Đại hội thừa nhận những sai lầm trong quản lý kinh tế, khẳng định sự đúng đắn của 'Khoán 100'.",
      facts: [
        "Thừa nhận sai lầm trong quản lý kinh tế",
        "2 nhiệm vụ chiến lược: Xây dựng và Bảo vệ",
        "Điều chỉnh tư duy về hiệu quả kinh tế",
      ],
      quote:
        "Phải biết lấy hiệu quả kinh tế làm thước đo chính xác nhất cho mọi hoạt động kinh tế",
    },
    interactive: {
      type: "riceProductivity",
    },
  },
  {
    year: "1985",
    title: "Ga Bão Táp",
    subtitle: "Cải cách Giá-Lương-Tiền thất bại",
    icon: "fa-exclamation-triangle",
    content: {
      description:
        "Nghị quyết 06 và cuộc cải cách 'Giá - Lương - Tiền' thất bại. In tiền, đổi tiền gây ra lạm phát 'phi mã' (lên đến 774.7%). Khủng hoảng kinh tế-xã hội chạm đáy.",
      facts: [
        "Lạm phát lên đến 774.7%",
        "Người dân xếp hàng dài đi đổi tiền",
        "Tiền mất giá nghiêm trọng",
      ],
      quote:
        "Cú sốc cuối cùng chứng minh mô hình kế hoạch hóa tập trung không còn phù hợp",
    },
    interactive: {
      type: "inflation",
    },
  },
  {
    year: "1986",
    title: "Bình Minh Đổi Mới",
    subtitle: "Hướng tới Đại hội VI",
    icon: "fa-sun",
    content: {
      description:
        "Cuộc khủng hoảng 1985 là 'cú sốc' cuối cùng, chứng minh mô hình kế hoạch hóa tập trung không còn phù hợp. Thực tiễn bắt buộc Đảng phải đi đến quyết định lịch sử - mở ra CÔNG CUỘC ĐỔI MỚI.",
      facts: [
        "Giai đoạn vừa xây dựng, vừa bảo vệ Tổ quốc",
        "Vừa tìm tòi, thử nghiệm và cả thất bại",
        "Cung cấp cơ sở lý luận và thực tiễn cho Đổi Mới",
      ],
      quote:
        "Những thất bại và thành công đã dẫn đến Đại hội VI (12/1986) - mở ra Công cuộc Đổi Mới",
    },
  },
];

const TrainJourney = () => {
  const [currentStation, setCurrentStation] = useState(-1); // -1 = chưa bắt đầu
  const [inflationValue, setInflationValue] = useState(10);
  const [dilemmaSlider, setDilemmaSlider] = useState(50);
  const [showComparison, setShowComparison] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);

  const startJourney = () => {
    setCurrentStation(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextStation = () => {
    if (currentStation < stations.length - 1) {
      setCurrentStation(currentStation + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStation = () => {
    if (currentStation > 0) {
      setCurrentStation(currentStation - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const resetJourney = () => {
    setCurrentStation(-1);
  };

  const handleInflationClick = () => {
    if (inflationValue < 775) {
      const interval = setInterval(() => {
        setInflationValue((prev) => {
          if (prev >= 774) {
            clearInterval(interval);
            return 774;
          }
          return prev + 50;
        });
      }, 100);
    }
  };

  const renderInteractive = (station: Station) => {
    if (!station.interactive) return null;

    switch (station.interactive.type) {
      case "unification1975":
        return (
          <div className="unification-1975-container">
            {/* Video YouTube */}
            <motion.div
              className="video-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="interactive-title">
                <i className="fas fa-video"></i> Khoảnh khắc lịch sử 30/4/1975
              </h4>
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/ecJSxFzvSKk"
                  title="Giải phóng Sài Gòn 30/4/1975"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-captions">
                <div className="caption-item">
                  <i className="fas fa-tank"></i>
                  <span>
                    <strong>Xe tăng 390:</strong> Phá cổng chính Dinh Độc Lập
                  </span>
                </div>
                <div className="caption-item">
                  <i className="fas fa-tank"></i>
                  <span>
                    <strong>Xe tăng 843:</strong> Phá cổng phụ - Chấm dứt chiến
                    tranh
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hình ảnh sum vầy */}
            <motion.div
              className="reunion-image-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h4 className="interactive-title">
                <i className="fas fa-heart"></i> Bắc - Nam sum họp
              </h4>
              <div
                className="image-wrapper"
                onClick={() => setShowImagePopup(true)}
              >
                <img
                  src="https://bhd.1cdn.vn/2024/04/13/baohaiphong.vn-files-ecm-source_files-2024-04-13-_18.jpg"
                  alt="Bắc Nam sum họp"
                  className="reunion-image"
                />
                <div className="image-overlay">
                  <i className="fas fa-search-plus"></i>
                  <p>Nhấn để xem chi tiết</p>
                </div>
              </div>
              <p className="image-credit">
                <i className="fas fa-camera"></i> NSNA Võ An Khánh - Tháng
                10/1976
              </p>
            </motion.div>

            {/* Bản đồ */}
            <motion.div
              className="map-interactive-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h4 className="interactive-title">
                <i className="fas fa-map-marked-alt"></i> Bản Đồ Thống Nhất
              </h4>
              <p className="map-description">
                Chứng kiến khoảnh khắc lịch sử: Đất nước Việt Nam từ chia cắt
                đến thống nhất
              </p>
              <VietnamMap />
            </motion.div>

            {/* Popup chi tiết hình ảnh */}
            {showImagePopup && (
              <motion.div
                className="image-popup-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setShowImagePopup(false)}
              >
                <motion.div
                  className="image-popup-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="popup-close"
                    onClick={() => setShowImagePopup(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="popup-image">
                    <img
                      src="https://bhd.1cdn.vn/2024/04/13/baohaiphong.vn-files-ecm-source_files-2024-04-13-_18.jpg"
                      alt="Bắc Nam sum họp"
                    />
                  </div>
                  <div className="popup-text">
                    <h3>
                      <i className="fas fa-heart"></i> Bức ảnh "Bắc - Nam sum
                      họp"
                    </h3>
                    <h4>Khoảnh khắc vàng của NSNA Võ An Khánh 🇻🇳</h4>
                    <p>
                      "Bắc Nam sum họp" là một bức ảnh đẹp với nhiều cảm xúc
                      được NSNA Võ An Khánh tình cờ ghi lại trong chuyến đi thực
                      tế tại xã Ninh Thạnh Lợi (huyện Hồng Dân, tỉnh Bạc Liêu)
                      vào tháng 10/1976; là tấm phim cuối cùng trong cuộn phim
                      còn trong máy của ông vào thời điểm đó.
                    </p>
                    <p>
                      "Bắc Nam sum họp" đã trở thành bức ảnh gây xúc động bởi
                      gom trọn ý nghĩa về "tình Nam - nghĩa Bắc" qua hình ảnh
                      nhân hậu tuyệt vời của 2 bà mẹ Bắc - Nam. Người mẹ miền
                      Bắc với khăn mỏ quạ và hàm răng nhuộm đen huyền, người mẹ
                      miền Nam tóc búi sau đầu với khăn rằn ngang vai. Cái ôm
                      siết, nụ cười "như mùa thu tỏa nắng" của ngày gặp gỡ, sum
                      họp!
                    </p>
                    <p>
                      "Bắc Nam sum họp", một khoảnh khắc vàng chứa đựng ý nghĩa
                      đẹp của những năm tháng đầu tiên đất nước thống nhất, trọn
                      một niềm vui!
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        );

      case "map":
        return (
          <motion.div
            className="map-interactive-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h4 className="interactive-title">
              <i className="fas fa-map-marked-alt"></i> Bản Đồ Thống Nhất
            </h4>
            <p className="map-description">
              Chứng kiến khoảnh khắc lịch sử: Đất nước Việt Nam từ chia cắt đến
              thống nhất
            </p>
            <VietnamMap />
          </motion.div>
        );

      case "congress1976":
        return (
          <div className="congress-1976-container">
            {/* Video Đại hội IV */}
            <motion.div
              className="video-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="interactive-title">
                <i className="fas fa-video"></i> Đại hội IV & Tổng tuyển cử 1976
              </h4>
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/_QLQj37K7g0"
                  title="Đại hội IV của Đảng và Tổng tuyển cử 1976"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-captions">
                <div className="caption-item">
                  <i className="fas fa-users"></i>
                  <span>
                    <strong>Đại hội Đảng lần thứ IV:</strong> Vạch ra đường lối
                    xây dựng CNXH trên cả nước
                  </span>
                </div>
                <div className="caption-item">
                  <i className="fas fa-vote-yea"></i>
                  <span>
                    <strong>Tổng tuyển cử:</strong> Bầu Quốc hội khóa VI thống
                    nhất
                  </span>
                </div>
                <div className="caption-item">
                  <i className="fas fa-flag"></i>
                  <span>
                    <strong>Đổi tên nước:</strong> Cộng hòa Xã hội Chủ nghĩa
                    Việt Nam
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hình ảnh lịch sử */}
            <motion.div
              className="historical-images-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h4 className="interactive-title">
                <i className="fas fa-images"></i> Hình ảnh lịch sử Tổng tuyển cử
                1976
              </h4>

              <div className="image-grid">
                {/* Hình 1: Hà Nội */}
                <div className="historical-image-item">
                  <div className="image-frame">
                    <img
                      src="https://a.tcnn.vn//Images/images/5.jpeg"
                      alt="Mít tinh tại Nhà hát Lớn Hà Nội"
                      loading="lazy"
                    />
                  </div>
                  <div className="image-caption">
                    <div className="caption-header">
                      <i className="fas fa-calendar-day"></i>
                      <strong>22/4/1976 - Hà Nội</strong>
                    </div>
                    <p>
                      Tại Nhà hát Lớn Hà Nội, Ủy ban Mặt trận Tổ quốc và Ủy ban
                      hành chính thành phố Hà Nội tổ chức mít tinh chào mừng
                      cuộc Tổng tuyển cử. Chủ tịch Tôn Đức Thắng, Phó Chủ tịch
                      Nguyễn Lương Bằng, Chủ tịch Ủy ban Thường vụ Quốc hội
                      Trường Chinh và Thủ tướng Phạm Văn Đồng tới dự.
                    </p>
                  </div>
                </div>

                {/* Hình 2: Sài Gòn */}
                <div className="historical-image-item">
                  <div className="image-frame">
                    <img
                      src="https://a.tcnn.vn//Images/images/7.jpeg"
                      alt="Mít tinh tại Sài Gòn"
                      loading="lazy"
                    />
                  </div>
                  <div className="image-caption">
                    <div className="caption-header">
                      <i className="fas fa-calendar-day"></i>
                      <strong>23/4/1976 - Sài Gòn</strong>
                    </div>
                    <p>
                      Hàng vạn nhân dân thành phố Sài Gòn (từ 2/7/1976 được đổi
                      tên là TP Hồ Chí Minh) mít tinh chào mừng ngày bầu cử Quốc
                      hội thống nhất đất nước.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Infographic Mô hình Bao Cấp - Động */}
            <motion.div
              className="infographic-container animated"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
            >
              <h4>
                <i className="fas fa-chart-line"></i> Cơ chế Bao Cấp
              </h4>
              <div className="infographic-animated">
                {/* Cấp 1: Nguồn gốc - Nhà nước/Trung ương */}
                <motion.div
                  className="info-node level-1"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  <i className="fas fa-landmark"></i>
                  <div className="node-content">
                    <strong>NHÀ NƯỚC / TRUNG ƯƠNG</strong>
                    <small>Nguồn gốc quyết định</small>
                  </div>
                </motion.div>

                {/* Cấp 2: Mệnh lệnh - Mũi tên GIAO CHỈ TIÊU */}
                <motion.div
                  className="arrow-section down-arrow"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: 1.9, duration: 0.8 }}
                >
                  <motion.div
                    className="arrow-line green"
                    animate={{ scaleY: [0, 1] }}
                    transition={{ delay: 2.0, duration: 0.5 }}
                  />
                  <motion.div
                    className="arrow-label command"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3, duration: 0.5 }}
                  >
                    <i className="fas fa-arrow-down"></i>
                    <div className="label-text">
                      <strong>GIAO CHỈ TIÊU</strong>
                      <small>Kế hoạch sản xuất, giá cả cứng nhắc</small>
                    </div>
                  </motion.div>
                  <motion.i
                    className="fas fa-arrow-down arrow-icon"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ delay: 2.5, duration: 1, repeat: Infinity }}
                  />
                </motion.div>

                {/* Cấp 3: Thực hiện - Nhà máy/HTX */}
                <motion.div
                  className="info-node level-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.8 }}
                >
                  <i className="fas fa-industry"></i>
                  <div className="node-content">
                    <strong>NHÀ MÁY / HỢP TÁC XÃ</strong>
                    <small>Đơn vị sản xuất trì trệ</small>
                  </div>
                  <div className="slow-indicator">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span>Thiếu động lực</span>
                  </div>
                </motion.div>

                {/* Cấp 4: Thu hồi - Mũi tên NỘP SẢN PHẨM */}
                <motion.div
                  className="arrow-section up-arrow"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: 3.3, duration: 0.8 }}
                >
                  <motion.i
                    className="fas fa-arrow-up arrow-icon"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ delay: 3.5, duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="arrow-label return"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3.8, duration: 0.5 }}
                  >
                    <i className="fas fa-arrow-up"></i>
                    <div className="label-text">
                      <strong>NỘP SẢN PHẨM</strong>
                      <small>Thiếu hụt, chậm trễ</small>
                    </div>
                    <motion.i
                      className="fas fa-times-circle error-icon"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        delay: 4.0,
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="arrow-line red interrupted"
                    animate={{ scaleY: [0, 1] }}
                    transition={{ delay: 4.1, duration: 0.6 }}
                  />
                </motion.div>

                {/* Cấp 5: Hậu quả - Phân phối & Người dân */}
                <motion.div
                  className="info-node level-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.5, duration: 0.6 }}
                >
                  <i className="fas fa-users"></i>
                  <div className="node-content">
                    <strong>PHÂN PHỐI & NGƯỜI DÂN</strong>
                    <small>Sổ gạo, tem phiếu</small>
                  </div>
                  <div className="consequence-items">
                    <motion.span
                      className="consequence-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 4.8, duration: 0.4 }}
                    >
                      <i className="fas fa-book"></i> Sổ gạo
                    </motion.span>
                    <motion.span
                      className="consequence-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 5.0, duration: 0.4 }}
                    >
                      <i className="fas fa-ticket-alt"></i> Tem phiếu
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );

      case "infographic":
        return (
          <motion.div
            className="infographic-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4>
              <i className="fas fa-chart-line"></i> Mô hình Bao Cấp
            </h4>
            <div className="infographic">
              <div className="info-node top">
                <i className="fas fa-landmark"></i>
                <span>NHÀ NƯỚC</span>
              </div>
              <div className="arrow down">
                <i className="fas fa-arrow-down"></i>
                <span>GIAO CHỈ TIÊU</span>
              </div>
              <div className="info-node middle">
                <i className="fas fa-industry"></i>
                <span>NHÀ MÁY / HỢP TÁC XÃ</span>
              </div>
              <div className="arrow up">
                <i className="fas fa-arrow-up"></i>
                <span>NỘP SẢN PHẨM</span>
              </div>
              <div className="info-node bottom">
                <i className="fas fa-landmark"></i>
                <span>NHÀ NƯỚC</span>
              </div>
            </div>
          </motion.div>
        );

      case "war1979":
        return (
          <div className="war-1979-container">
            {/* Videos Section */}
            <motion.div
              className="war-videos-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4>
                <i className="fas fa-video"></i> Phim Tài Liệu Lịch Sử
              </h4>

              {/* Video 1: Biên giới phía Bắc */}
              <div className="video-container">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/fr-qcSIxX_I"
                    title="Cuộc chiến đấu bảo vệ biên giới phía Bắc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-captions">
                  <div className="caption-item">
                    <i className="fas fa-mountain"></i>
                    <span>
                      Cuộc chiến đấu bảo vệ biên giới phía Bắc của Tổ quốc
                    </span>
                  </div>
                  <div className="caption-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Bảo vệ chủ quyền lãnh thổ thiêng liêng</span>
                  </div>
                  <div className="caption-item">
                    <i className="fas fa-flag"></i>
                    <span>
                      Khẳng định tinh thần "Không có gì quý hơn độc lập, tự do"
                    </span>
                  </div>
                </div>
              </div>

              {/* Video 2: Biên giới Tây Nam và Khmer Đỏ */}
              <div className="video-container">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/xmCLRFY9XsE"
                    title="Chiến tranh biên giới Tây Nam và sự thật về chế độ diệt chủng Pol Pot"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-captions">
                  <div className="caption-item">
                    <i className="fas fa-hands-helping"></i>
                    <span>
                      Chiến tranh biên giới Tây Nam và chế độ diệt chủng Pol Pot
                    </span>
                  </div>
                  <div className="caption-item">
                    <i className="fas fa-users"></i>
                    <span>
                      Giải phóng nhân dân Campuchia khỏi nạn diệt chủng
                    </span>
                  </div>
                  <div className="caption-item">
                    <i className="fas fa-balance-scale"></i>
                    <span>Nghĩa vụ quốc tế và bảo vệ biên giới đất nước</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map with Hot Spots */}
            <motion.div
              className="war-map-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4>
                <i className="fas fa-map-marked-alt"></i> Bản Đồ Hai Mặt Trận
              </h4>
              <p className="map-description">
                Việt Nam phải đối mặt với chiến tranh ở hai biên giới: phía Bắc
                và Tây Nam
              </p>
              <div className="war-map-wrapper">
                <VietnamMap unified={true} />
                <div className="hotspot north" title="Biên giới phía Bắc">
                  <div className="hotspot-pulse"></div>
                  <i className="fas fa-exclamation-triangle"></i>
                  <span className="hotspot-label">Biên giới phía Bắc</span>
                </div>
                <div className="hotspot southwest" title="Biên giới Tây Nam">
                  <div className="hotspot-pulse"></div>
                  <i className="fas fa-exclamation-triangle"></i>
                  <span className="hotspot-label">Biên giới Tây Nam</span>
                </div>
              </div>
            </motion.div>

            {/* Volunteer Images */}
            <motion.div
              className="volunteer-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h4>
                <i className="fas fa-user-friends"></i> Thanh Niên Tình Nguyện
              </h4>
              <div className="volunteer-images">
                <div className="volunteer-image-item">
                  <img
                    src="https://file3.qdnd.vn/data/images/0/2025/03/26/upload_2259/10.jpg?dpi=150&quality=100&w=870"
                    alt="Thanh niên viết đơn tình nguyện"
                  />
                  <div className="image-overlay">
                    <p>
                      <i className="fas fa-pen"></i> Thanh niên viết đơn tình
                      nguyện nhập ngũ
                    </p>
                  </div>
                </div>
                <div className="volunteer-image-item">
                  <img
                    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2019/2/15/657555/Sss.png?w=800&h=496&crop=auto&scale=both"
                    alt="Lễ xuất quân bảo vệ biên giới"
                  />
                  <div className="image-overlay">
                    <p>
                      <i className="fas fa-flag"></i> Lễ xuất quân bảo vệ biên
                      giới Tổ quốc
                    </p>
                  </div>
                </div>
              </div>
              <p className="volunteer-note">
                <i className="fas fa-quote-left"></i> Hàng vạn thanh niên viết
                đơn tình nguyện nhập ngũ, thể hiện tinh thần "Quyết tử cho Tổ
                quốc quyết sinh"
                <i className="fas fa-quote-right"></i>
              </p>
            </motion.div>

            {/* Dilemma Interactive (keep original) */}
            <motion.div
              className="dilemma-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h4>
                <i className="fas fa-balance-scale"></i> Thử Thách Lưỡng Nan
              </h4>
              <p className="dilemma-intro">
                Kéo thanh trượt để phân bổ nguồn lực
              </p>
              <div className="slider-container">
                <div className="resource-bar">
                  <div
                    className="bar-section economy"
                    style={{ width: `${100 - dilemmaSlider}%` }}
                  >
                    <span>KINH TẾ</span>
                    {dilemmaSlider > 60 && (
                      <div className="alert">
                        <i className="fas fa-exclamation-triangle"></i> Kiệt
                        quệ!
                      </div>
                    )}
                  </div>
                  <div
                    className="bar-section defense"
                    style={{ width: `${dilemmaSlider}%` }}
                  >
                    <span>QUỐC PHÒNG</span>
                    {dilemmaSlider < 40 && (
                      <div className="alert">
                        <i className="fas fa-exclamation-triangle"></i> Nguy
                        hiểm!
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={dilemmaSlider}
                  onChange={(e) => setDilemmaSlider(Number(e.target.value))}
                  className="dilemma-slider"
                />
              </div>
              <p className="dilemma-note">
                <i className="fas fa-info-circle"></i> Đây là tình thế "tiến
                thoái lưỡng nan" của đất nước giai đoạn này
              </p>
            </motion.div>
          </div>
        );

      case "dilemma":
        return (
          <motion.div
            className="dilemma-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4>
              <i className="fas fa-balance-scale"></i> Thử Thách Lưỡng Nan
            </h4>
            <p className="dilemma-intro">
              Kéo thanh trượt để phân bổ nguồn lực
            </p>
            <div className="slider-container">
              <div className="resource-bar">
                <div
                  className="bar-section economy"
                  style={{ width: `${100 - dilemmaSlider}%` }}
                >
                  <span>KINH TẾ</span>
                  {dilemmaSlider > 60 && (
                    <div className="alert">
                      <i className="fas fa-exclamation-triangle"></i> Kiệt quệ!
                    </div>
                  )}
                </div>
                <div
                  className="bar-section defense"
                  style={{ width: `${dilemmaSlider}%` }}
                >
                  <span>QUỐC PHÒNG</span>
                  {dilemmaSlider < 40 && (
                    <div className="alert">
                      <i className="fas fa-exclamation-triangle"></i> Nguy hiểm!
                    </div>
                  )}
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={dilemmaSlider}
                onChange={(e) => setDilemmaSlider(Number(e.target.value))}
                className="dilemma-slider"
              />
            </div>
            <p className="dilemma-note">
              <i className="fas fa-info-circle"></i> Đây là tình thế "tiến thoái
              lưỡng nan" của đất nước giai đoạn này
            </p>
          </motion.div>
        );

      case "comparison":
        return (
          <motion.div
            className="comparison-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4>
              <i className="fas fa-exchange-alt"></i> So Sánh Trước/Sau Khoán
              100
            </h4>

            {/* Image Comparison Slider */}
            <motion.div
              className="image-comparison-slider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h5 className="slider-title">
                <i className="fas fa-image"></i> Kéo thanh trượt để so sánh
              </h5>
              <div className="comparison-slider-wrapper">
                <div className="comparison-slider-container">
                  {/* Ảnh Sau (Background) */}
                  <div className="comparison-image after-image">
                    <img
                      src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/23/838651/Kinh-Te-Trung-Uong2.jpg"
                      alt="Sau Khoán 100 - Nông dân phấn khởi thu hoạch"
                    />
                    <div className="image-label after-label">
                      <i className="fas fa-smile"></i> SAU KHOÁN 100
                    </div>
                  </div>

                  {/* Ảnh Trước (Overlay) */}
                  <div
                    className="comparison-image before-image"
                    style={{
                      clipPath: `inset(0 ${100 - dilemmaSlider}% 0 0)`,
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcj32PwI1PvF4Tn7ZotMQXq8wNclLqf82_wTaXoVsevxVlgrOuC5wt8-_aFM-E3IFliQ&usqp=CAU"
                      alt="Trước Khoán 100 - Đồng ruộng tập thể vắng vẻ"
                    />
                    <div className="image-label before-label">
                      <i className="fas fa-frown"></i> TRƯỚC KHOÁN 100
                    </div>
                  </div>

                  {/* Slider Control */}
                  <div className="comparison-slider-control">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={dilemmaSlider}
                      onChange={(e) =>
                        setDilemmaSlider(parseInt(e.target.value))
                      }
                      className="slider-input"
                    />
                    <div
                      className="slider-handle"
                      style={{ left: `${dilemmaSlider}%` }}
                    >
                      <div className="slider-line"></div>
                      <div className="slider-button">
                        <i className="fas fa-arrows-alt-h"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="slider-instruction">
                  <i className="fas fa-hand-pointer"></i> Kéo thanh trượt để
                  thấy sự thay đổi "thần kỳ" về động lực sản xuất
                </p>
              </div>
            </motion.div>

            {/* Text Comparison */}
            <div className="comparison-toggle">
              <button
                className={!showComparison ? "active" : ""}
                onClick={() => setShowComparison(false)}
              >
                <i className="fas fa-arrow-left"></i> Trước Khoán
              </button>
              <button
                className={showComparison ? "active" : ""}
                onClick={() => setShowComparison(true)}
              >
                Sau Khoán <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <motion.div
              className="comparison-content"
              key={showComparison ? "after" : "before"}
              initial={{ opacity: 0, x: showComparison ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {!showComparison ? (
                <div className="comparison-card before">
                  <i
                    className="fas fa-frown"
                    style={{ fontSize: "4rem", color: "#999" }}
                  ></i>
                  <h5>Đồng Ruộng Tập Thể</h5>
                  <ul>
                    <li>
                      <i className="fas fa-minus-circle"></i> Nông dân làm việc
                      cầm chừng
                    </li>
                    <li>
                      <i className="fas fa-minus-circle"></i> Năng suất thấp
                    </li>
                    <li>
                      <i className="fas fa-minus-circle"></i> Thiếu động lực sản
                      xuất
                    </li>
                    <li>
                      <i className="fas fa-minus-circle"></i> Thiếu lương thực
                      trầm trọng
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="comparison-card after">
                  <i
                    className="fas fa-smile"
                    style={{ fontSize: "4rem", color: "#4caf50" }}
                  ></i>
                  <h5>Ruộng Khoán 100</h5>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i> Nông dân được
                      hưởng vượt khoán
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Năng suất tăng vọt
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Động lực sản xuất
                      cao
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Tình hình lương
                      thực cải thiện
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        );

      case "riceProductivity":
        return (
          <motion.div
            className="rice-productivity-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4>
              <i className="fas fa-chart-line"></i> Năng Suất Lúa Gạo Tăng
              Trưởng
            </h4>
            <p className="chart-subtitle">
              Nhờ Khoán 100, năng suất lúa gạo bắt đầu đi lên rõ rệt
            </p>

            {/* Video Đại hội V */}
            <motion.div
              className="congress-video-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h5>
                <i className="fas fa-video"></i> Đại hội lần thứ V của Đảng
              </h5>
              <div className="video-container">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/iOTqu_beK2k"
                    title="Đại hội lần thứ V của Đảng - Từng bước tháo gỡ khó khăn, phát triển kinh tế"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-captions">
                  <div className="caption-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Đại hội V (tháng 3/1982)</span>
                  </div>
                  <div className="caption-item">
                    <i className="fas fa-eye"></i>
                    <span>Bước ngoặt "Nhìn thẳng vào sự thật"</span>
                  </div>
                  <div className="caption-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Khẳng định sự đúng đắn của Khoán 100</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="rice-chart">
              {/* Trục Y - Năng suất */}
              <div className="chart-y-axis">
                <div className="y-label">
                  <span>Năng suất</span>
                  <span>(tấn/ha)</span>
                </div>
                <div className="y-values">
                  <span>4.5</span>
                  <span>4.0</span>
                  <span>3.5</span>
                  <span>3.0</span>
                  <span>2.5</span>
                  <span>2.0</span>
                </div>
              </div>

              {/* Biểu đồ cột */}
              <div className="chart-bars">
                {/* Năm 1980 - Trước Khoán 100 */}
                <div className="bar-group">
                  <motion.div
                    className="bar before-khoan"
                    initial={{ height: 0 }}
                    animate={{ height: "45%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="bar-value">2.4</div>
                  </motion.div>
                  <div className="bar-label">
                    <strong>1980</strong>
                    <span>Trước Khoán</span>
                  </div>
                </div>

                {/* Mũi tên chỉ điểm chuyển đổi */}
                <div className="khoan-100-marker">
                  <motion.div
                    className="marker-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  >
                    <i className="fas fa-star"></i>
                    <span>Khoán 100</span>
                    <span className="year-marker">1981</span>
                  </motion.div>
                </div>

                {/* Năm 1982 - Sau Khoán 100 */}
                <div className="bar-group">
                  <motion.div
                    className="bar after-khoan"
                    initial={{ height: 0 }}
                    animate={{ height: "65%" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <div className="bar-value">3.3</div>
                  </motion.div>
                  <div className="bar-label">
                    <strong>1982</strong>
                    <span>Sau Khoán</span>
                  </div>
                </div>

                {/* Năm 1985 - Tiếp tục tăng */}
                <div className="bar-group">
                  <motion.div
                    className="bar after-khoan growth"
                    initial={{ height: 0 }}
                    animate={{ height: "85%" }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <div className="bar-value">4.2</div>
                  </motion.div>
                  <div className="bar-label">
                    <strong>1985</strong>
                    <span>Tăng trưởng</span>
                  </div>
                </div>
              </div>

              {/* Trục X */}
              <div className="chart-x-axis">
                <i className="fas fa-calendar-alt"></i> Năm
              </div>
            </div>

            <div className="chart-conclusion">
              <motion.div
                className="conclusion-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <i className="fas fa-arrow-up"></i>
                <p>
                  <strong>Kết quả:</strong> Năng suất lúa gạo tăng{" "}
                  <span className="highlight">+75%</span> sau 5 năm thực hiện
                  Khoán 100, chứng minh sự đúng đắn của chính sách!
                </p>
              </motion.div>
            </div>
          </motion.div>
        );

      case "inflation":
        return (
          <motion.div
            className="inflation-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4>
              <i className="fas fa-fire"></i> Cú Sốc Lạm Phát
            </h4>
            <div className="inflation-game">
              <div className="price-display">
                <i className="fas fa-bowl-rice"></i>
                <h5>Giá bát phở</h5>
                <motion.div
                  className="price"
                  key={inflationValue}
                  initial={{ scale: 1.5, color: "#ff0000" }}
                  animate={{ scale: 1, color: "#333" }}
                  transition={{ duration: 0.3 }}
                >
                  {inflationValue.toLocaleString()} đồng
                </motion.div>
              </div>
              <button className="inflation-btn" onClick={handleInflationClick}>
                <i className="fas fa-forward"></i> SAU CẢI CÁCH GIÁ
              </button>
              {inflationValue >= 774 && (
                <motion.div
                  className="inflation-alert"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <i className="fas fa-exclamation-circle"></i>
                  <p>
                    <strong>Tiền mất giá!</strong>
                    <br />
                    Lạm phát 774.7% - Mô hình cũ đã hoàn toàn bế tắc
                  </p>
                </motion.div>
              )}
            </div>

            {/* Historical Images */}
            <motion.div
              className="inflation-images-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h5>
                <i className="fas fa-images"></i> Hình Ảnh Lịch Sử
              </h5>
              <div className="inflation-images">
                <div className="inflation-image-item">
                  <img
                    src="https://i1-kinhdoanh.vnecdn.net/2016/12/15/doi-tien-0-2182-1481774665.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=tLxmhU4KtMIAoBWx8sCwEA"
                    alt="Người dân xếp hàng dài đi đổi tiền"
                  />
                  <div className="image-overlay">
                    <p>
                      <i className="fas fa-users"></i> Người dân xếp hàng dài đi
                      đổi tiền
                    </p>
                  </div>
                </div>
                <div className="inflation-image-item">
                  <img
                    src="https://vcdn1-kinhdoanh.vnecdn.net/2016/12/15/mua-hang-thoi-bao-cap-0-9267-1481774665.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=OEYD790QfTOuhTUYyYw_yw"
                    alt="Những tờ tiền mệnh giá lớn mất giá"
                  />
                  <div className="image-overlay">
                    <p>
                      <i className="fas fa-money-bill-wave"></i> Những tờ tiền
                      mệnh giá lớn mất giá
                    </p>
                  </div>
                </div>
              </div>
              <p className="inflation-note">
                <i className="fas fa-quote-left"></i> Cải cách Giá-Lương-Tiền
                (1985) gây ra lạm phát phi mã, làm đảo lộn đời sống người dân.
                Đây là bài học đắt giá về việc cải cách kinh tế không đúng hướng
                <i className="fas fa-quote-right"></i>
              </p>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className={`train-section ${
        currentStation >= 0 && currentStation < stations.length
          ? `station-${stations[currentStation].year}`
          : "station-platform-view"
      }`}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Chuyến Tàu Ký Ức</h2>
          <p className="section-subtitle">Hành Trình 1975 - 1986</p>
        </motion.div>

        {/* Sân Ga - Màn hình chờ */}
        {currentStation === -1 && (
          <motion.div
            className="station-platform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="platform-content">
              <motion.div
                className="platform-train-image"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2025/4/8/minhhoatau304-bacnamlienmotdai-1744077100665221175085.jpg"
                  alt="Tàu Thống Nhất 30/04/1975"
                />
              </motion.div>
              <h3>Sân Ga Lịch Sử</h3>
              <p className="platform-intro">
                Năm 1975, cuộc kháng chiến kết thúc. Đất nước thống nhất, nhưng
                con đường phía trước còn vô vàn chông gai.
              </p>
              <p className="platform-subtitle">
                Mời bạn bước lên chuyến tàu trở về giai đoạn lịch sử bản lề:{" "}
                <strong>10 năm trước Đổi Mới</strong>
              </p>
              <motion.button
                className="start-journey-btn"
                onClick={startJourney}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play-circle"></i> BẮT ĐẦU HÀNH TRÌNH
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Nội dung các Ga */}
        {currentStation >= 0 && currentStation < stations.length && (
          <motion.div
            className="station-detail"
            key={currentStation}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="station-header">
              <motion.div
                className="station-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <i className={`fas ${stations[currentStation].icon}`}></i>
              </motion.div>
              <div className="station-title-group">
                <h2>{stations[currentStation].year}</h2>
                <h3>{stations[currentStation].title}</h3>
                <p className="station-subtitle">
                  {stations[currentStation].subtitle}
                </p>
              </div>
            </div>

            <div className="station-content">
              <motion.div
                className="content-description"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p>{stations[currentStation].content.description}</p>
              </motion.div>

              {stations[currentStation].content.challenge && (
                <motion.div
                  className="challenge-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <i className="fas fa-lightbulb"></i>
                  <p>{stations[currentStation].content.challenge}</p>
                </motion.div>
              )}

              <motion.div
                className="facts-list"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4>
                  <i className="fas fa-list-ul"></i> Điểm Nổi Bật
                </h4>
                <ul>
                  {stations[currentStation].content.facts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <i className="fas fa-chevron-right"></i> {fact}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {stations[currentStation].content.quote && (
                <motion.div
                  className="quote-box"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <i className="fas fa-quote-left"></i>
                  <p>{stations[currentStation].content.quote}</p>
                  <i className="fas fa-quote-right"></i>
                </motion.div>
              )}

              {/* Phần tương tác */}
              {renderInteractive(stations[currentStation])}
            </div>

            {/* Navigation Controls */}
            <div className="station-navigation">
              <motion.button
                className="nav-btn prev"
                onClick={prevStation}
                disabled={currentStation === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-left"></i> Ga Trước
              </motion.button>

              <div className="progress-indicator">
                <span className="progress-text">
                  Ga {currentStation + 1} / {stations.length}
                </span>
                <div className="progress-dots">
                  {stations.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === currentStation ? "active" : ""
                      } ${index < currentStation ? "passed" : ""}`}
                    ></span>
                  ))}
                </div>
              </div>

              {currentStation < stations.length - 1 ? (
                <motion.button
                  className="nav-btn next"
                  onClick={nextStation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ga Tiếp <i className="fas fa-arrow-right"></i>
                </motion.button>
              ) : (
                <motion.button
                  className="nav-btn finish"
                  onClick={resetJourney}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hoàn Thành <i className="fas fa-flag-checkered"></i>
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrainJourney;
