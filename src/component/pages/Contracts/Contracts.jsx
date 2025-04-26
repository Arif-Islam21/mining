import UserProfile from "../Dashboard/UserProfile";
import img from "../../../assets/images/features/pcGear.gif";
import "./contracts.css";
import bit from "../../../assets/images/coins/Bitcoin.png";
import Navbar from "../../partial/navbar";
import { FaGift } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Contracts = () => {
  const contracts = [
    {
      id: 1,
      speed: "5.5 Gh/s",
      reward: "Watch Ads Rewards",
      active: false,
    },
    {
      id: 2,
      speed: "7.5 Gh/s",
      reward: "Daily Sign-In Rewards",
      active: false,
    },
  ];

  return (
    <div className="lg-max-w-md mx-auto">
      <UserProfile />
      <div>
        <img src={img} alt="this is the main image" />
      </div>
      <div>
        <div className="contract-wrapper p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-white mb-0">My Contract</h5>
            <button className="btn btn-warning fw-bold rounded-pill px-3">
              + 5.5 Gh/s
            </button>
          </div>

          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="contract-card p-3 mb-2 d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img src={bit} alt="BTC Icon" className="btc-icon me-3" />
                <div>
                  <div className="fw-bold text-white">{contract.speed}</div>
                  <small className="text-white-50">{contract.reward}</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span
                  className={`status-dot ${
                    contract.active ? "active" : "inactive"
                  }`}
                ></span>
                <span className="text-white-50 ms-2">
                  {contract.active ? "active" : "not active"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="contract-card text-white p-3 mb-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaGift size={20} />
          </div>
          <div className="d-flex align-items-center">
            <p>Add invitation code and get a free contract</p>
          </div>
          <div className="d-flex align-items-center">
            <IoIosArrowForward size={20} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "60px" }}>
        <Navbar />
      </div>
    </div>
  );
};

export default Contracts;
