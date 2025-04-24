import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const HomeNotice = () => {
  const noticeContent = {
    transitionDuration: "755.666s",
    transform: "translateX(-45339.9px)",
  };
  const { t } = useTranslation();
  return (
    <div home-content="" className="notice-part ">
      <div home-content="" className="">
        <div
          home-content=""
          className="icon bg-white px-2 py-1 rounded-full bg-opacity-10"
        >
          <FontAwesomeIcon icon={faBell}  color="#fff" className="text-xl"/> 
        </div>
      </div>
      <div home-content="" role="alert" className="van-notice-bar">
        <div role="marquee" className="van-notice-bar__wrap">
          <div className="van-notice-bar__content" style={noticeContent}>
            {t("home_welcome_notice")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNotice;
