import userProfile from "../../../assets/images/features/user.webp";
import "./dashboard.css";
import bitcoin from "../../../assets/images/coins/Bitcoin.png";
import bolt from "../../../assets/images/features/bolt.png";

const UserProfile = () => {
  return (
    <div className="text-white mt-4 my-3">
      <div className=" d-flex align-items-center justify-content-between">
        {/* RIGHT SIDE COIN DETAILS */}
        <div className="d-flex align-items-center gap-2 p-2 gradient-black rounded">
          <div>
            <h2 className="fs-6 fw-bold text-end" style={{ color: "orange" }}>
              0.00000343345
            </h2>
            <p style={{ fontSize: "10px" }} className="fw-semibold text-end">
              1BTC = 93,569.73 USD
            </p>
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
        <div className="d-flex align-items-center border-right ">
          {/* RIGHT SIDE COIN DETAILS */}
          <div className="d-flex align-items-center gap-2 p-2 gradient-black rounded">
            <div>
              <h2 className="fs-6 fw-bold text-end" style={{ color: "white" }}>
                0.00000343345
              </h2>
              <p style={{ fontSize: "10px" }} className="fw-semibold text-end">
                1BTC = 93,569.73 USD
              </p>
            </div>
            <div>
              <img
                style={{ height: "2rem", width: "2rem" }}
                src={bolt}
                alt="Ethereum"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
