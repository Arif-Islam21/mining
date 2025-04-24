import userProfile from "../../../assets/images/features/user.webp";
import "./dashboard.css";
import bitcoin from "../../../assets/images/coins/Bitcoin.png";
import Ethereum from "../../../assets/images/coins/Ethereum.jpg";

const UserProfile = () => {
  return (
    <div className="text-white my-3">
      <div className=" d-flex align-items-center justify-content-between">
        <div className=" d-flex align-items-center justify-content-center gap-3">
          {/* USER PROFILE AVATER */}
          <div
            className="border-2 border-secondary d-flex align-items-center justify-content-center rounded-circle"
            style={{ height: "4rem", width: "4rem" }}
          >
            <img
              src={userProfile}
              alt="User Profile"
              className="rounded-circle p-1 bg-secondary"
            />
          </div>
          <div style={{ maxWidth: "fit-content" }}>
            <h2 className="fs-5 mb-1 fw-semibold">bitTycoon</h2>
            <p className="px-2 rounded-4" style={{ background: "#4b4d52" }}>
              Id: 12345
            </p>
          </div>
        </div>
        {/* RIGHT SIDE COIN DETAILS */}
        <div className="d-flex align-items-center gap-2 gradient-black rounded">
          <div>
            <h2 className="fs-6 fw-bold text-end" style={{ color: "yellow" }}>
              0.00000343345
            </h2>
            <p className="fw-semibold text-end">1BTC = 93,569.73 USD</p>
          </div>
          <div>
            <img
              style={{ height: "2rem", width: "2rem" }}
              src={bitcoin}
              alt="Bitcoin"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center border-right justify-content-end">
        {/* RIGHT SIDE COIN DETAILS */}
        <div className="d-flex align-items-center gap-2 gradient-black rounded">
          <div>
            <h2 className="fs-6 fw-bold text-end" style={{ color: "yellow" }}>
              0.00000343345
            </h2>
            <p className="fw-semibold text-end">1BTC = 93,569.73 USD</p>
          </div>
          <div>
            <img
              style={{ height: "2rem", width: "2rem" }}
              src={Ethereum}
              alt="Ethereum"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
