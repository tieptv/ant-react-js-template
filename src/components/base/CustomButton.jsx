import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const BUTTON_TYPE = {
  default: "default",
  back: "back",
  next: "next",
};

const CustomButton = ({ title, type, onClick, className }) => {
  if (type === BUTTON_TYPE.back) {
    return (
      <Button
        onClick={onClick}
        type="default"
        className={`!bg-[#F3DDE7] !text-[#6A124D] !font-bold !border-none px-6 py-2 rounded-md hover:opacity-90 ${className}`}
      >
        {title}
      </Button>
    );
  }
  return (
    <Button
      onClick={onClick}
      type="primary"
      className={`!bg-gradient-to-b !from-[#E5194C] !to-[#A32385] !text-white !border-none !font-bold px-6 py-2 rounded-md hover:opacity-90 h-[46px] ${className}`}
    >
      {title}
      {type === BUTTON_TYPE.next && <RightOutlined className="ml-2" />}
    </Button>
  );
};
export default CustomButton;
