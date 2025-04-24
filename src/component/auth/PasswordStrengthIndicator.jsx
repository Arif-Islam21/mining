import React from "react";

const PasswordStrengthIndicator = ({ password }) => {
  const calculateStrength = (pwd) => {
    let strength = 0;

    // Basic check - at least 8 characters
    if (pwd.length >= 8) strength += 1;

    // Medium check - contains number and letters
    if (/\d/.test(pwd) && /[a-zA-Z]/.test(pwd)) strength += 1;

    // Strong check - contains special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) strength += 1;

    return strength;
  };

  const getStrengthColor = (index) => {
    switch (index) {
      case 0:
        return "#ff4d4d"; // Red
      case 1:
        return "#ffd700"; // Yellow
      case 2:
        return "#2ecc71"; // Green
      default:
        return "#708090"; // Default - Light Gray
    }
  };

  const strength = calculateStrength(password);
  const segments = 3;

  return (
    <div className="mt-1">
      <div
        className="flex gap-1"
        style={{ marginLeft: "10px", marginTop: "5px" }}
      >
        {[...Array(segments)].map((_, index) => (
          <div
            key={index}
            className=" flex-1 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                index < strength ? getStrengthColor(index) : "#708090",
              height: "4px",
              maxWidth: "8%",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
