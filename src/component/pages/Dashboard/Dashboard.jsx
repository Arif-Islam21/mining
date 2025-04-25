import UserProfile from "./UserProfile";
import image from "../../../assets/images/features/choosedImg.png";
import "./dashboard.css";
import { useState } from "react";
import DashboardModal from "./DashboardModal";
import Navbar from "../../partial/navbar";

const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="lg-max-w-md mx-auto">
      <UserProfile />
      <div className="flex align-items-center justify-content-end gap-4 text-white">
        <h4 className="fs-6 underline fw-semibold">Help&FAQ</h4>
        <h4 className="fs-6 fw-semibold  underline">What is TycoonPoints ?</h4>
      </div>
      <div className="relative my-3">
        <img src={image} alt="Chosen Image" className="rounded mt-3" />
        <button
          onClick={() => setModalShow(true)}
          className="btn mining-btn-style mining-btn"
        >
          Mining Contract
        </button>
      </div>
      <div style={{ marginTop: "60px" }}>
        <Navbar />
      </div>
      <DashboardModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Dashboard;
