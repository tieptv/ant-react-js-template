import React from "react";
import { RightOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Button } from "antd";
const ButtonBase = ({
  type = "normal", // normal | back
  disabled = false,
  onClick,
  children,
  style,
  label,
}) => {
  const baseClass =
    "rounded-lg px-4 py-3 min-w-[180px] flex items-center justify-between transition-colors duration-300 ripple-button";

  const typeStyles = {
    active: "bg-gradient-to-tr from-primary-700 to-secondary-700 text-white", //bg-custom-pink
    normal: "bg-gradient-to-tr from-primary-600 to-secondary-600 text-white", //bg-custom-pink
    back: "bg-pink-100 text-pink-800",
    blank: "bg-white", //bg-custom-pink
    disabled:
      "bg-gradient-to-tr from-primary-600 to-secondary-600 text-white cursor-not-allowed",
  };

  const labelStyles = {
    normal: "text-white",
    blank: "text-pink-800",
  };

  const hoverStyles = {
    normal: "hover:from-red-500 hover:to-purple-700",
    back: "hover:bg-pink-200",
  };

  const getButtonStyle = () => {
    if (disabled) return typeStyles.disabled;
    return classNames(typeStyles[type], hoverStyles[type], style);
  };

  const getLabelStyle = () => {
    if (disabled) return typeStyles.disabled;
    return classNames(labelStyles[type], style);
  };

  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);
  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);
  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      className={classNames(baseClass, getButtonStyle())}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      {label && (
        <label className={classNames(getLabelStyle(), "flex-1")}>{label}</label>
      )}
      {children}
      <RightOutlined style={{ color: "white" }} />
    </button>
    // <button
    //   className="ripple-button"
    //   onClick={(e) => {
    //     const rect = e.target.getBoundingClientRect();
    //     setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    //     onClick && onClick(e);
    //   }}
    // >
    //   {isRippling ? (
    //     <span
    //       className="ripple"
    //       style={{
    //         left: coords.x,
    //         top: coords.y,
    //       }}
    //     />
    //   ) : (
    //     ""
    //   )}
    //   <span className="content">{children}</span>
    // </button>
  );
};

export default ButtonBase;
