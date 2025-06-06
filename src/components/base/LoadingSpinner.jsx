import React from "react";

export default function LoadingSpinner({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className="animate-[spin_2s_linear_infinite]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const rotate = `rotate(${angle} 32 32)`;
        return (
          <rect
            key={i}
            x="29"
            y="8"
            width="6"
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
