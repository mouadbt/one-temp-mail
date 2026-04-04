import React from "react";

const LoadingSpinner = ({ className = "", ...props }) => {
  return (
    <svg
      width="180"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <circle
          strokeLinecap="round"
          fill="none"
          strokeDasharray="50.26548245743669 50.26548245743669"
          stroke="currentColor"
          strokeWidth="2"
          r="32"
          cy="50"
          cx="50"
        >
          <animateTransform
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          />
        </circle>
        <g />
      </g>
    </svg>
  );
};

export default LoadingSpinner;
