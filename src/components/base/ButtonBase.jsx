import React from "react";
import { RightOutlined } from "@ant-design/icons";
import classNames from "classnames";

const ButtonBase = ({
  type = "normal", // normal | back
  disabled = false,
  onClick,
  children,
  style,
  label,
}) => {
  const baseClass =
    "rounded-lg px-4 py-3 min-w-[180px] flex items-center justify-between transition-colors duration-300";

  const typeStyles = {
    active: "bg-gradient-to-tr from-primary-700 to-secondary-700 text-white", //bg-custom-pink
    normal: "bg-gradient-to-tr from-primary-600 to-secondary-600 text-white", //bg-custom-pink
    back: "bg-pink-100 text-pink-800",
    blank: "bg-white text-[#B91B52]",
    disabled:
      "bg-gradient-to-tr from-primary-600 to-secondary-600 text-white cursor-not-allowed",
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
    return classNames(typeStyles[type], hoverStyles[type], style);
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(baseClass, getButtonStyle())}
    >
      {label && <label className="text-white flex-1">{label}</label>}
      {children}
      <RightOutlined style={{ color: "white" }} />
    </button>
  );
};

export default ButtonBase;
