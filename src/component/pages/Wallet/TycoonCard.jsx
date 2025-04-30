import { Button } from "react-bootstrap";
import "./wallet.css";
import bit from "../../../assets/images/coins/Bitcoin.png";
import { FaArrowRight } from "react-icons/fa6";

const TycoonCard = () => {
  return (
    <div className="tycoon-bg">
      <div className="d-flex align-items-center justify-content-between px-3 my-3">
        <div className="d-flex align-items-center gap-2">
          <img src={bit} alt="bit coin image" className="coin-img" />
          <h2 className="fs-5 fw-bold text-white">Tycoon Point</h2>
        </div>
        <FaArrowRight size={28} color="#fff" />
      </div>
      <div>
        <h2 className="fs-5 fw-bold text-white px-3 my-2">
          <span>1290</span>TPS
        </h2>
      </div>
      <h4 className="tycoon-link">What is Tycoon Poinsts</h4>
    </div>
  );
};

export default TycoonCard;
