// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import anouncment_saving from "../../assets/images/anouncment_saving.webp";
import home_licence from "../../assets/images/home_licence2.png";
const Announcement = () => {
  const { t } = useTranslation();
  const messages = [
    ` <p>DLH USDT ${t("investment_platform")}</p>
      <p>&nbsp;</p>
      <p>${t(
        "minimum_deposit"
      )}: <span style="color: #ff00e2;"><strong>8</strong> USDT</span></p>
      <p>&nbsp;</p>
      <p>${t(
        "minimum_withdrawal"
      )}: <span style="color: #ff00e2;"><strong>1</strong> USDT</span></p>
      <p>&nbsp;</p>
      <p>${t(
        "daily_withdrawal"
      )}: <span style="color: #ff00e2;">1 time</span></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
     <p>&nbsp;</p>
     <p>${t("fontera_platform_income")}</p>
     <p>${t("the_income_status_text")}</p>
     <p><img src=${home_licence}></p>
        `,
    `
     <p>1. ${t("how_to_store_value_on_the_GLIDEMALL_platform")}</p>
                        <p>&nbsp;</p>
                        <p>${t("reacharge_digital_currency_at_fontera")}</p>
                        <p>&nbsp;</p>
                        <p>${t(
                          "digital_assets_are_stored_in_value_addresses"
                        )}:</p>
                        <p>&nbsp;</p>
                        <p>${t("register_a_fontera_account")}</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>${t("copy_the_GLIDEMALL_address")}</p>
                        <p>&nbsp;</p>
                        <p>${t("notes_on_GLIDEMALL_recharge")}</p>
                        <p>&nbsp;</p>
                        <p>${t("during_the_deposit_process")}</p>
                        <p>&nbsp;</p>
                        <p>${t(
                          "if_you_are_not_sure_weather_the_recharge_operation"
                        )}</p>
                        <p>&nbsp;</p>
                        <p>${t("during_the_deposit_process_3")}</p>
                        <p>&nbsp;</p>
                        <p>${t("since_the_GLIDEMALL_robot_is_based")}</p>
                        <p>&nbsp;</p>
                        <p>${t("how_to_withdraw_coins_on_GLIDEMALL")}</p>
                        <p>&nbsp;</p>
                        <p>${t(
                          "if_you_want_to_withdraw_the_digital_assets"
                        )}</p>
                        <p>&nbsp;</p>
                        <p>${t("before_withdrawing_coins")}</p>
                        <p>&nbsp;</p>
                        <p>${t("select_the_address_of_the_corresponding")}</p>
                        <p>&nbsp;</p>
                        <p>${t("open_the_GLIDEMALL_withrawal_page")}</p>
                        <p>&nbsp;</p>
                        <p>${t("fill_in_the_copied_link_address")}</p>
                        <p>&nbsp;</p>
                        <p>${t("coin_withdrawal_example")}</p>
                        <p>&nbsp;</p>
                        <p>${t("notes_on_withdrawing_coins")}</p>
                        <p>${t(
                          "GLIDEMALLAI_is_an_intelligent_trading_robot"
                        )}</p>
                        <p>${t("the_aiRobot_ensures_that_members")}</p>
        `,
  ];

  const [show, setShow] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Show the announcement after 2 seconds
    const showTimeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    // Clear timeout if the component unmounts
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex - 1);
  };

  const handleAgree = () => {
    setShow(false);
  };

  return (
    <div
      id="homeModal"
      className={`van-popup van-popup--round van-popup--center van-safe-area-bottom van-popup-customer anounce-none ${
        show ? "show" : ""
      }`}
      style={{ zIndex: "2003", width: "95%", maxWidth: "620px" }}
    >
      <div data-v-909b9c13="" className="announce-wrap a-t-26">
        <div data-v-909b9c13="" className="container-card email-box p-0!">
          <div className="mb-12px pt-12px text-center text-20px font-bold text-$btn-text">
            <h4>{t("announcement")}</h4>
          </div>
          <div
            data-v-909b9c13=""
            className="mx-auto h-10px w-95% rounded-full bg-$primary"
          ></div>
          <div
            className="content absolute left-50% top-60px h-310px w-90% translate-x-[-50%] overflow-y-auto p-5px text-black shadow bg-white!"
            dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
          />
          <div className="mt-320px w-full" style={{ marginTop: "327px" }}>
            <div data-v-909b9c13="" className="mt-10px flex justify-around">
              {currentMessageIndex === 0 && (
                <div
                  className="mx-auto inline text-black"
                  onClick={handleClose}
                >
                  {t("close")}
                </div>
              )}
              {currentMessageIndex > 0 && (
                <div
                  className="mx-auto inline text-black"
                  onClick={handlePrevious}
                >
                  {t("previous")}
                </div>
              )}
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline text-black" onClick={handleNext}>
                  {t("next")}
                </div>
              )}
              {currentMessageIndex === 1 && (
                <div
                  className="mx-auto inline text-black"
                  onClick={handleAgree}
                >
                  {t("i_know")}
                </div>
              )}
            </div>
          </div>
          {/* buttons ends */}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
