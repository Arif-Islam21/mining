import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";
import "../assets/css/style10.css";
import "../assets/css/style11.css";

import crown from "../assets/images/crown.png";
import { useEffect, useState } from "react";
import axios from "axios";

//component
import Navbar from "./partial/navbar";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useNavigate } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const vip = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", ""); // Remove the comma from the formatted string
  };
  const addDate = (dateString) => {
    const date = new Date(dateString);
    // Add one year to the date
    date.setFullYear(date.getFullYear() + 1);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", "");
  };

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint using axios
        const response = await axios.get("api/home");
        // Log the response to the console
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function immediately
    fetchData();
  }, []);

  const clickRecharge = () => {
    navigate("/recharge-method");
  };
  // Language popup js
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageVisible(false);
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div
        home-nav=""
        className="layout-tab-bar box-border min-h-full w-full px-$mg pb-60px"
      >
        <Header
          selectedLanguage={selectedLanguage}
          toggleLangPopup={toggleLangPopup}
        ></Header>
        <div vip-page="" className="vip-info-wrap">
          <div vip-page="" className="vip-log">
            {t("upgrade_log")}
          </div>
          {/* vip log ends */}
          <div vip-page="" className="vip-wrap">
            {data?.vips?.map((item, index) => {
              return (
                <div
                  vip-page=""
                  className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
                  key={index}
                >
                  <div vip-page="" className="level-name">
                    <img
                      vip-page=""
                      className="icon"
                      src={`${axios.defaults.baseURL}${item.image}`}
                    />
                    DLH{item.id}
                  </div>

                  {item.unlock ? (
                    <div vip-page="" className="current-status-box">
                      <div vip-page="" className="status-label">
                        {t("unlock_effective")}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <div vip-page="">
                    <div vip-page="" className="level-info pt-20px">
                      <div vip-page="" className="left">
                        <img
                          vip-page=""
                          className="vip-img rounded-md"
                          src="https://delta.myway66.com/image/logo.svg"
                          alt="vip-img"
                        />
                      </div>
                      <div vip-page="" className="right">
                        <div vip-page="" className="item">
                          <div vip-page="" className="title">
                            <em vip-page=""></em>
                            {t("daily_task")}
                          </div>
                          <div vip-page="" className="value text-black">
                            1
                          </div>
                        </div>
                        <div vip-page="" className="item">
                          <div vip-page="" className="title">
                            <em vip-page=""></em>
                            {t("simple_interest")}
                          </div>
                          <div vip-page="" className="value c-green">
                            {item.income_from}
                          </div>
                        </div>
                        <div vip-page="" className="item">
                          <div vip-page="" className="title">
                            <em vip-page=""></em>
                            {t("daily_profit")}
                          </div>
                          <div vip-page="" className="value">
                            <span vip-page="" className="strong text-black">
                              {item.income_from}
                            </span>{" "}
                            <span vip-page="" className="unit">
                              USDT
                            </span>
                          </div>
                        </div>
                        <div vip-page="" className="item">
                          <div vip-page="" className="title">
                            <em vip-page=""></em>
                            {t("the_total_profit")}
                          </div>
                          <div vip-page="" className="value">
                            <span vip-page="" className="strong text-black">
                              {item.income_from * 365}
                            </span>{" "}
                            <span vip-page="" className="unit">
                              USDT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {item.unlock ? (
                      <div vip-page="" className="effect-time">
                        {t("effective_time")}:
                        <span
                          vip-page=""
                          className="c-green"
                          style={{ fontSize: "12px" }}
                        >
                          {formatDate(item.unlock.created_at)} -{" "}
                          {addDate(item.unlock.created_at)}
                        </span>
                      </div>
                    ) : (
                      <div vip-page="" className="active-level">
                        <div
                          vip-page=""
                          className="active-btn"
                          onClick={clickRecharge}
                        >
                          <span vip-page="" style={{ marginRight: "16px" }}>
                            {Math.floor(item.requred_from)} USDT
                          </span>
                          {t("unlock_now")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* vip-info-wrap ends */}

        <CustomLoader />
        <Navbar />
      </div>

      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
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
  );
};

export default vip;
