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
      {/* B: vertical stem + two lobes */}
      <path
        fill="currentColor"
        d="M 0 0 L 10 0 L 10 56 L 0 56 Z
           M 10 0 A 18 14 0 0 1 46 28 A 18 14 0 0 1 10 0 Z
           M 10 28 A 18 14 0 0 1 46 56 A 18 14 0 0 1 10 28 Z"
      />
      {/* A: triangle with crossbar */}
      <path
        fill="currentColor"
        d="M 58 56 L 76 0 L 94 56 L 88 56 L 88 32 L 64 32 L 64 56 Z"
      />
    </svg>
  );
};

export default Logo;
