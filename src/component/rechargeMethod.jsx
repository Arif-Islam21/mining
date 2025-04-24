//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

//all css/images
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

import logo from "../assets/images/logo.webp";
import trc20 from "../assets/images/trc20-usdt.jpg";
import trx from "../assets/images/trx.webp";
import Barcode from "../assets/images/barcode.gif";
import bep20 from "../assets/images/bep20-usdt.webp";
import bnb from "../assets/images/bnb.webp";

//component
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const rechargeMethod = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };

  const [data, setData] = useState({});
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch available currencies from your API
        const response = await axios.get("api/currency");
        setData(response.data);

        // Fetch real-time conversion rates from CoinGecko
        const ratesResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "tether,tron,binancecoin,ethereum,dogecoin",
              vs_currencies: "usd",
            },
          }
        );

        const prices = ratesResponse.data;
        const trxToUsd = prices.tron.usd;
        const usdtToUsd = prices.tether.usd;
        const bnbToUsd = prices.binancecoin.usd;
        const ethToUsd = prices.ethereum.usd;
        const dogeToUsd = prices.dogecoin.usd;

        // Convert all rates to TRX
        setRates({
          TRX: 1,
          USDT_TRC20: usdtToUsd / trxToUsd,
          USDT_BEP20: usdtToUsd / trxToUsd,
          USDT_ERC20: usdtToUsd / trxToUsd,
          BNB: bnbToUsd / trxToUsd,
          ETH: ethToUsd / trxToUsd,
          DOGE: dogeToUsd / trxToUsd,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div id="app" className="a-t-26 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>
        <div className="p-$mg">
          <div
            rc-page=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-12px px-12px py-0"
          >
            <Link rc-page="" className="recharge-item" to={`/recharge?method=USDT`}>
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={trc20}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name text-black">
                  TRC20-USDT
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to={`/recharge?method=TRX`}>
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={trx}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name text-black">
                  TRX
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to={`/recharge?method=BEP20`}>
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={bep20}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name text-black">
                  BEP20-USDT
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to={`/recharge?method=BNB`}>
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={bnb}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name text-black">
                  BNB
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <CustomLoader />
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>

      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default rechargeMethod;
