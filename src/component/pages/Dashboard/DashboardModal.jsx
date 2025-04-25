import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import video from "../../../assets/images/features/youtube.png";
import calender from "../../../assets/images/features/calendar.png";
import batteryIcon from "../../../assets/images/features/battery.png";
import "./dashboard.css";
import { Card, Row, Col } from "react-bootstrap";
import { FaBolt } from "react-icons/fa";

const DashboardModal = (props) => {
  const contractsData = [
    {
      id: 1,
      power: "176.3 Gh/s",
      batteries: 720,
      price: "₹500.00",
      period: "monthly",
    },
    {
      id: 2,
      power: "89.5 Gh/s",
      batteries: 360,
      price: "₹250.00",
      period: "monthly",
    },
    {
      id: 3,
      power: "210.0 Gh/s",
      batteries: 900,
      price: "₹650.00",
      period: "monthly",
    },
    {
      id: 4,
      power: "64.7 Gh/s",
      batteries: 280,
      price: "₹180.00",
      period: "monthly",
    },
    {
      id: 5,
      power: "120.2 Gh/s",
      batteries: 500,
      price: "₹400.00",
      period: "monthly",
    },
    {
      id: 6,
      power: "300.0 Gh/s",
      batteries: 1200,
      price: "₹900.00",
      period: "monthly",
    },
    {
      id: 7,
      power: "150.5 Gh/s",
      batteries: 650,
      price: "₹450.00",
      period: "monthly",
    },
    {
      id: 8,
      power: "200.1 Gh/s",
      batteries: 800,
      price: "₹600.00",
      period: "monthly",
    },
    {
      id: 9,
      power: "98.0 Gh/s",
      batteries: 390,
      price: "₹275.00",
      period: "monthly",
    },
    {
      id: 10,
      power: "250.4 Gh/s",
      batteries: 1050,
      price: "₹750.00",
      period: "monthly",
    },
  ];

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="body-of-modal">
        <div>
          <div className="d-flex align-items-center mt-2 w-100 justify-content-between">
            <h2 className="fs-5 fw-semibold">Free Contract</h2>
            <p className="d-flex align-items-center gap-1">
              <span className="battery">
                <i className="bi bi-battery-full"></i>
              </span>
              <span className="">=</span>
              Mining 1h
            </p>
          </div>

          <button className="modal-close" onClick={props.onHide}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        {/* MODAL STATS OF AD AND CALENDER */}
        <Row className="gx-2 gy-3 my-2 justify-content-center">
          <Col xs={6}>
            <Card className="mining-card text-white">
              <Card.Body className="p-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <img src={video} alt="Watch Ads" className="icon" />
                  <span className="battery">🔋 +2 </span>
                </div>
                <Card.Title className="title mb-1">Watch Ads</Card.Title>
                <Card.Text className="subtitle mb-2">
                  Mining for 2h contract
                </Card.Text>
                <Button className="rate-btn yellow w-100">5.5 Gh/s</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6}>
            <Card className="mining-card text-white">
              <Card.Body className="p-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <img src={calender} alt="Daily" className="icon" />
                  <span className="battery">🔋 +2 </span>
                </div>
                <Card.Title className="title mb-1">Daily</Card.Title>
                <Card.Text className="subtitle mb-2">
                  Mining for 2h contract
                </Card.Text>
                <Button className="rate-btn lavender w-100">7.5 Gh/s</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* POPULAR CONRTACTS SECTION */}
        <div className="popular-section px-3 py-2">
          <h6 className="section-title mb-2">Popular Contract</h6>
          <div className="scroll-container">
            {contractsData.map((contract) => (
              <Card key={contract.id} className="contract-card text-white mb-2">
                <Card.Body className="p-2">
                  <Row className="align-items-center gx-2 d-flex justify-content-between">
                    <Col xs="auto" className="d-flex align-items-center gap-2">
                      <FaBolt color="#ffc107" />
                      <span className="power">{contract.power}</span>
                    </Col>

                    <Col xs="auto" className="d-flex align-items-center gap-1">
                      <img
                        src={batteryIcon}
                        alt="Battery"
                        className="battery-icon"
                      />
                      <span className="battery-count">
                        +{contract.batteries}
                      </span>
                    </Col>

                    <Col xs="auto" className="text-end">
                      <span className="price">{contract.price}</span>
                      <div className="period">/{contract.period}</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DashboardModal;
