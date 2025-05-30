import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/features/user.webp";
import { useTranslation } from "react-i18next";
import HoneycombBg from "../../assets/images/features/authentication2.avif";

function authTopPart({ toggleLangPopup, toggleTelegramPopUp }) {
  const { t, i18n } = useTranslation();

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en"); // Set English as default language
      localStorage.setItem("language", "en"); // Store default language in localStorage
    }
  }, [i18n]);

  // Get the current language from i18n
  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined
  const displayLanguage =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "id"
      ? "Indonesian"
      : currentLanguage === "vi"
      ? "Vietnamese"
      : currentLanguage === "ja"
      ? "Japanese"
      : currentLanguage === "pt"
      ? "Portuguese"
      : currentLanguage === "ar"
      ? "Arabic"
      : currentLanguage === "th"
      ? "Thai"
      : currentLanguage === "es"
      ? "Spanish"
      : currentLanguage === "de"
      ? "German"
      : currentLanguage === "fr"
      ? "French"
      : currentLanguage === "it"
      ? "Italian"
      : currentLanguage === "ko"
      ? "Korean"
      : currentLanguage === "tr"
      ? "Turkish"
      : currentLanguage === "ru"
      ? "Russian"
      : currentLanguage === "fa"
      ? "Persian"
      : currentLanguage === "ms"
      ? "Malay"
      : currentLanguage === "bn"
      ? "Bengali"
      : currentLanguage === "az"
      ? "Azerbaijani"
      : currentLanguage === "zh-CN"
      ? "Simplified Chinese"
      : currentLanguage === "zh-TW"
      ? "Traditional Chinese"
      : currentLanguage;

  return (
    <div
      className="top-info absolute"
      style={{
        backgroundImage: `url(${HoneycombBg})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        height: "50vh",
      }}
    >
      <div className="p-$mg">
        <div id="navBarItem26" className=":uno: nav-bar-content h-full w-full">
          <div className="no-login-part w-full flex items-center justify-between">
            <div
              className="base-help-btn cursor-pointer bg-white bg-opacity-25"
              onClick={toggleTelegramPopUp}
            >
              <div className="i-ri:customer-service-2-line text-24px"></div>
            </div>
            <div>
              <div
                className="base-lang-wrap bg-white bg-opacity-25"
                onClick={toggleLangPopup}
              >
                <div className="i-ph:globe mr-2px text-18px c-$btn-text"></div>
                <span className="c-$btn-text" id="languageSelect">
                  {displayLanguage} {/* Display based on selected language */}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- navBarItem26 ends --> */}
        <div className="flex justify-content-center">
          <div className="logo-show">
            <div className=":uno: base-logo h-75px! w-75px! ">
              <img
                className="site-img h-full w-full rd-10px"
                src={logo}
                draggable="false"
                alt="logo"
              />
              <div className="site-name text-20px flex justify-content-center mt-10px">
                <span style={{ fontWeight: "bold" }}>BitTycoon</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- card-show ends --> */}
      </div>
    </div>
  );
}

export default authTopPart;
