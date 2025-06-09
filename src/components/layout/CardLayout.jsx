import { Typography } from "antd";

const CardLayout = ({ children, title, action, childrenLeft = 0 }) => {
  return (
    <div className="flex">
      <div className="bg-white rounded-xl px-[38px] py-[30px] w-full">
        {/* Header of Content Card */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
          <span className="text-[18px] font-bold" style={{ marginBottom: 0 }}>
            {title}
          </span>

          <span className="text-[#EE2649] font-bold text-[14px]">
            LOTTE Finance Pay Later
          </span>
        </div>
        {/* <Divider style={{ margin: "8px 0 24px" }} /> */}
        <div className={`px-[${childrenLeft}px] py-8`}>{children}</div>
        {action}
      </div>
    </div>
  );
};

export default CardLayout;
