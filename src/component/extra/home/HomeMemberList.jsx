import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../../assets/css/swipeMember.css";
const fakeData = [
  { email: "ll*****@gmail.com", vip: "VIP6", amount: "+$1,145" },
  { email: "so*****@walker.org", vip: "VIP5", amount: "+$872" },
  { email: "ha*****@yahoo.com", vip: "VIP2", amount: "+$315" },
  { email: "dr*****@carlson.biz", vip: "VIP4", amount: "+$562" },
  { email: "co*****@riley.com", vip: "VIP6", amount: "+$1,190" },
  { email: "je*****@gmail.com", vip: "VIP4", amount: "+$729" },
  { email: "wi*****@lee.com", vip: "VIP1", amount: "+$368" },
  { email: "au*****@anderson.com", vip: "VIP2", amount: "+$458" },
  { email: "mc*****@ross.com", vip: "VIP5", amount: "+$715" },
  { email: "ch*****@parker.biz", vip: "VIP5", amount: "+$532" },
  { email: "zo*****@cole.com", vip: "VIP4", amount: "+$402" },
  { email: "bc*****@wallace.com", vip: "VIP4", amount: "+$618" },
  { email: "ct*****@smith.info", vip: "VIP3", amount: "+$498" },
  { email: "bi*****@gmail.com", vip: "VIP5", amount: "+$987" },
  { email: "lr*****@barker.com", vip: "VIP2", amount: "+$234" },
  { email: "dw*****@chapman.biz", vip: "VIP4", amount: "+$764" },
  { email: "kr*****@edwards.biz", vip: "VIP5", amount: "+$1,042" },
  { email: "hm*****@bush.com", vip: "VIP1", amount: "+$126" },
  { email: "jl*****@outlook.com", vip: "VIP4", amount: "+$859" },
  { email: "ni*****@yahoo.com", vip: "VIP2", amount: "+$354" },
  { email: "do*****@cook.com", vip: "VIP6", amount: "+$765" },
  { email: "ec*****@ellis.info", vip: "VIP5", amount: "+$538" },
  { email: "mb*****@gmail.info", vip: "VIP4", amount: "+$413" },
  { email: "za*****@coleman.org", vip: "VIP1", amount: "+$198" },
  { email: "ac*****@lee.biz", vip: "VIP5", amount: "+$935" },
  { email: "pt*****@martin.com", vip: "VIP6", amount: "+$1,176" },
  { email: "da*****@patel.biz", vip: "VIP5", amount: "+$726" },
  { email: "ph*****@cox.com", vip: "VIP4", amount: "+$897" },
  { email: "mi*****@yahoo.com", vip: "VIP1", amount: "+$119" },
  { email: "lb*****@gmail.com", vip: "VIP6", amount: "+$1,100" },
  { email: "ki*****@hotmail.com", vip: "VIP4", amount: "+$754" },
  { email: "sh*****@gmail.com", vip: "VIP2", amount: "+$239" },
  { email: "no*****@gmail.com", vip: "VIP3", amount: "+$312" },
  { email: "co*****@hotmail.biz", vip: "VIP6", amount: "+$987" },
  { email: "tm*****@gmail.com", vip: "VIP2", amount: "+$274" },
  { email: "tb*****@yahoo.com", vip: "VIP5", amount: "+$629" },
  { email: "sy*****@allen.biz", vip: "VIP6", amount: "+$995" },
  { email: "ay*****@gmail.com", vip: "VIP4", amount: "+$341" },
  { email: "wb*****@gmail.com", vip: "VIP6", amount: "+$645" },
  { email: "je*****@gmail.com", vip: "VIP1", amount: "+$285" },
  { email: "ru*****@hotmail.com", vip: "VIP2", amount: "+$495" },
  { email: "st*****@yahoo.com", vip: "VIP6", amount: "+$698" },
];

const HomeMemberList = () => {
  const [items, setItems] = useState(fakeData);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setItems((prevItems) => {
          const newItems = [...prevItems];
          const firstItems = newItems.splice(0, 2); // Remove the first two items
          newItems.push(...firstItems); // Add them to the end
          return newItems;
        });
        setIsAnimating(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    background: "#F5F7FF",
    borderRadius: "16px",
    padding: "16px",
    maxWidth: "600px",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000",
    marginBottom: "16px",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
    position: "relative",
    height: "180px",
    overflow: "hidden",
  };

  const memberItemStyle = (index) => ({
    display: "flex",
    flexDirection: "column",
    background: "white",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    position: "absolute",
    width: "calc(50% - 6px)",
    height: "80px",
    transition: "transform 0.8s ease-in-out", // Increased duration and changed timing function
    transform: `translateY(${isAnimating ? "-112%" : "0"})`,
    top: `${Math.floor(index / 2) * 90}px`,
    left: index % 2 === 0 ? "0" : "calc(50% + 6px)",
  });

  const vipBadgeStyle = {
    background: "#0066FF",
    color: "white",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "12px",
    display: "inline-block",
    marginBottom: "4px",
  };

  const emailStyle = {
    color: "#666",
    fontSize: "13px",
  };

  const amountStyle = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#000",
    marginTop: "4px",
  };

  // Display first 4 items and 4 more for animation
  const visibleItems = [...items.slice(0, 8)];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>{t("member_list")}</div>
      <div style={gridContainerStyle}>
        {visibleItems.map((member, index) => (
          <div key={`${member.email}-${index}`} style={memberItemStyle(index)}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={vipBadgeStyle}>{member.vip}</div>
                  <div style={amountStyle}>{member.amount}</div>
                </div>

                <div style={emailStyle}>{member.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMemberList;
