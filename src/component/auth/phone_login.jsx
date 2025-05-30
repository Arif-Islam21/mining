import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AuthTop from "../extra/authTopPart";
import LanguagePopUp from "../extra/LanguagePopUp";
import CountryCodePup from "./CountryCodePup";
import TelegramPopUp from "../extra/TelegramPopUp";

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";
import { CheckCircle } from "lucide-react";

function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ phone: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const type = "phone";
  const { t, i18n } = useTranslation();
  const [checked, setChecked] = useState(false);

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      phone,
      country_code: selectedCountry, // Send country code separately
      password,
      type,
    };

    try {
      setIsLoader(true);
      const response = await axios.post("api/login", formData);

      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        setIsLoader(false);
      }, 2000);

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("This credential do not match", { variant: "error" });
      }

      if (response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.token}`;
        navigate("/home");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoader(false); // Hide loader after data is fetched
    }
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
  // country Code popup
  const [isCountryVisible, setIsCountryVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("64");
  const toggleCountryPopUp = () => {
    setIsCountryVisible(!isCountryVisible);
  };
  const changeCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryVisible(false);
  };
  // password eye
  const [eyeHideShow, setEyeHideShow] = useState(false);
  const handleHideShow = () => {
    setEyeHideShow(!eyeHideShow);
  };
  return (
    <div
      id="app"
      className="a-t-26 no-4"
      style={{ backgroundColor: "#ecf1ff" }}
    >
      <div className="login">
        <div className=":uno: container-login relative">
          <AuthTop
            selectedLanguage={selectedLanguage}
            toggleLangPopup={toggleLangPopup}
            toggleTelegramPopUp={toggleTelegramPopUp}
          ></AuthTop>

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
          {/* <CustomLoader /> */}
          {isLoader ? <Loader /> : null}

          <div className="login-content">
            <div className=":uno: container-form w-full rd-$radius p-0">
              <div
                className="container-form-content"
                style={{
                  padding: "0px 0px 50px 0px",
                  height: "500px",
                }}
              >
                <div className="tabs2">
                  <Link className=":uno: tab-item tab2  non-active2" to="/">
                    {t("email_login")}
                  </Link>
                  <Link
                    className=":uno: tab-item tab2 active2 phnlog"
                    to="/phone-login"
                  >
                    {t("phone_login")}
                  </Link>
                </div>

                <div className="tab-content2" style={{ padding: "0px 20px" }}>
                  <form
                    className="login_Fm"
                    onSubmit={handleSubmit}
                    // style={{
                    //   animation:
                    //     "slide-in-right .3s cubic-bezier(.25,.46,.45,.94) both",
                    // }}
                  >
                    <div className="base-input is-text mt-0!">
                      <div className="label text-white">{t("phone")}</div>
                      <div className="input-box">
                        <div className="input-left-slot">
                          <div className="flex items-center">
                            <div login-content="" className="ml-0!">
                              <div
                                login-content=""
                                onClick={toggleCountryPopUp}
                              >
                                <span className="input-phone-select text-black">
                                  +
                                  <span id="countryCode">
                                    {selectedCountry}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          className="w-full text-black"
                          id="phone"
                          placeholder={t("phone_number")}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="input-right-slot"></div>
                    </div>
                    <div className="base-input is-password">
                      <div className="label">{t("password")}</div>
                      <div className="input-box">
                        <div className="input-left-slot"></div>
                        <input
                          type={eyeHideShow ? "text" : "password"}
                          className="w-full text-black"
                          id="password"
                          placeholder={t("password")}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                          className="input-pwd-eye-slot cursor-pointer"
                          onClick={handleHideShow}
                        >
                          <div
                            id="eye"
                            className={`icon text-black text-22px ${
                              eyeHideShow ? "i-mdi:eye" : "i-mdi:eye-off"
                            }`}
                          ></div>
                        </div>
                        <div className="input-right-slot"></div>
                      </div>
                    </div>

                    <div className="tools mt-20px">
                      <div className=":uno: base-main-btn flex items-center justify-center">
                        <button
                          type="submit"
                          className="base-main-btn-content mx-0"
                          style={{
                            backgroundColor: "#0148ff",
                          }}
                        >
                          <div>{t("sign_in")}</div>
                        </button>
                      </div>

                      <div className="bottom-content">
                        <Link
                          to="/register"
                          className="register cursor-pointer"
                        >
                          <button
                            type="submit"
                            className="base-main-btn-content mx-0 p-3  text-black border-1"
                          >
                            <div className="text-white">{t("sign_up")}</div>
                          </button>
                        </Link>
                        <div className="d-flex flex-column align-items-center justify-content-center p-3 mt-2 rounded">
                          <div
                            className="d-flex align-items-center gap-2 cursor-pointer"
                            onClick={() => setChecked(!checked)}
                          >
                            <CheckCircle
                              size={20}
                              className={
                                checked ? "text-primary" : "text-muted"
                              }
                            />
                            <span className="text-gray">Agree with our</span>
                          </div>
                          <Link
                            to="/agreement"
                            className="text-primary fst-italic text-decoration-none"
                          >
                            《User Agreement and Privacy Policy》
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* tab-content2 ends */}
              </div>
            </div>
          </div>
          {/* login contents ends */}
        </div>
      </div>
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      ></TelegramPopUp>
      <CountryCodePup
        isCountryVisible={isCountryVisible}
        toggleCountryPopUp={toggleCountryPopUp}
        changeCountry={changeCountry}
      ></CountryCodePup>
    </div>
  );
}

export default App;
