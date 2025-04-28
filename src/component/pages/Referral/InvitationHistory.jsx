import "./referral.css";
import Card from "react-bootstrap/Card";
import { TiGroup } from "react-icons/ti";

const InvitationHistory = () => {
  return (
    <Card className="w-100 mt-3 refer-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-white fw-bold">
          Invitation History
        </Card.Title>
        <div className="d-flex align-items-center justify-content-center">
          <TiGroup size={62} color="#fff" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default InvitationHistory;
