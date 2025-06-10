// src/pages/XacThuc.jsx
import CustomInput from "@/components/base/CustomInput";
import CustomRadioGroup from "@/components/base/CustomRadioGroup";
import { Form, Typography } from "antd";

const { Title } = Typography;

export default function CustomerVerify() {
  return (
    <>
      {/* Form */}
      <div className="text-[14px] font-semibold mb-[20px]">
        Nhập thông tin
      </div>
      <Form layout="vertical">
        {/* Loại giấy tờ */}
        <Form.Item
          label={
            <span className="font-normal text-gray-700">
              Loại giấy tờ tùy thân: <span className="text-red-500">*</span>
            </span>
          }
        >
          <CustomRadioGroup
            options={[
              { value: "cmnd", label: "CMND" },
              { value: "cccd", label: "CCCD" },
            ]}
          />
        </Form.Item>

        {/* Số CMND/CCCD */}
        <Form.Item
          label={
            <span className="font-normal text-gray-700">Nhập số CMND/CCCD</span>
          }
        >
          <CustomInput placeholder="Nhập số CMND/CCCD" />
        </Form.Item>

        {/* Số điện thoại */}
        <Form.Item
          label={
            <span className="font-normal text-gray-700">
              Nhập số điện thoại <span className="text-red-500">*</span>
            </span>
          }
        >
          <CustomInput placeholder="Nhập số điện thoại" />
        </Form.Item>

        {/* Disclaimer Text */}
        <div className="text-gray-600">
          Tôi đồng ý cho chuyển một số thông tin tài khoản của tôi tại trang
          TMĐT này (nếu có) cho LOTTE Finance để xác nhận thông tin, đánh giá
          tín nhiệm
        </div>
      </Form>
    </>
  );
}
