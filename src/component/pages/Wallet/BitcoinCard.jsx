import "./wallet.css";
import bit from "../../../assets/images/coins/Bitcoin.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const BitcoinCard = () => {
  return (
    <div className="bit-bg">
      <div className="d-flex align-items-center justify-content-between px-3 my-3">
        <div className="d-flex align-items-center gap-2">
          <img src={bit} alt="bit coin image" className="coin-img" />
          <h2 className="fs-5 fw-bold text-white">BitCoin</h2>
        </div>
        <Link
          to="/withdrawal-amount"
          className="withdraw-button"
          variant="light"
        >
          Withdraw
        </Link>
      </div>
      <div>
        <h2 className="fs-5 fw-bold text-white px-3 my-2">
          <span>0.00000182631</span>BTC
        </h2>
      </div>
    </div>
  );
};

export default BitcoinCard;
