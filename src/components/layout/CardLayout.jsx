import { Typography } from "antd";
const { Title } = Typography;

const CardLayout = ({ children, title, action }) => {
  return (
    <div className="flex">
      <div className="bg-white rounded-xl px-[38px] py-[30px] w-full">
        {/* Header of Content Card */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
          <Title level={4} style={{ marginBottom: 0 }}>
            {title}
          </Title>

          <span className="text-[#EE2649] font-bold">
            LOTTE Finance Pay Later
          </span>
        </div>
        {/* <Divider style={{ margin: "8px 0 24px" }} /> */}
        <div className="px-[50px]">{children}</div>
        {action}
      </div>
    </div>
  );
};

export default CardLayout;
