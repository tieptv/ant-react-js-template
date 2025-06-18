import React from "react";

export default function LoadingSpinner({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className="animate-[spin_4s_linear_infinite]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const rotate = `rotate(${angle} 34 34)`;
        return (
          <rect
            key={i}
            x="29"
            y="4"
            width="10"
            height="16"
            rx="1"
            fill="white"
            transform={rotate}
          />
        );
      })}
    </svg>
  );
}
