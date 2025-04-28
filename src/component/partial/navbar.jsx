import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"; // Optional, if using Axios
import { IoIosHome } from "react-icons/io";
import { TbContract } from "react-icons/tb";
import { RiUserSharedFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";

const Navbar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/checkdepo");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data immediately when the component mounts
    fetchData();
  }, []);

  return (
    <div className=":uno: tab-bar-wrap  tab-bar-wrap-26 fixed bottom-0 z-2">
      <nav className="tab-bar">
        {/* <NavLink
          to="/home"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-mdi:home-circle c-$text-gray"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t("home")}
            </div>
          </div>
        </NavLink> */}
        <NavLink
          to="/user-dashboard"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div
            tab-btn=""
            id="tabItem"
            className="tab-item-inner d-flex flex-column"
          >
            <IoIosHome size={20} />
            <div tab-btn="" className="tab-item-label">
              {t("Dashboard")}
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/contracts"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div
            tab-btn=""
            id="tabItem"
            className="tab-item-inner d-flex flex-column"
          >
            <TbContract size={20} />
            <div tab-btn="" className="tab-item-label">
              {t("Contracts")}
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/referral"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div
            tab-btn=""
            id="tabItem"
            className="tab-item-inner d-flex flex-column"
          >
            <RiUserSharedFill size={20} />
            <div tab-btn="" className="tab-item-label">
              {t("Referral")}
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/withdrawal-amount"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div
            tab-btn=""
            id="tabItem"
            className="tab-item-inner d-flex flex-column"
          >
            <BiMoneyWithdraw size={20} />
            <div tab-btn="" className="tab-item-label">
              {t("Withdrawal")}
            </div>
          </div>
        </NavLink>
        {/* <NavLink
          to="/task"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-material-symbols:playlist-add-check-circle-rounded c-$text-gray"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t("task")}
            </div>
          </div>
        </NavLink> */}
        {/* <NavLink
          to="/team"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ri:group-2-fill c-$text-gray"
            ></div>

            <div tab-btn="" className="tab-item-label">
              {t("team")}
            </div>
          </div>
        </NavLink> */}
        {/* <NavLink
          to="/vip"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-icon-park-solid:crown-two  c-$text-gray"
            ></div>

            <div tab-btn="" className="tab-item-label">
              {t("vip")}
            </div>
          </div>
        </NavLink> */}
        <NavLink
          to="/me"
          className="tab-item"
          style={{ backgroundColor: "#0b3ab3" }}
        >
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ic:sharp-account-circle c-$text-gray"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t("me")}
            </div>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
