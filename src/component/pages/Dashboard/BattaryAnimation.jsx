import "./BatteryAnimation.css";

const BattaryAnimation = () => {
  const totalBatteries = 50;

  return (
    <div className="">
      <div className="battery-wrapper">
        <div className="battery-box">
          <div className="battery-grid">
            {[...Array(totalBatteries)].map((_, index) => (
              <div
                className="battery d-flex align-items-center justify-content-center"
                key={index}
              >
                <div
                  className="charge"
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
                <div className="lightning">⚡</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pipe-under">
        <div className="pipe-left-snake">
          <div className="glow-ball" />
        </div>
        <div className="pipe-right-stack">
          {[...Array(3)].map((_, i) => (
            <div className="pipe-right" key={i}>
              <div className="pulse-up" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BattaryAnimation;
