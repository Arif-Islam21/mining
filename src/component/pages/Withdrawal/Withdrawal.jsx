import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/features/binanceImg.jpg";
import "./withdraw.css";
import { Form } from "react-bootstrap";

const Withdrawal = () => {
  return (
    <div className="lg-max-w-md mx-auto d-flex flex-column justify-content-between p-3 bg-white min-h-screen">
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <Link className="" to={-1}>
            <ArrowLeftCircle size={24} className="text-white back-btn" />
          </Link>
          <h2 className="fs-5 fw-bold">Withdrawal</h2>
          <button className="history-btn">History</button>
        </div>
        <div className="warn">
          Please enter the correct Bitcoin (BTC) wallet address. An incorrect
          entry may result in the loss of your BTC.
        </div>
        <div className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="fs-5 fw-semibold">Amount</h3>
            <h4 className="fw-semibold fs-6 text-gray">
              <span>0.0000017983746</span> BTC
            </h4>
          </div>
          <div className="form-input relative">
            <input
              type="number"
              className="no-spinner"
              placeholder="Minimum amount: 0.000022"
            />
            <button className="all-amount">All</button>
          </div>
        </div>
        {/* HAVE TO IMPLEMENT SELECT HERE */}
        <div className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="fs-5 fw-semibold">Network</h3>
          </div>
          <div className="form-input relative">
            <Form.Select
              className="select-item"
              aria-label="Default select example"
            >
              <option>BNB Smart chain(BEP 20)</option>
              <option value="BitCoin">Bit Coin</option>
              <option value="doge">Doge Coin</option>
            </Form.Select>
          </div>
        </div>
        <div className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="fs-5 fw-semibold">Wallet address</h3>
          </div>
          <div className="form-input relative">
            <input type="text" placeholder="Long press to paste" />
          </div>
        </div>
        <div>
          <h2>Create a BTC wallet Now!🫳</h2>
          <img className="binance-img" src={img} alt="binance img" />
        </div>
      </div>
      <div className="my-3 d-flex align-items-center justify-content-between w-100 nav-bottom">
        <div>
          <p className="text-gray text-small">Amount Receved</p>
          <h2 className="fs-4 fw-bold text-black">
            <span>0</span>BTC
          </h2>
          <p className="text-gray text-small">
            Network fee <span>0.000079</span> BTC
          </p>
        </div>
        <button className="withdraw-btn">Withdrawal</button>
      </div>
    </div>
  );
};

export default Withdrawal;
