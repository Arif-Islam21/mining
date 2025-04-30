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

import taskcrypto_mining from "../assets/images/taskcrypto_mining.webp";
//component
import Navbar from "./partial/navbar";
import CountdownTimer from "./extra/CountdownTimer";
import { useTranslation } from "react-i18next";
import img from "../assets/images/features/pcGear.gif";
import "../styles/task.css";
import bit from "../assets/images/coins/Bitcoin.png";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";
import UserProfile from "./pages/Dashboard/UserProfile";
import { FaGift } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const task = () => {
  const [targetDate, setTargetDate] = useState(null);
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/task");

        setData(response.data);
        // alert(response.data.date)
        setTargetDate(new Date(response.data.date));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toComplete = () => {
    const taskComplete = async () => {
      setIsLoader(true);
      try {
        const response = await axios.get("api/task/complete");

        setAlertMessage(response.data.message || "Something happened");
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
          navigate("/task-completed");
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader when the request is completed
      }
    };

    taskComplete();
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

  // STATIC DATA FOR REWARDS
  const contracts = [
    {
      id: 1,
      speed: "5.5 Gh/s",
      reward: "Watch Ads Rewards",
      active: false,
    },
    {
      id: 2,
      speed: "7.5 Gh/s",
      reward: "Daily Sign-In Rewards",
      active: false,
    },
  ];

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

        {alertVisible && (
          <div
            id="copyModal"
            role="dialog"
            className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
            style={{ zIndex: "200017", transition: ".3s all" }}
          >
            <div className="van-toast__text">{alertMessage}</div>
          </div>
        )}
        <CustomLoader />
        {isLoader ? <Loader /> : null}

        {/* NEW DESIGNS STARTS HERE */}
        {/* <div>
          <UserProfile />
          <div className="pc-img-container">
            <img className="pc-img" src={img} alt="this is the main image" />
          </div>

          <div className="contract-wrapper p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-white mb-0">My Contract</h5>
              <button className="btn btn-warning fw-bold rounded-pill px-3">
                + 5.5 Gh/s
              </button>
            </div>

            {contracts.map((contract) => (
              <div
                key={contract.id}
                className="contract-card p-3 mb-2 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img src={bit} alt="BTC Icon" className="btc-icon me-3" />
                  <div>
                    <div className="fw-bold text-white">{contract.speed}</div>
                    <small className="text-white-50">{contract.reward}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span
                    className={`status-dot ${
                      contract.active ? "active" : "inactive"
                    }`}
                  ></span>
                  <span className="text-white-50 ms-2">
                    {contract.active ? "active" : "not active"}
                  </span>
                </div>
              </div>
            ))}

            <div className="contract-card mt-3 text-white p-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaGift size={20} />
              </div>
              <div className="d-flex align-items-center">
                <p>Add invitation code and get a free contract</p>
              </div>
              <div className="d-flex align-items-center">
                <IoIosArrowForward size={20} />
              </div>
            </div>
          </div>
        </div> */}

        {/* NEW DESIGNS ENDS HERE */}

        <div task-page="" className="mission-wrap mission-wrap21 my-3">
          <div task-page="" className="mission-wrap-content">
            <div
              id="timer"
              task-page=""
              className="text-center"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <div
                task-page=""
                className="loading-time d-flex"
                style={{
                  backgroundColor: "black",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  marginBottom: "5px",
                }}
              >
                <div
                  task-page=""
                  className="i-gala:clock"
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                ></div>
                <span task-page="" style={{ marginRight: "10px" }}>
                  {t("task_reset")}
                </span>{" "}
                <span id="timeCount">
                  <CountdownTimer targetDate={targetDate} />
                </span>
              </div>
            </div>
            <div
              task-page=""
              className="top-info"
              style={{
                backgroundColor: "#ffed9a",
                color: "black",
                backgroundImage: "url(src/assets/images/stopwatch.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50px",
                backgroundPosition: "right bottom",
              }}
            >
              <div task-page="" className="data-content">
                <div task-page="" className="col">
                  <div task-page="" className="title">
                    Mining For Today
                  </div>
                  <div task-page="" className="value">
                    {data?.product && data.withdraw_status > 0 ? 1 : 0}
                  </div>
                </div>
                <div task-page="" className="col">
                  <div task-page="" className="title">
                    Todays Remaining Mining
                  </div>
                  <div task-page="" className="value">
                    {data?.product && data.withdraw_status ? "1" : "0"}
                  </div>
                </div>
              </div>
            </div>
            {/* top-info ends */}
            <div
              task-page=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
              style={{
                paddingRight: "0px",
                paddingLeft: "0px",
                paddingTop: "0px",
              }}
            >
              <div className="tabs2">
                <Link className=":uno: tab-item tab2  active2" to="/task">
                  Mining Progress
                </Link>
                <Link
                  className=":uno: tab-item tab2 non-active2"
                  to="/task-completed"
                >
                  {t("completed")}
                </Link>
              </div>
              <div className="tab-content2" data-id="0">
                <div task-page="" className="task-list">
                  {data?.withdraw_status && data?.commission > 0 ? (
                    <div id="inpro" className="inpro">
                      <div task-page="" className="mission-card">
                        <div
                          task-page=""
                          className="card-inner"
                          style={{ width: "100%" }}
                        >
                          <div task-page="" className="product-show">
                            <img
                              task-page=""
                              className="product-img"
                              src="https://delta.myway66.com/image/logo.svg"
                              title={data?.product?.title || "Product Image"}
                            />
                          </div>
                          <div task-page="" className="product-info-wrap">
                            <div task-page="" className="product-info">
                              <div task-page="" className="product-name">
                                {data?.product?.title}
                              </div>
                              <div task-page="" className="main-price-info">
                                <div task-page="" className="product-price">
                                  <div task-page="" className="label">
                                    {t("price")}
                                  </div>
                                  <div task-page="" className="price">
                                    {data?.product?.price || "0.50"}
                                  </div>
                                </div>
                                <div task-page="" className="product-price">
                                  <div task-page="" className="label">
                                    {t("income")}
                                  </div>
                                  <div task-page="" className="price red">
                                    {parseFloat(data?.commission).toFixed(2)}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div task-page="" className="action-area">
                              <a
                                task-page=""
                                className="toComplete"
                                onClick={toComplete}
                              >
                                {t("to_complete")}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div fin-record="" className="base-list a-t-26 ">
                      <div
                        id="comp_nodata"
                        fin-record=""
                        className="no-more text-center text-black"
                      >
                        No data
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default task;
