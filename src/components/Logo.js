import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 32"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ width: "100%", height: "auto" }}
      aria-hidden="true"
    >
      <text
        x="28"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        BA
      </text>
    </svg>
  );
};

export default Logo;
