import "./referral.css";
import Card from "react-bootstrap/Card";
import bit from "../../../assets/images/coins/Bitcoin.png";
import binance from "../../../assets/images/coins/Binance.jpg";

const ReferralReward = () => {
  return (
    <Card className="w-100 mt-3 refer-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-white fw-bold">Referall Reward</Card.Title>
        <div className="d-flex refer-step-text align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <img src={bit} alt="bit Coin" className="bit-coin" />
            <h3 className="">Share the app with friends</h3>
          </div>
          <h3 className="font-orange">0.0000000000</h3>
        </div>
        <div className="d-flex refer-step-text my-2 align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <img src={binance} alt="bit Coin" className="bit-coin" />
            <h3 className="">Share the app with friends</h3>
          </div>
          <h3 className="fw-bold">0</h3>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReferralReward;
