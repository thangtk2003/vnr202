import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="home-section">
      <div className="container">
        <motion.div className="hero" {...fadeIn}>
          <h1 className="animate-title">
            Chương 3
          </h1>
          <h1>
            Đảng Lãnh Đạo Cả Nước Quá Độ Lên Chủ Nghĩa Xã Hội Và Tiến Hành Công Cuộc Đổi Mới
          </h1>
          <p className="subtitle">Từ Năm 1975 Đến Nay</p>

          <div className="hero-content">
            <div className="timeline-intro">
              <h2>
                3.1. Lãnh Đạo Cả Nước Xây Dựng Chủ Nghĩa Xã Hội và Bảo Vệ Tổ Quốc (1975 - 1986)
              </h2>

              <motion.div
                className="period-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="period-header">
                  <i className="fas fa-calendar-alt"></i>
                  <h3>3.1.1. Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975 - 1981)</h3>
                </div>
                <div className="period-content">
                  <h4>
                    <i className="fas fa-star"></i> Bối Cảnh Lịch Sử
                  </h4>
                  <p>
                    Sau ngày 30/4/1975, đất nước thống nhất nhưng đối mặt nhiều
                    thách thức:
                  </p>
                  <ul>
                    <li>Hậu quả chiến tranh nặng nề, kinh tế đình đốn</li>
                    <li>Sự khác biệt lớn giữa hai miền Nam - Bắc</li>
                    <li>Tình hình quốc tế phức tạp, cần bảo vệ biên giới</li>
                  </ul>

                  <h4>
                    <i className="fas fa-tasks"></i> Nhiệm Vụ Chính
                  </h4>
                  <ul>
                    <li>
                      <strong>Thống nhất đất nước:</strong> Tổ chức bầu cử Quốc
                      hội thống nhất (25/4/1976), đặt tên nước là Cộng hòa xã
                      hội chủ nghĩa Việt Nam
                    </li>
                    <li>
                      <strong>Khôi phục kinh tế:</strong> Phục hồi sản xuất, cải
                      tạo xã hội chủ nghĩa ở miền Nam
                    </li>
                    <li>
                      <strong>Bảo vệ Tổ quốc:</strong> Đấu tranh chống Khmer Đỏ,
                      bảo vệ biên giới Tây Nam
                    </li>
                    <li>
                      <strong>Kháng chiến chống Trung Quốc:</strong> Chiến thắng
                      cuộc chiến tranh biên giới phía Bắc (1979)
                    </li>
                  </ul>

                  <h4>
                    <i className="fas fa-chart-line"></i> Kế Hoạch 5 Năm
                    (1976-1980)
                  </h4>
                  <p>
                    Đại hội IV của Đảng (12/1976) đề ra kế hoạch 5 năm với mục
                    tiêu:
                  </p>
                  <ul>
                    <li>
                      Xây dựng cơ sở vật chất kỹ thuật của chủ nghĩa xã hội
                    </li>
                    <li>Cải tạo quan hệ sản xuất xã hội chủ nghĩa</li>
                    <li>Phát triển nông nghiệp, công nghiệp và thương mại</li>
                  </ul>

                  <h4>
                    <i className="fas fa-exclamation-triangle"></i> Khó Khăn và
                    Hạn Chế
                  </h4>
                  <ul>
                    <li>
                      Chủ quan duy ý chí, thiếu tính khả thi trong kế hoạch
                    </li>
                    <li>
                      Cơ chế tập trung quan liêu bao cấp làm trì trệ kinh tế
                    </li>
                    <li>
                      Khủng hoảng kinh tế - xã hội nghiêm trọng cuối thập niên
                      70
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="period-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="period-header">
                  <i className="fas fa-calendar-alt"></i>
                  <h3>3.1.2. Đại hội đại biểu toàn quốc lần thứ V của Đảng và các bước đột phá tiếp tục đổi mới kinh tế (1982 - 1986)</h3>
                </div>
                <div className="period-content">
                  <h4>
                    <i className="fas fa-lightbulb"></i> Đại Hội V của Đảng
                    (3/1982)
                  </h4>
                  <p>Đánh dấu bước ngoặt quan trọng trong tư duy lãnh đạo:</p>
                  <ul>
                    <li>
                      Thừa nhận những khuyết điểm, sai lầm trong quá trình xây
                      dựng CNXH
                    </li>
                    <li>Đề ra phương hướng điều chỉnh nền kinh tế</li>
                    <li>
                      Tập trung vào phát triển kinh tế hàng hóa nhiều thành phần
                    </li>
                  </ul>

                  <h4>
                    <i className="fas fa-rocket"></i> Các Bước Đột Phá
                  </h4>
                  <ul>
                    <li>
                      <strong>Chỉ thị 100-CT/TW (1981):</strong> Khoán sản phẩm
                      đến nhóm lao động nông nghiệp
                    </li>
                    <li>
                      <strong>Nghị quyết 06-NQ/TW (1985):</strong> Đổi mới quản
                      lý kinh tế, phá bỏ cơ chế bao cấp
                    </li>
                    <li>
                      <strong>Chính sách giá cả mới:</strong> Điều chỉnh giá cả,
                      tiền lương phù hợp thực tế
                    </li>
                    <li>
                      <strong>Mở rộng tự chủ:</strong> Doanh nghiệp được quyền
                      tự chủ trong sản xuất kinh doanh
                    </li>
                  </ul>

                  <h4>
                    <i className="fas fa-check-circle"></i> Thành Tựu Bước Đầu
                  </h4>
                  <ul>
                    <li>
                      Sản xuất nông nghiệp tăng trưởng, tình hình lương thực
                      được cải thiện
                    </li>
                    <li>Công nghiệp có những bước phát triển tích cực</li>
                    <li>Đời sống nhân dân bắt đầu ổn định hơn</li>
                    <li>
                      Tạo tiền đề quan trọng cho công cuộc Đổi Mới sau này
                    </li>
                  </ul>

                  <h4>
                    <i className="fas fa-road"></i> Ý Nghĩa Lịch Sử
                  </h4>
                  <p>Giai đoạn 1982-1986 là thời kỳ chuyển tiếp quan trọng:</p>
                  <ul>
                    <li>
                      Đảng dần nhận ra sai lầm của cơ chế tập trung quan liêu
                    </li>
                    <li>
                      Bắt đầu tìm kiếm con đường phát triển phù hợp với thực
                      tiễn Việt Nam
                    </li>
                    <li>
                      Chuẩn bị tư tưởng và thực tiễn cho Đại hội VI - mở đầu
                      công cuộc Đổi Mới toàn diện
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="key-takeaways"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3>
                  <i className="fas fa-key"></i> Bài Học Kinh Nghiệm
                </h3>
                <div className="takeaway-grid">
                  <div className="takeaway-item">
                    <i className="fas fa-brain"></i>
                    <h4>Tư Duy Thực Tiễn</h4>
                    <p>Cần xuất phát từ thực tiễn, không chủ quan duy ý chí</p>
                  </div>
                  <div className="takeaway-item">
                    <i className="fas fa-balance-scale"></i>
                    <h4>Cơ Chế Linh Hoạt</h4>
                    <p>Cơ chế kinh tế phải phù hợp với trình độ phát triển</p>
                  </div>
                  <div className="takeaway-item">
                    <i className="fas fa-users"></i>
                    <h4>Lấy Dân Làm Gốc</h4>
                    <p>Chính sách phải xuất phát từ lợi ích của nhân dân</p>
                  </div>
                  <div className="takeaway-item">
                    <i className="fas fa-sync-alt"></i>
                    <h4>Dũng Cảm Đổi Mới</h4>
                    <p>Không ngại thừa nhận sai lầm để điều chỉnh kịp thời</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.a
            href="/train"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-train"></i> Bắt Đầu Hành Trình
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
