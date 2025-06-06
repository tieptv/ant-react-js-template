// src/pages/XacThuc.jsx
import ButtonBase from "@/components/base/ButtonBase";
import CustomInput from "@/components/base/CustomInput";
import CustomRadioGroup from "@/components/base/CustomRadioGroup";
import CardLayout from "@/components/layout/CardLayout";
import { Form, Typography } from "antd";

const { Title } = Typography

export default function CustomerVerify() {


  const renderAction = () => {
    return  (<div className="flex justify-between items-center border-t border-gray-300 pt-4">
            <ButtonBase type="blank" label="Huỷ" />
            <ButtonBase type="normal" label="Tiếp tục&nbsp;" />
          </div>)
  }
  return (<CardLayout title={"Thông tin khách hàng"} action={renderAction()}>
        {/* Form */}
        <Form layout="vertical">
          <Title level={5} style={{ marginBottom: 15 }}>
            Nhập thông tin
          </Title>
          {/* Loại giấy tờ */}
          <Form.Item
            label={
              <span className="font-normal text-gray-700">
                Loại giấy tờ tùy thân: <span className="text-red-500">*</span>
              </span>
            }
          >
            <CustomRadioGroup options={[{value: 'cmnd', label: 'CMND'}, {value: 'cccd', label: 'CCCD'}]}/>
          </Form.Item>

          {/* Số CMND/CCCD */}
          <Form.Item
            label={
              <span className="font-normal text-gray-700">
                Nhập số CMND/CCCD
              </span>
            }
          >
            <CustomInput placeholder="Nhập số CMND/CCCD"/>
          </Form.Item>
          

          {/* Số điện thoại */}
          <Form.Item
            label={
              <span className="font-normal text-gray-700">
                Nhập số điện thoại <span className="text-red-500">*</span>
              </span>
            }
          >
            <CustomInput placeholder="Nhập số điện thoại"/>
          </Form.Item>

          {/* Disclaimer Text */}
          <div className="text-gray-600 text-sm mb-8">
            Tôi đồng ý cho chuyển một số thông tin tài khoản của tôi tại trang
            TMĐT này (nếu có) cho LOTTE Finance để xác nhận thông tin, đánh giá
            tín nhiệm
          </div>
        </Form>
     </CardLayout>
  );
}
