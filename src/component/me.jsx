import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

// Components
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import { FaWallet } from "react-icons/fa6";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    withdraw_balance: "0.00",
    amount: "0.00",
    vip: "0",
    user: {
      email: null,
      phone: null,
      my_vip: 0,
    },
  });

  // Language popup state
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);

  const containerStyle = {
    background: "transparent",
    minHeight: "100vh",
    padding: "15px",
    position: "relative",
  };

  const balanceCardStyle = {
    background: "linear-gradient(135deg, #5b6473, #192333)",
    borderRadius: "20px",
    padding: "20px",
    color: "white",
    margin: "20px 0px 15px 0px",
  };

  const userCardStyle = {
    background: "linear-gradient(135deg, #9aff8d, #6adb5c)",
    borderRadius: "20px 20px 0px 0px",
    padding: "15px 15px 30px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "-20px",
  };

  const menuStyle = {
    display: "flex",
    flexdirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    background: "rgba(49, 45, 61, 1)",
    borderRadius: "20px 20px 0px 0px",
    overflow: "hidden",
    padding: "10px 10px 20px 10px",
    marginBottom: "-20px",
  };

  const menuStyle2 = {
    // display: 'flex',
    flexdirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    background: "white",
    borderRadius: "20px 20px 0px 0px",
    overflow: "hidden",
    paddingBottom: "300px",
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0px",
    color: "white",
    textDecoration: "none",
  };

  const iconStyle = {
    width: "36px",
    height: "36px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "12px",
  };

  const iconStyle2 = {
    width: "36px",
    height: "36px",
    background: "#d7dff8",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 12px",
  };

  const iconStyle3 = {
    width: "36px",
    height: "36px",
    background: "#d8e8f4",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 12px",
  };

  const menuTextStyle = {
    // display: 'flex',
    alignItems: "center",
  };

  const menuTextStyle2 = {
    display: "flex",
    alignItems: "center",
    color: "black",
  };

  const vipBadgeStyle = {
    background: "rgba(255, 255, 255, 0.3)",
    padding: "4px 10px",
    borderRadius: "15px",
    fontSize: "12px",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/me");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const formatEmailOrPhone = (value) => {
    if (!value) return "";
    if (value.includes("@gmail.com")) {
      const [localPart] = value.split("@");
      if (localPart.length <= 5) return value;
      const firstTwo = localPart.slice(0, 2);
      const middleThree = localPart.slice(2, -2).replace(/./g, "*");
      const lastTwo = localPart.slice(-2);
      return `${firstTwo}${middleThree}@gmail.com`;
    }
    const length = value.length;
    if (length <= 5) return value;
    const firstTwo = value.slice(0, 2);
    const middleThree = value.slice(2, -2).replace(/./g, "*");
    const lastTwo = value.slice(-2);
    return `${firstTwo}${middleThree}${lastTwo}`;
  };

  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageVisible(false);
  };

  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="a-t-26 no-4">
      <div>
        <Header
          selectedLanguage={selectedLanguage}
          toggleLangPopup={toggleLangPopup}
        ></Header>
      </div>

      <div id="app" className="mt-3" style={containerStyle}>
        <div>
          <div style={balanceCardStyle}>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {(
                  parseFloat(data.withdraw_balance) + parseFloat(data.amount)
                ).toFixed(2)}
              </div>
              <div style={{ opacity: 0.8, fontSize: "14px" }}>
                {t("total_balance")} (USDT)
              </div>
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {parseFloat(data.amount).toFixed(2)}
              </div>
              <div style={{ opacity: 0.8, fontSize: "14px" }}>
                {t("recharge_amount")} (USDT)
              </div>
            </div>
          </div>

          <div style={balanceCardStyle}>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {data?.user?.refers || 0}
              </div>
              <div style={{ opacity: 0.8, fontSize: "14px" }}>TOTAL REFER</div>
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {data?.user?.teamdeposit || 0.0} USDT
              </div>
              <div style={{ opacity: 0.8, fontSize: "14px" }}>TEAM DEPOSIT</div>
            </div>
            <div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {data?.user?.rank || 0}
              </div>
              <div style={{ opacity: 0.8, fontSize: "14px" }}>MY RANK</div>
            </div>
          </div>

          <div style={userCardStyle}>
            <div style={{ fontSize: "15px", color: "#000" }}>
              {formatEmailOrPhone(data?.user?.email || data?.user?.phone)}
            </div>
            <div style={vipBadgeStyle}>DLH{data?.user?.my_vip}</div>
          </div>

          <div style={menuStyle}>
            <Link to="/wallet-address" style={menuItemStyle}>
              <div style={menuTextStyle}>
                <span style={iconStyle}>
                  <FaWallet size={20} />
                </span>
                <span>{t("Wallet")}</span>
              </div>
            </Link>
            <Link to="/account" style={menuItemStyle}>
              <div style={menuTextStyle}>
                <span style={iconStyle}>
                  <div className="icon i-material-symbols:account-balance-outline-rounded"></div>
                </span>
                <span>{t("account")}</span>
              </div>
            </Link>
            <Link to="/recharge-method" style={menuItemStyle}>
              <div style={menuTextStyle}>
                <span style={iconStyle}>
                  {" "}
                  <div className="icon i-ic:outline-monetization-on"></div>
                </span>
                <span>{t("recharge")}</span>
              </div>
            </Link>
            <Link to="/withdraw" style={menuItemStyle}>
              <div style={menuTextStyle}>
                <span style={iconStyle}>
                  <div className="icon i-fluent:money-hand-16-regular"></div>
                </span>
                <span>{t("withdraw")}</span>
              </div>
            </Link>
            <Link to="/financial" style={menuItemStyle}>
              <div style={menuTextStyle}>
                <span style={iconStyle}>
                  <div className="icon i-ion:ios-trending-up"></div>
                </span>
                <span>{t("financial")}</span>
                <br />
                {/* <span>{t("Records")}</span> */}
              </div>
            </Link>
          </div>
          <div style={menuStyle2}>
            <Link to="/change-password" style={menuItemStyle}>
              <div style={menuTextStyle2}>
                <span style={iconStyle2}>
                  <div className="icon i-ph:password-light c-#1b49b9"></div>
                </span>
                <span>{t("change_pass")}</span>
              </div>
            </Link>
            <div
              style={{
                ...menuItemStyle,
                borderBottom: "none",
                cursor: "pointer",
              }}
              onClick={handleConfirmLogout}
            >
              <div style={menuTextStyle2}>
                <span style={iconStyle3}>
                  <div className="icon i-ic:baseline-log-out c-#2c9e90"></div>
                </span>
                <span>{t("sign_out")}</span>
              </div>
            </div>
          </div>
        </div>

        <Navbar />
        <CustomLoader />
        <SupportLink toggleTelegramPopUp={toggleTelegramPopUp} />
        <LanguagePopUp
          isLanguageVisible={isLanguageVisible}
          toggleLangPopup={toggleLangPopup}
          changeLanguage={changeLanguage}
        />
        <TelegramPopUp
          isTelegramVisible={isTelegramVisible}
          toggleTelegramPopUp={toggleTelegramPopUp}
        />
      </div>
    </div>
  );
};

export default HomePage;
