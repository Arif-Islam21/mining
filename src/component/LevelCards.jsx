import React from "react";
import { Link } from "react-router-dom";

const styles = {
  card: (gradient) => ({
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "12px",
    background: gradient,
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }),
  levelBadge: {
    position: "absolute",
    top: "8px",
    left: "8px",
    backgroundColor: "#ffc107",
    color: "#000000",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  container: {
    marginTop: "32px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  label: {
    fontSize: "14px",
    opacity: "0.8",
    marginBottom: "4px",
  },
  value: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
    backdropFilter: "blur(6px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    fontWeight: "500",
    fontSize: "14px",
  },

  buttonHover: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    transform: "scale(1.03)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)", // Slight lift on hover
  },
};

const LevelCards = ({ data }) => {
  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        marginTop: "10px",
        width: "100%",
      }}
    >
      <div
        style={styles.card(
          "linear-gradient(to bottom right, #5b67d6, #2a2d69)"
        )}
      >
        <div style={styles.levelBadge}>LVL-1</div>
        <div style={styles.container}>
          <div style={styles.row}>
            <div>
              <p style={styles.label}>Register/Visit</p>
              <p style={styles.value}>
                {data?.refer_lvel1}/{data?.refer_lvel1}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={styles.label}>Commission Percentage</p>
              <p style={styles.value}>{data?.commission?.refer_com1}%</p>
            </div>
          </div>
          <div style={{ ...styles.row, marginTop: "16px" }}>
            <div>
              <p style={styles.label}>Total Income</p>
              <p style={styles.value}>{data?.sumcom_lvel1}</p>
            </div>
            <Link to="/team-details?level=1" style={styles.button}>
              Details
            </Link>
          </div>
        </div>
      </div>

      <div
        style={styles.card(
          "linear-gradient(to bottom right, #3c6e71, #1a2a3b)"
        )}
      >
        <div style={styles.levelBadge}>LVL-2</div>
        <div style={styles.container}>
          <div style={styles.row}>
            <div>
              <p style={styles.label}>Register/Visit</p>
              <p style={styles.value}>
                {data?.refer_lvel2}/{data?.refer_lvel2}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={styles.label}>Commission Percentage</p>
              <p style={styles.value}>{data?.commission?.refer_com2}%</p>
            </div>
          </div>
          <div style={{ ...styles.row, marginTop: "16px" }}>
            <div>
              <p style={styles.label}>Total Income</p>
              <p style={styles.value}>{data?.sumcom_lvel2}</p>
            </div>
            <Link to="/team-details?level=2" style={styles.button}>
              Details
            </Link>
          </div>
        </div>
      </div>

      <div
        style={styles.card(
          "linear-gradient(to bottom right, #00bcd4, #263238)"
        )}
      >
        <div style={styles.levelBadge}>LVL-3</div>
        <div style={styles.container}>
          <div style={styles.row}>
            <div>
              <p style={styles.label}>Register/Visit</p>
              <p style={styles.value}>
                {data?.refer_lvel3}/{data?.refer_lvel2}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={styles.label}>Commission Percentage</p>
              <p style={styles.value}>{data?.commission?.refer_com3}%</p>
            </div>
          </div>
          <div style={{ ...styles.row, marginTop: "16px" }}>
            <div>
              <p style={styles.label}>Total Income</p>
              <p style={styles.value}>{data?.sumcom_lvel3}</p>
            </div>
            <Link to="/team-details?level=3" style={styles.button}>
              Details
            </Link>
          </div>
        </div>
      </div>

      <div
        style={styles.card(
          "linear-gradient(to bottom right, #6c63ff, #1e1e2f)"
        )}
      >
        <div style={styles.levelBadge}>LVL-4</div>
        <div style={styles.container}>
          <div style={styles.row}>
            <div>
              <p style={styles.label}>Register/Visit</p>
              <p style={styles.value}>
                {data?.refer_lvel4}/{data?.refer_lvel4}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={styles.label}>Commission Percentage</p>
              <p style={styles.value}>{data?.commission?.refer_com4}%</p>
            </div>
          </div>
          <div style={{ ...styles.row, marginTop: "16px" }}>
            <div>
              <p style={styles.label}>Total Income</p>
              <p style={styles.value}>{data?.sumcom_lvel4}</p>
            </div>
            <Link to="/team-details?level=4" style={styles.button}>
              Details
            </Link>
          </div>
        </div>
      </div>

      <div
        style={styles.card(
          "linear-gradient(to bottom right, #1e40af, #581c87)"
        )}
      >
        <div style={styles.levelBadge}>LVL-5</div>
        <div style={styles.container}>
          <div style={styles.row}>
            <div>
              <p style={styles.label}>Register/Visit</p>
              <p style={styles.value}>
                {data?.refer_lvel5}/{data?.refer_lvel5}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={styles.label}>Commission Percentage</p>
              <p style={styles.value}>{data?.commission?.refer_com5}%</p>
            </div>
          </div>
          <div style={{ ...styles.row, marginTop: "16px" }}>
            <div>
              <p style={styles.label}>Total Income</p>
              <p style={styles.value}>{data?.sumcom_lvel5}</p>
            </div>
            <Link to="/team-details?level=5" style={styles.button}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelCards;
