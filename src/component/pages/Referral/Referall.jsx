import "./referral.css";
import referImg from "../../../assets/images/features/refer.webp";
import Invite from "./Invite";
import ReferralReward from "./ReferralReward";
import { BiCopy } from "react-icons/bi";
import InvitationHistory from "./InvitationHistory";
import Navbar from "../../partial/navbar";

const Referall = () => {
  return (
    <div className="lg-max-w-md  mx-auto">
      <div>
        <img src={referImg} alt="refer image" className="refer-top-img" />
      </div>
      <Invite />
      <ReferralReward />
      <div className="d-flex py-3 refer-step-text my-2 align-items-center justify-content-between gap-3">
        <h3 className="">Invitation Code</h3>

        <div className="d-flex align-items-center gap-2">
          <h3 className="fw-bold">29058503</h3>
          <BiCopy size={18} />
        </div>
      </div>
      <div className="mb-4">
        <InvitationHistory />
      </div>
      <div style={{ marginTop: "60px" }}>
        <Navbar />
      </div>
    </div>
  );
};

export default Referall;
