// src/pages/XacThuc.jsx
import ButtonBase from "@/components/base/ButtonBase";
import { Steps, Form, Input, Radio, Button } from "antd";

export default function XacThuc() {
  return (
    <div className="flex">
      <div className="bg-white rounded-xl p-8 shadow-md">
        {/* Header of Content Card */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
          <h2 className="text-gray-800 text-xl font-medium">
            Thông tin khách hàng
          </h2>
          <span className="text-pink-600 font-medium">
            LOTTE Finance Pay Later
          </span>
        </div>

        {/* Form */}
        <Form layout="vertical">
          {/* Loại giấy tờ */}
          <Form.Item
            label={
              <span className="font-normal text-gray-700">
                Loại giấy tờ tùy thân: <span className="text-red-500">*</span>
              </span>
            }
          >
            <Radio.Group>
              <Radio value="cmnd">CMND</Radio>
              <Radio value="cccd" className="ml-6">
                CCCD
              </Radio>
            </Radio.Group>
          </Form.Item>

          {/* Số CMND/CCCD */}
          <Form.Item
            label={
              <span className="font-normal text-gray-700">
                Nhập số CMND/CCCD
              </span>
            }
          >
            <Input placeholder="Nhập số CMND/CCCD" className="rounded-md" />
          </Form.Item>

          {/* Số điện thoại */}
          <Form.Item
            label={
              <span className="font-normal text-gray-700">
                Nhập số điện thoại <span className="text-red-500">*</span>
              </span>
            }
          >
            <Input placeholder="Nhập số điện thoại" className="rounded-md" />
          </Form.Item>

          {/* Disclaimer Text */}
          <div className="text-gray-600 text-sm mb-8">
            Tôi đồng ý cho chuyển một số thông tin tài khoản của tôi tại trang
            TMĐT này (nếu có) cho LOTTE Finance để xác nhận thông tin, đánh giá
            tín nhiệm
          </div>

          <div className="flex justify-between items-center border-t border-gray-300 pt-4">
            <ButtonBase type="blank" label="Huỷ" />
            <ButtonBase type="normal" label="Tiếp tục&nbsp;" />
          </div>
        </Form>
      </div>
    </div>
  );
}
