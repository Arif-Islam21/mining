import React, { useState } from "react";

// css import
import "../../assets/css/style.css";

const copyAddress = ({ address, handleCopyClick }) => {
  const inviteLink = address;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setAlertMessage("Copied Successfully");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
      })
      .catch((err) => {
        setAlertMessage("Failed to copy");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000);
        console.error("Failed to copy: ", err);
      });
    handleCopyClick();
  };

  return (
    <div rcwallet-addr="" className="copy-address base-input bg-black">
      <span
        id="tokenAddress"
        rcwallet-addr=""
        className=":uno: text-13px c-$btn-text text-white"
      >
        {inviteLink}
      </span>
      <div rcwallet-addr="" className="btn cursor-pointer">
        <span rcwallet-addr="" onClick={copyToClipboard} className="text-black">
          Copy
        </span>
      </div>
    </div>
  );
};

export default copyAddress;
