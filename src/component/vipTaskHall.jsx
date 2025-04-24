import React, { useState } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

const VipTaskHall = ({ showPopup, userData }) => {
  const [showToast, setShowToast] = useState(false);

  const vipTasks = [
    { id: 1, level: "VIP1", commission: "1.00", unlocked: true, link: "/task" },
    {
      id: 2,
      level: "VIP2",
      commission: "5.00",
      unlocked: false,
      link: "/task/2",
    },
    {
      id: 3,
      level: "VIP3",
      commission: "36.00",
      unlocked: false,
      link: "/task/3",
    },
    {
      id: 4,
      level: "VIP4",
      commission: "80.00",
      unlocked: false,
      link: "/task/4",
    },
    {
      id: 5,
      level: "VIP5",
      commission: "150.00",
      unlocked: false,
      link: "/task/5",
    },
    {
      id: 6,
      level: "VIP6",
      commission: "300.00",
      unlocked: false,
      link: "/task/6",
    },
    {
      id: 7,
      level: "VIP7",
      commission: "500.00",
      unlocked: false,
      link: "/task/7",
    },
    {
      id: 8,
      level: "VIP8",
      commission: "800.00",
      unlocked: false,
      link: "/task/8",
    },
    {
      id: 9,
      level: "VIP9",
      commission: "1200.00",
      unlocked: false,
      link: "/task/9",
    },
    {
      id: 10,
      level: "VIP10",
      commission: "2000.00",
      unlocked: false,
      link: "/task/10",
    },
    {
      id: 11,
      level: "VIP11",
      commission: "3500.00",
      unlocked: false,
      link: "/task/11",
    },
    {
      id: 12,
      level: "VIP12",
      commission: "5000.00",
      unlocked: false,
      link: "/task/12",
    },
    {
      id: 13,
      level: "VIP13",
      commission: "8000.00",
      unlocked: false,
      link: "/task/13",
    },
  ];

  const handleTaskClick = (unlocked, id) => {
    if (!unlocked) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const styles = {
    container: {
      backgroundColor: "#f0f4ff",
      padding: "16px",
      borderRadius: "12px",
      maxWidth: "600px",
      margin: "15px auto",
      position: "relative",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "16px",
      color: "#333",
    },
    taskList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    taskLink: {
      textDecoration: "none",
      color: "inherit",
      display: "block",
    },
    taskItem: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "12px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      position: "relative",
      cursor: "pointer",
    },
    coinContainer: {
      width: "60px",
      height: "60px",
      position: "relative",
    },
    coinImage: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ffd700",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#b8860b",
      fontSize: "24px",
      fontWeight: "bold",
    },
    lockOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    taskInfo: {
      flex: 1,
    },
    orderCommission: {
      color: "#666",
      fontSize: "12px",
      marginBottom: "4px",
    },
    commission: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    vipLevel: {
      color: "#666",
      fontSize: "14px",
      marginTop: "4px",
    },
    toast: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(51, 51, 51, 0.9)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "20px",
      fontSize: "14px",
      zIndex: 1000,
      transition: "opacity 0.3s ease",
      opacity: showToast ? 1 : 0,
      pointerEvents: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Task Hall</h2>
      <div style={styles.taskList}>
        {userData?.vips?.map((item, index) => (
          <Link key={index} to={`/recharge-method`} style={styles.taskLink}>
            <div style={styles.taskItem}>
              <div style={styles.coinContainer}>
                <div style={styles.coinImage}>
                  <img
                    src="https://api.dpdginvest.vip/upload/img/67441808662e.webp"
                    alt=""
                  />
                  {item.unlock ? (
                    <div></div>
                  ) : (
                    <div style={styles.lockOverlay}>
                      <Lock color="white" size={24} />
                    </div>
                  )}
                </div>
              </div>
              <div style={styles.taskInfo}>
                <div style={styles.orderCommission}>Order commission</div>
                <div style={styles.commission}>${item.income_from}</div>
                <div style={styles.vipLevel}>VIP {item.id}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={styles.toast}>Please upgrade your level</div>
    </div>
  );
};

export default VipTaskHall;
