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

import logo from "../assets/images/features/user.webp";
import { Button, Card, Col, Row } from "react-bootstrap";
import video from "../assets/images/features/youtube.png";
import calender from "../assets/images/features/calendar.png";
import batteryIcon from "../assets/images/features/battery.png";
import { FaBolt } from "react-icons/fa";
import "../styles/dashboard.css";

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

  // some static data
  const contractsData = [
    {
      id: 1,
      power: "176.3 Gh/s",
      batteries: 720,
      price: "₹500.00",
      period: "monthly",
    },
    {
      id: 2,
      power: "89.5 Gh/s",
      batteries: 360,
      price: "₹250.00",
      period: "monthly",
    },
    {
      id: 3,
      power: "210.0 Gh/s",
      batteries: 900,
      price: "₹650.00",
      period: "monthly",
    },
    {
      id: 4,
      power: "64.7 Gh/s",
      batteries: 280,
      price: "₹180.00",
      period: "monthly",
    },
    {
      id: 5,
      power: "120.2 Gh/s",
      batteries: 500,
      price: "₹400.00",
      period: "monthly",
    },
    {
      id: 6,
      power: "300.0 Gh/s",
      batteries: 1200,
      price: "₹900.00",
      period: "monthly",
    },
    {
      id: 7,
      power: "150.5 Gh/s",
      batteries: 650,
      price: "₹450.00",
      period: "monthly",
    },
    {
      id: 8,
      power: "200.1 Gh/s",
      batteries: 800,
      price: "₹600.00",
      period: "monthly",
    },
    {
      id: 9,
      power: "98.0 Gh/s",
      batteries: 390,
      price: "₹275.00",
      period: "monthly",
    },
    {
      id: 10,
      power: "250.4 Gh/s",
      batteries: 1050,
      price: "₹750.00",
      period: "monthly",
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

        {/* PREVIOUS STYLES ARE HERE  */}
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
                  className=":uno: container-card relative rd-$card-radius p-$mg black-card c-$btn-text"
                  key={index}
                >
                  <div vip-page="" className="level-name">
                    <img
                      vip-page=""
                      className="icon"
                      src={`${axios.defaults.baseURL}${item.image}`}
                    />
                    bitTycoon{item.id}
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
                          src={logo}
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
        {/* PREVIOUS STYLES ENDS HERE */}

        <div className="">
          <div className="body-of-modal p-3 contracts-container">
            <div className="d-flex align-items-center mt-2 w-100 justify-content-between">
              <h2 className="fs-5 fw-semibold">Free Contract</h2>
              <p className="d-flex align-items-center gap-1">
                <span className="battery">
                  <i className="bi bi-battery-full"></i>
                </span>
                <span>=</span>
                Mining 1h
              </p>
            </div>

            {/* STATS SECTION */}
            <Row className="gx-2 gy-3 my-3 justify-content-center">
              <Col xs={12} md={6}>
                <Card className="mining-card text-white">
                  <Card.Body className="p-2">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <img src={video} alt="Watch Ads" className="icon" />
                      <span className="battery">🔋 +2 </span>
                    </div>
                    <Card.Title className="title mb-1">Watch Ads</Card.Title>
                    <Card.Text className="subtitle mb-2">
                      Mining for 2h contract
                    </Card.Text>
                    <Button className="rate-btn yellow w-100">5.5 Gh/s</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={6}>
                <Card className="mining-card text-white">
                  <Card.Body className="p-2">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <img src={calender} alt="Daily" className="icon" />
                      <span className="battery">🔋 +2 </span>
                    </div>
                    <Card.Title className="title mb-1">Daily</Card.Title>
                    <Card.Text className="subtitle mb-2">
                      Mining for 2h contract
                    </Card.Text>
                    <Button className="rate-btn lavender w-100">
                      7.5 Gh/s
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* POPULAR CONTRACTS */}
            <div className="popular-section px-3 py-2">
              <h6 className="section-title mb-2">Popular Contract</h6>
              <div className="scroll-container">
                {contractsData.map((contract) => (
                  <Card
                    key={contract.id}
                    className="contract-card text-white mb-2"
                  >
                    <Card.Body className="p-2">
                      <Row className="align-items-center gx-2 d-flex justify-content-between">
                        <Col
                          xs="auto"
                          className="d-flex align-items-center gap-2"
                        >
                          <FaBolt color="#ffc107" />
                          <span className="power">{contract.power}</span>
                        </Col>

                        <Col
                          xs="auto"
                          className="d-flex align-items-center gap-1"
                        >
                          <img
                            src={batteryIcon}
                            alt="Battery"
                            className="battery-icon"
                          />
                          <span className="battery-count">
                            +{contract.batteries}
                          </span>
                        </Col>

                        <Col xs="auto" className="text-end">
                          <span className="price">{contract.price}</span>
                          <div className="period">/{contract.period}</div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

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
