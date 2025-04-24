import { Link } from "react-router-dom";
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

// component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CountdownTimer from "./extra/CountdownTimer";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const Task = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/tradings");

        setData(response.data);
        // alert(response.data.date)
        setTargetDate(new Date(response.data.date));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
        <div task-page="" className="mission-wrap mission-wrap21">
          <div task-page="" className="mission-wrap-content">
          <div
              id="timer"
              task-page=""
              className="text-center"
              style={{ display: "flex", 
                width: '100%',
                justifyContent: 'flex-end'
              }}
            >
              <div task-page="" className="loading-time d-flex" style={{ backgroundColor: 'black', borderRadius: '20px', padding: '10px 20px', marginBottom: '5px' }}>
                <div task-page="" className="i-gala:clock" style={{marginRight: '10px', fontSize: '1.5rem'}}></div>
                <span task-page="" style={{marginRight: '10px'}}>{t("task_reset")}</span>{" "}
                <span id="timeCount">
                  <CountdownTimer targetDate={targetDate} />
                </span>
              </div>
            </div>
            {/* timer ends */}
            <div task-page="" className="top-info" style={{ backgroundColor: '#ffed9a', color: 'black', backgroundImage: 'url(src/assets/images/stopwatch.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: '50px', backgroundPosition: 'right bottom'}}>
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
              style={{paddingRight: '0px', paddingLeft: '0px', paddingTop: '0px'}}
            >
              <div className="tabs2 ">
                <Link className=":uno: tab-item tab2  non-active2" to="/task">
                  {t("in_progress")}
                </Link>
                <Link
                  className=":uno: tab-item tab2 active2"
                  to="/task-completed"
                >
                  {t("completed")}
                </Link>
              </div>
              {/* tabs endss */}
              <div class="tab-content2">
                <div task-page="" className="task-list">
                  <div id="comp_item">
                    {data?.tradings?.length > 0 ? (
                      data.tradings.map((trading) => (
                        <div
                          task-page=""
                          className="mission-card"
                          key={trading.id}
                        >
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
                              />
                            </div>
                            <div task-page="" className="product-info-wrap">
                              <div task-page="" className="product-info">
                                <div task-page="" className="product-name">
                                  {trading.product.title}
                                </div>
                                <div task-page="" className="main-price-info">
                                  <div task-page="" className="product-price">
                                    <div task-page="" className="label">
                                      {t("price")}
                                    </div>
                                    <div task-page="" className="price">
                                      {trading.product.price}
                                    </div>
                                  </div>
                                  <div task-page="" className="product-price">
                                    <div task-page="" className="label">
                                      {t("income")}
                                    </div>
                                    <div task-page="" className="price red">
                                      {trading.amount}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  task-page=""
                                  className="product-price flex items-center justify-between"
                                >
                                  <span task-page="" className="label">
                                    {t("completed_time")}
                                  </span>
                                  <span task-page="" className="price gray">
                                    {new Date(
                                      trading.created_at
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div task-page="" className="action-area"></div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div fin-record="" className="base-list a-t-26">
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
        </div>

        {/* <SupportLink /> */}
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

export default Task;
