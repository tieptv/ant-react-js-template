import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="circle-spinner">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          className="bar"
          key={i}
          style={{
            transform: `rotate(${i * 45}deg) translateY(-40px)`,
          }}
        />
      ))}
    </div>
  );
};

export default Spinner;
