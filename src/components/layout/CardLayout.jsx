import { Divider, Typography } from "antd";
const { Title } = Typography;

const CardLayout = ({ children, title }) => {
  return (
    <div className="flex">
      <div className="bg-white rounded-xl p-8 w-full">
        {/* Header of Content Card */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
          <Title level={4} style={{ marginBottom: 0 }}>
            {title}
          </Title>

          <span className="text-pink-600 font-medium">
            LOTTE Finance Pay Later
          </span>
        </div>
        {/* <Divider style={{ margin: "8px 0 24px" }} /> */}
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
