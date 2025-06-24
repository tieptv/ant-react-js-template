import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const BUTTON_TYPE = {
  default: "default",
  back: "back",
  next: "next",
  active: "active",
  inactive: "inactive",
  disabled: "disabled",
};

const CustomButton = ({ title, type, onClick, className }) => {
  let statusStyle = "";
  if (type === "active") {
    statusStyle = "!bg-secondary-500 !text-white";
  } else if (type === "inactive") {
    statusStyle = "!text-[#3A2D4C] !bg-secondary-100";
  } else if (type === "back") {
    statusStyle = "!bg-[#F3DDE7] !text-[#6A124D]";
  } else if (type === "next") {
    statusStyle = "!bg-gradient-to-b !from-[#E5194C] !to-[#A32385] !text-white";
  }
  if (type === BUTTON_TYPE.back) {
    return (
      <Button
        onClick={onClick}
        type="default"
        className={` !font-bold !border-none px-6 py-2 rounded-md hover:opacity-90 ${statusStyle} ${className}`}
      >
        {title}
      </Button>
    );
  }
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={`!border-none !font-bold px-6 py-2 rounded-md hover:opacity-90 h-[46px] ${statusStyle} ${className}`}
    >
      {title}
      {type === BUTTON_TYPE.next && <RightOutlined className="ml-2" />}
    </Button>
  );
};
export default CustomButton;
