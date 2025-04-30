import bit from "../../../assets/images/coins/Bitcoin.png";
import "./wallet.css";

const BitcoinDetails = () => {
  const miningContracts = [
    {
      label: "Mining Contract",
      date: "2025-04-14 18:30:00",
      value: "0.000000000035231",
    },
    {
      label: "Mining Contract",
      date: "2025-04-13 12:00:00",
      value: "0.000000134213421",
    },
    {
      label: "Mining Contract",
      date: "2025-04-12 08:45:00",
      value: "0.000000045122321",
    },
    {
      label: "Mining Contract",
      date: "2025-04-11 23:15:00",
      value: "0.000005643221134",
    },
    {
      label: "Mining Contract",
      date: "2025-04-10 17:00:00",
      value: "0.000000002345121",
    },
    {
      label: "Mining Contract",
      date: "2025-04-09 09:30:00",
      value: "0.000000323212341",
    },
  ];
  return (
    <div>
      <h2 className="fs-5 fw-semibold text-white">Transections</h2>
      <div className="transection-container">
        {miningContracts.map((item, idx) => (
          <div
            key={idx}
            className="card mining-contract-card d-flex flex-row align-items-center justify-content-between p-3 mb-3"
          >
            <div className="d-flex align-items-center">
              <img src={bit} alt="BTC" className="me-3 btc-icon" />
              <div>
                <div className="text-white fw-semibold">{item.label}</div>
                <div className="fade-white small">{item.date}</div>
              </div>
            </div>
            <div className="text-warning fw-bold value-text">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitcoinDetails;
