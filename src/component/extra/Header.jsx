import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import SupportLink from "./supportLink";
import userProfile from "../../assets/images/features/user.webp";

const Header = ({ toggleLangPopup }) => {
  const [isScrolled, setScroll] = useState(false);
  const { t, i18n } = useTranslation();

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en"); // Set English as default language
      localStorage.setItem("language", "en"); // Store default language
    }
  }, [i18n]);

  // Get the current language from i18n
  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined
  const displayLanguage =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "sr"
      ? "Serbian"
      : currentLanguage === "fr"
      ? "France"
      : currentLanguage === "hr"
      ? "Croatian"
      : currentLanguage === "bn"
      ? "বাংলা"
      : currentLanguage === "el"
      ? "Greek"
      : currentLanguage === "sq"
      ? "Albanian"
      : currentLanguage === "ro"
      ? "Romanian"
      : currentLanguage === "bg"
      ? "Bulgarian"
      : currentLanguage === "de"
      ? "Germany"
      : currentLanguage === "mk"
      ? "Macedonian"
      : currentLanguage === "es"
      ? "Spain"
      : currentLanguage === "tr"
      ? "Turkey"
      : currentLanguage;

  // Handle scrolling for the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      home-nav=""
      id="navbar"
      className={
        isScrolled
          ? "header nav-bar-wrap h-style is-scroll-state"
          : "header nav-bar-wrap h-style"
      }
    >
      <div className="nav-bar">
        <div id="navBarItem26" className=":uno: nav-bar-content h-full w-full">
          <div className="w-full d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center justify-content-center gap-3">
              {/* USER PROFILE AVATER */}
              <div
                className="border-2 border-secondary d-flex align-items-center justify-content-center rounded-circle"
                style={{ height: "4rem", width: "4rem" }}
              >
                <img
                  src={userProfile}
                  alt="User Profile"
                  className="rounded-circle p-1 bg-secondary"
                />
              </div>
              <div style={{ maxWidth: "fit-content" }}>
                <h2 className="fs-5 mb-1 fw-semibold">bitTycoon</h2>
                <p className="px-2 rounded-4" style={{ background: "#4b4d52" }}>
                  Id: 12345
                </p>
              </div>
            </div>
            <div className="right">
              <div>
                <div
                  className="base-lang-wrap bg-transparent border"
                  onClick={toggleLangPopup}
                >
                  <div className="i-ph:globe mr-2px text-18px c-$btn-text"></div>
                  <span className="c-$btn-text" id="languageSelect">
                    {displayLanguage} {/* Display the current language */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
