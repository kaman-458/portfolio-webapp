import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 56"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ width: "100%", height: "auto" }}
      aria-hidden="true"
    >
      {/* K: vertical stem + diagonals, balanced proportions */}
      <path
        fill="currentColor"
        d="M 0 0 L 10 0 L 10 56 L 0 56 Z
           M 10 28 L 46 0 L 46 8 L 10 36 Z
           M 10 28 L 46 56 L 46 48 L 10 20 Z"
      />
      {/* O: clean circle, comfortable spacing from K */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M 98 28 A 22 22 0 0 1 54 28 A 22 22 0 0 1 98 28
           M 90 28 A 14 14 0 0 1 62 28 A 14 14 0 0 1 90 28 Z"
      />
    </svg>
  );
};

export default Logo;
