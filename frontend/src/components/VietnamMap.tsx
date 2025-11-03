import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion } from "framer-motion";
import "./VietnamMap.css";

// URLs từ bài viết Viblo
const vietnamGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_VNM_0.json";

const paracelIslandsGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XPI_0.json";

const spralyIslandsGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XSP_0.json";

interface VietnamMapProps {
  unified?: boolean; // Prop để hiển thị bản đồ đã thống nhất
}

const VietnamMap = ({ unified = false }: VietnamMapProps) => {
  const [isUnified, setIsUnified] = useState(unified);

  const handleUnification = () => {
    setIsUnified(true);
  };

  const vietnam = [vietnamGeoUrl, paracelIslandsGeoUrl, spralyIslandsGeoUrl];

  return (
    <div className="vietnam-map-container">
      {/* Text thông báo - Di chuyển lên trên */}
      {!unified && (
        <motion.div
          className="map-status"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {!isUnified ? (
            <p className="divided-text">
              <i className="fas fa-divide"></i> Đất nước chia cắt (Trước 1975)
            </p>
          ) : (
            <motion.p
              className="unified-text"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <i className="fas fa-flag"></i> Đất Nước Thống Nhất (30/4/1975)
            </motion.p>
          )}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="map-wrapper"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1800,
            center: [108, 14],
          }}
          width={900}
          height={700}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {vietnam.map((geoUrl, index) => (
            <Geographies key={geoUrl} geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // index 0: Việt Nam đất liền, 1: Hoàng Sa, 2: Trường Sa
                  const isIsland = index === 1 || index === 2;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        isIsland
                          ? "#000000"
                          : isUnified || unified
                          ? "#da251c"
                          : "#ff6b6b"
                      }
                      stroke={isIsland ? "#FFD700" : "#ffffff"}
                      strokeWidth={isIsland ? 4 : 0.5}
                      style={{
                        default: {
                          outline: "none",
                        },
                        hover: {
                          outline: "none",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          ))}
        </ComposableMap>

        {/* Labels cho Hoàng Sa và Trường Sa */}
        <div className="island-labels">
          <div className="island-label hoang-sa">
            <i className="fas fa-map-marker-alt"></i> Hoàng Sa
          </div>
          <div className="island-label truong-sa">
            <i className="fas fa-map-marker-alt"></i> Trường Sa
          </div>
        </div>

        {/* Vĩ tuyến 17 - đường chia cắt */}
        {!isUnified && !unified && (
          <motion.div
            className="parallel-17"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="dividing-line">
              <span className="line-label">Vĩ Tuyến 17</span>
            </div>
          </motion.div>
        )}

        {/* Hiệu ứng thống nhất */}
        {isUnified && (
          <motion.div
            className="unification-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5 }}
          />
        )}
      </motion.div>

      {/* Nút Thống nhất Đất nước */}
      {!isUnified && !unified && (
        <motion.div
          className="unification-button-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="unification-button" onClick={handleUnification}>
            <i className="fas fa-flag"></i>
            <span>Thống Nhất Đất Nước</span>
          </button>
        </motion.div>
      )}

      {/* Âm thanh còi tàu */}
      {isUnified && (
        <motion.div
          className="train-horn-indicator"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-volume-up"></i>
          <span>Còi tàu hân hoan!</span>
        </motion.div>
      )}
    </div>
  );
};

export default VietnamMap;
