import React from "react";
import logoImage from "../images/logo-ba.png";

const Logo = ({ className = "" }) => {
  return (
    <img
      src={logoImage}
      alt="BA"
      className={className}
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-hidden="true"
    />
  );
};

export default Logo;
