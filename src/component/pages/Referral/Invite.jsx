import Card from "react-bootstrap/Card";
import bit from "../../../assets/images/coins/Bitcoin.png";
// import hand from "../../../assets/images/features/handClick.png";

import "./referral.css";

const Invite = () => {
  return (
    <Card className="w-100 mt-3 refer-card" style={{ width: "18rem" }}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between gap-3">
          <h4 className="refer-step">1</h4>
          <h3 className="refer-step-text">Share the app with friends</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="d-flex align-items-center justify-content-between gap-3">
          <h4 className="refer-step">2</h4>
          <h3 className="refer-step-text">
            Earn BTC on sucessful registration
          </h3>
        </div>
        <div className="vertical-line"></div>
        <div className="d-flex align-items-center justify-content-between gap-3">
          <img src={bit} alt="bit coin" className="bit-coin" />
          <h3 className="refer-step-text">Get 20% of Friends earning</h3>
        </div>
        {/* INVITE BUTTON */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="invite-btn w-75">invite</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Invite;
