import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import SingleHeader from "./extra/SingleHeader";
import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";

const Financial = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ deposites: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/history");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY, HH:mm:ss");
  };

  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };

  return (
    <div>
      <div id="app" className="a-t-26 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader />
          <div className="financial-wrap26 p-$mg">
            <div className="container-card relative rd-$card-radius p-$mg c-$btn-text">
              <div className="tabs2">
                <Link to="/financial" className="tab-item tab2 active2">
                  All History
                </Link>
                <Link to="/basic" className="tab-item tab2 non-active2">
                  Withdraw History
                </Link>
              </div>
              {isLoading ? (
                <CustomLoader />
              ) : data.histories.length > 0 ? (
                data.histories.map((history, index) => (
                  <div
                    className="mb-10px flex cursor-pointer items-center py-10px!"
                    key={index}
                    style={{
                      background: "#346DFF",
                      padding: "0px 10px",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div>{history.type}</div>
                      <div className="text-xs text-[var(--text-gray6)]">
                        {formatDate(history.created_at)}
                      </div>
                    </div>
                    <div className="ml-auto text-green">
                      {history.amount}
                    </div>
                  </div>
                ))
              ) : (
                <div className="base-list-nodata">{t("no_data")}</div>
              )}
            </div>
          </div>
        </div>
        <SupportLink toggleTelegramPopUp={toggleTelegramPopUp} />
        <TelegramPopUp
          isTelegramVisible={isTelegramVisible}
          toggleTelegramPopUp={toggleTelegramPopUp}
        />
      </div>
    </div>
  );
};

export default Financial;
