import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loader from "../../../component/extra/loader";
import { useState } from "react";
import RechargeBg from "../../../assets/images/recharge.png";
import WithdrawBg from "../../../assets/images/withdraw.png";
import CompanyBg from "../../../assets/images/company.png";
import downloadBg from "../../../assets/images/download-bg.png";

const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  // Detect the user's operating system
  const getOperatingSystem = () => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    if (/android/i.test(userAgent)) {
      return "apk";
    }

    if (navigator.platform.indexOf("Win") !== -1) {
      return "apk";
    }

    if (navigator.platform.indexOf("Mac") !== -1) {
      return "ios";
    }

    if (navigator.platform.indexOf("Linux") !== -1) {
      return "apk";
    }

    return "Unknown OS";
  };

  const downloadApp = () => {
    const device = getOperatingSystem();
    const domain = window.location.hostname;
    // const domain = 'GLIDEMALLmall.vip';

    fetchData(device, domain);
  };

  const fetchData = async (device, domain) => {
    try {
      setIsLoader(true);

      const url = `https://whatsapp.com/channel/0029Vamx0WR7dmeXt4B6Dy1O`;

      // Open the new tab
      const newTab = window.open(url, "_blank");

      // Close the tab after 2 seconds
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 200000);

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div
        home-content=""
        className="main-btn-part d-flex justify-content-center"
      >
        {isLoader ? <Loader /> : null}

        <div
          style={{
            backgroundImage: `url(${RechargeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "0.2px solid #6e97ff",
            borderRadius: "20px",
            color: "#fff",
          }}
        >
          <div home-content="" className=""></div>
          <Link to="/recharge-method">
            <div
              home-content=""
              className="label"
              style={{
                backgroundColor: "#0148ff",
                padding: "7px 20px",
                borderRadius: "20px",
                margin: "90px 3px 2px 3px",
              }}
            >
              {t("recharge")}
            </div>
          </Link>
        </div>

        <div
          style={{
            backgroundImage: `url(${WithdrawBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "0.2px solid #6e97ff",
            borderRadius: "20px",
            color: "#fff",
          }}
        >
          <Link to="/withdraw">
            <div
              home-content=""
              className="label"
              style={{
                backgroundColor: "#0148ff",
                padding: "7px 20px",
                borderRadius: "20px",
                margin: "90px 3px 2px 3px",
              }}
            >
              {t("withdraw")}
            </div>
          </Link>
        </div>

        <div
          style={{
            backgroundImage: `url(${CompanyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "0.2px solid #6e97ff",
            borderRadius: "20px",
            color: "#fff",
          }}
        >
          <Link to="/company-profile">
            <div
              home-content=""
              className="label"
              style={{
                backgroundColor: "#0148ff",
                padding: "1px 20px",
                borderRadius: "20px",
                margin: "80px 3px 2px 3px",
              }}
            >
              {t("Company")}
              <br />
              {t("profile")}
            </div>
          </Link>
        </div>
      </div>
      <br />
      {/* Correct onClick event handler */}
      <div>
        <div
          home-content=""
          className=" download w-100 flex justify-content-center"
          style={{
            backgroundImage: `url(${downloadBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div home-content="" className="icon justify-content-center flex">
            <div
              home-content=""
              className="i-radix-icons:download text-28px c-$text-white"
            ></div>
          </div>
          <div home-content="" className="label">
            {t("app")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
