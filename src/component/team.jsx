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

import logo from "../assets/images/logo.webp";
import team_level1 from "../assets/images/team_level1.png";
import team_level2 from "../assets/images/team_level2.png";
import team_level3 from "../assets/images/team_level3.png";
//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CopyCode from "./extra/copyCode";
import CopyLink from "./extra/copyLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import LevelCards from "./LevelCards";

import referImg from "../assets/images/features/refer.webp";
import "../styles/team.css";
import Invite from "./pages/Referral/Invite";
import ReferralReward from "./pages/Referral/ReferralReward";
import { BiCopy } from "react-icons/bi";
import InvitationHistory from "./pages/Referral/InvitationHistory";

const Team = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader during initial data fetch
      try {
        const response = await axios.get("api/team");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const invitationLink = `${window.location.origin}/#/register?ic=${
    data?.user?.invitation_code || "000000"
  }`;
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
  // copy popup
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Logic to copy content goes here

    // Show the modal
    setIsCopied(true);

    // Hide the modal after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
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

        {/* NEW DESIGNS ARE HERE */}

        {/* <div>
          <div className="lg-max-w-md mx-auto">
            <img
              src={referImg}
              alt="refer image"
              className="refer-top-img rounded"
            />
          </div>
          <Invite />
          <ReferralReward />
          <div className="d-flex py-3 refer-step-text my-2 align-items-center justify-content-between gap-3">
            <h3 className="">Invitation Code</h3>

            <div className="d-flex align-items-center gap-2">
              <h3 className="fw-bold">29058503</h3>
              <BiCopy size={18} />
            </div>
          </div>
          <div className="mb-4">
            <InvitationHistory />
          </div>
        </div> */}

        {/* NEW DESIGN ENDS HERE */}

        {/* PREVIOUS DESIGN ARE HERE DELETE IF YOU DON'T NEED THEM */}
        <div team-page="" className="team-wrap">
          <div team-page="" className="team-wrap-content">
            <div team-page="" className="share-card">
              <div team-page="" className="share-card-container">
                <div team-page="" className="relative z-1">
                  <div team-page="" className="text-13px">
                    {t("invitation_code")}：{" "}
                  </div>

                  <CopyCode
                    code={data?.user?.invitation_code || "000000"}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />

                  <div team-page="" className="mt-5px text-13px lh-15px">
                    {t("share_refer_txt")}
                  </div>

                  <CopyLink
                    code={invitationLink}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />
                </div>
              </div>
            </div>
            <div
              team-page=""
              className="my-10px mt-15px flex cursor-pointer items-center text-[var(--btn-text"
            >
              <div team-page="" className="flex cursor-pointer items-center">
                <div
                  team-page=""
                  className="i-twemoji-spiral-calendar shrink-0 text-20px "
                ></div>
                <span team-page="" className="ml-5px">
                  {t("selection_period")}
                </span>
              </div>
            </div>
            <div
              team-page=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text team-info"
            >
              <div
                team-page=""
                className="team-info-content"
                style={{
                  background: "linear-gradient(60deg, #4fb3bf, #2e3b55)",
                }}
              >
                <div team-page="" className="other-num">
                  <div team-page="" className="item">
                    <div team-page="" className="text-df">
                      {t("team_size")}
                    </div>
                    <div team-page="" className="txtBlue text-xl text-black">
                      {data?.teamsize || "0"}
                    </div>
                  </div>
                  <div team-page="" className="item">
                    <div team-page="" className="text-df ">
                      {t("team_recharge")}
                    </div>
                    <div team-page="" className="txtBlue text-xl text-black">
                      ${data?.totalDepositSum || "0"}
                    </div>
                  </div>
                  <div team-page="" className="item">
                    <div team-page="" className="text-df">
                      {t("team_withdrawal")}
                    </div>
                    <div team-page="" className="txtBlue text-xl text-black">
                      ${data?.totalWithdrawSum || "0"}
                    </div>
                  </div>
                </div>

                <div team-page="" className="other-num">
                  <div team-page="" className="item">
                    <div team-page="" className="text-df">
                      {t("new_team")}
                    </div>
                    <div team-page="" className="txtBlue text-xl text-black">
                      {data?.teamsizeToday || "0"}
                    </div>
                  </div>

                  <div team-page="" className="item">
                    <div team-page="" className="text-df">
                      {t("first_time_recharge")}
                    </div>
                    <div team-page="" className="txtBlue text-xl text-black">
                      {data.firstTimeRecharge || "0"}
                    </div>
                  </div>

                  <div team-page="" className="item">
                    <div team-page="" className="text-df">
                      {t("first_wthdrawal")}
                    </div>
                    <div team-page="" className="txtBlue text-xl text-black">
                      {data.firstTimeWithdraw || "0"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isCopied && (
          <div
            id="copyModal"
            role="dialog"
            className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
            style={{ zIndex: "200017", transition: ".3s all" }}
          >
            <div className="van-toast__text">Copied successfully</div>
          </div>
        )}
        <LevelCards data={data} />
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

export default Team;
