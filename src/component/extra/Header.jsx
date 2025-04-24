import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import SupportLink from "./supportLink";


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
          <div className="w-full flex items-center justify-center">
            <div className="left name text-18px!">
              <div className=":uno: base-logo flex items-center small-logo">
                <img
                  className="site-img h-full w-full rd-50%"
                  src={logo}
                  alt="logo"
                />
              </div>
              <span className="text-truncate">DLH</span>
            </div>
            <div className="right">
              <div>
                <div className="base-lang-wrap bg-transparent border" onClick={toggleLangPopup}>
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
