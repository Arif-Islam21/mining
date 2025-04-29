import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
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
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

//component
import Navbar from "./partial/navbar";
import HomeSlider from "./extra/home/HomeSlider";
import CountdownTimer from "./extra/CountdownTimer";
// import SupportLink from "./extra/supportLink";
import Announcement from "./extra/anouncement";
import CustomLoader from "./extra/customLoader";
import { Link, useNavigate } from "react-router-dom";
import Header from "./extra/Header";
import HomeUserInfo from "./extra/home/HomeUserInfo";
import HomeNotice from "./extra/home/HomeNotice";
import HomeLinks from "./extra/home/HomeLinks";
import HomeRefer from "./extra/home/HomeRefer";
import HomeTaskHall from "./extra/home/HomeTaskHall";
import HomeMemberList from "./extra/home/HomeMemberList";
import HomeRegulator from "./extra/home/HomeRegulator";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import UpgradeLevelAlert from "./extra/UpgradeLevelAlert";
import VipTaskHall from "./vipTaskHall";
import UserProfile from "./pages/Dashboard/UserProfile";
import image from "../assets/images/features/choosedImg.png";
import "../styles/dashboard.css";
import DashboardModal from "./pages/Dashboard/DashboardModal";

const home = () => {
  const [data, setData] = useState({});
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint using axios
        const response = await axios.get("api/home");
        // Log the response to the console
        setData(response.data);
        setTargetDate(new Date(response.data.date));
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function immediately
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
  // upgrade level alert
  const [isUpgradeAlert, setIsUpgradeAlert] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const showPopup = () => {
    setIsUpgradeAlert(true);

    setTimeout(() => {
      setIsUpgradeAlert(false);
    }, 2000);
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
        <div className="index-wrap">
          {/* NEW DESIGN STARTS HERE */}
          <UserProfile />
          <div className="flex align-items-center justify-content-end gap-4 text-white">
            <h4 className="fs-6 underline fw-semibold">Help&FAQ</h4>
            <h4 className="fs-6 fw-semibold  underline">
              What is TycoonPoints ?
            </h4>
          </div>
          <div className="relative my-3">
            <img
              src={image}
              alt="Chosen Image"
              className="rounded battery-img mt-3"
            />
            <Link
              to="/recharge-method"
              onClick={() => setModalShow(true)}
              className="btn mining-btn-style mining-btn"
            >
              Mining Contract
            </Link>
          </div>

          {/* NEW DESIGNS END HERE */}

          {/* <HomeUserInfo userInfo={data}></HomeUserInfo> */}
          {/* <HomeNotice></HomeNotice> */}
          {/* <HomeSlider /> */}
          {/* <HomeLinks></HomeLinks> */}
          {/* <div className="reative my-$mg text-center text-2xl font-bold text-$btn-text"></div> */}
          {/* <HomeTaskHall showPopup={showPopup} userData={data}></HomeTaskHall> */}
          <br />
        </div>
        <Navbar></Navbar>
      </div>
      {/* layout-tab-bar end */}
      <Announcement />
      <CustomLoader />

      {/* support section */}
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      {/* Language popup*/}
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      {/* support section */}
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
      <UpgradeLevelAlert isUpgradeAlert={isUpgradeAlert}></UpgradeLevelAlert>

      {/* NEW MODAL GOES HERE */}
      <DashboardModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default home;
