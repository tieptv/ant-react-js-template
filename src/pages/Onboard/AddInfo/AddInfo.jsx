// src/AdditionalInfoForm.jsx
import React, { useState } from "react";
import {
  Form,
  Input,
  Checkbox,
  Radio,
  Collapse,
  Divider,
  Typography,
} from "antd";
import CustomInput from "@/components/base/CustomInput";
import CustomSelect from "@/components/base/CustomSelect";
import CustomCheckBoxGroup from "@/components/base/CustomCheckBoxGroup";
import CustomRadioGroup from "@/components/base/CustomRadioGroup";
import CardLayout from "@/components/layout/CardLayout";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const jobs = [
  { value: "employee", label: "Nhân viên" },
  { value: "self-employed", label: "Tự do" },
  { value: "student", label: "Sinh viên" },
];

const levels = [
  { value: "employee", label: "Quản lý" },
  { value: "self-employed", label: "Nhân viên" },
  { value: "student", label: "Giám đốc" },
];

const districts = [
  { value: "employee", label: "Ba Đình" },
  { value: "self-employed", label: "Đống Đa" },
  { value: "student", label: "Hai Bà Trưng" },
];

const provinces = [
  { value: "hanoi", label: "Hà Nội" },
  { value: "hochiminh", label: "TP. Hồ Chí Minh" },
  { value: "danang", label: "Đà Nẵng" },
];

const wards = [
  { value: "phuong-linh-dien", label: "Phường Linh Điền" },
  { value: "phuong-linh-trung", label: "Phường Linh Trung" },
  { value: "phuong-linh-xuan", label: "Phường Linh Xuân" },
];

const relationships = [
  { value: "father", label: "Cha" },
  { value: "mother", label: "Mẹ" },
  { value: "friend", label: "Bạn bè" },
  { value: "spouse", label: "Vợ/Chồng" },
];

const methods = [
  { label: "SMS", value: "sms" },
  { label: "Email", value: "email" },
  { label: "Lotte F", value: "lottef" },
];

export default function AdditionalInfoForm() {
  const [form] = Form.useForm();
  const [sameAddress, setSameAddress] = useState(false);

  const onSameAddressChange = (e) => {
    setSameAddress(e.target.checked);
    if (e.target.checked) {
      form.setFieldsValue({
        province: undefined,
        district: undefined,
        ward: undefined,
        detailedAddress: "",
      });
    }
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          notificationMethods: ["sms"],
          statementDate: "01",
        }}
      >
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          style={{ background: "transparent" }}
        >
          <Panel header={<Text strong>Nhập thông tin nhân thân</Text>} key="1">
            <Form.Item
              name="email"
              label={
                <span className="font-normal text-gray-700">Nhập Email</span>
              }
              rules={[
                { required: true, message: "Vui lòng nhập Email" },
                { type: "email", message: "Địa chỉ Email không hợp lệ" },
              ]}
            >
              <CustomInput placeholder="Nhập Email" />
            </Form.Item>

            <Form.Item
              name="oldIdNumber"
              label={
                <span className="font-normal text-gray-700">Nhập Email</span>
              }
            >
              <CustomInput placeholder="Số CMND/CCCD cũ" />
            </Form.Item>

            <Form.Item
              name="occupation"
              label={
                <>
                  Nghề nghiệp <Text type="danger">*</Text>
                </>
              }
              rules={[{ required: true, message: "Vui lòng chọn Nghề nghiệp" }]}
            >
              <CustomSelect placeholder="Chọn nghề nghiệp" options={jobs} />
            </Form.Item>

            <Form.Item
              name="position"
              label={
                <>
                  Chức vụ <Text type="danger">*</Text>
                </>
              }
              rules={[{ required: true, message: "Vui lòng chọn Chức vụ" }]}
            >
              <CustomSelect placeholder="Chọn chức vụ" options={levels} />
            </Form.Item>
          </Panel>

          <Panel header={<Text strong>Nhập thông tin cư trú</Text>} key="2">
            <Form.Item name="sameAddress" valuePropName="checked">
              <Checkbox onChange={onSameAddressChange}>
                Địa chỉ hiện tại trùng với địa chỉ thường trú CMND/CCCD
              </Checkbox>
            </Form.Item>

            <Form.Item
              name="province"
              label={
                <>
                  Tỉnh/Thành phố <Text type="danger">*</Text>
                </>
              }
              rules={[
                { required: true, message: "Vui lòng chọn Tỉnh/Thành phố" },
              ]}
            >
              <CustomSelect
                placeholder="Chọn Tỉnh/Thành phố"
                options={provinces}
                disabled={sameAddress}
              />
            </Form.Item>

            <Form.Item
              name="district"
              label={
                <>
                  Quận/Huyện <Text type="danger">*</Text>
                </>
              }
              rules={[{ required: true, message: "Vui lòng chọn Quận/Huyện" }]}
            >
              <CustomSelect
                placeholder="Chọn Quận/Huyện"
                options={districts}
                disabled={sameAddress}
              />
            </Form.Item>

            <Form.Item
              name="ward"
              label={
                <>
                  Phường/Xã <Text type="danger">*</Text>
                </>
              }
              rules={[{ required: true, message: "Vui lòng chọn Phường/Xã" }]}
            >
              <CustomSelect
                placeholder="Chọn Phường/Xã"
                options={wards}
                disabled={sameAddress}
              />
            </Form.Item>

            <Form.Item
              name="detailedAddress"
              label={
                <>
                  Địa chỉ chi tiết <Text type="danger">*</Text>
                </>
              }
              rules={[
                { required: true, message: "Vui lòng nhập Địa chỉ chi tiết" },
              ]}
            >
              <CustomInput
                placeholder="Ví dụ: Số nhà, đường, tổ/ấp, khu phố…"
                disabled={sameAddress}
              />
            </Form.Item>
          </Panel>

          <Panel
            header={<Text strong>Nhập thông tin người tham chiếu</Text>}
            key="3"
          >
            <Form.Item name="refName" label="Họ tên">
              <CustomInput placeholder="Họ tên" />
            </Form.Item>

            <Form.Item name="refRelationship" label="Mối quan hệ">
              <CustomSelect
                placeholder="Chọn mối quan hệ"
                options={relationships}
              />
            </Form.Item>

            <Form.Item name="refPhone" label="Số điện thoại">
              <CustomInput placeholder="Số điện thoại" />
            </Form.Item>
          </Panel>

          <Panel
            header={<Text strong>Thông tin tài khoản Pay Later</Text>}
            key="4"
          >
            <Form.Item
              label={
                <>
                  Ngày sao kê hàng tháng <Text type="danger">*</Text>
                </>
              }
              name="statementDate"
              rules={[{ required: true, message: "Vui lòng chọn Ngày sao kê" }]}
            >
              <CustomRadioGroup
                options={[
                  { value: "01", label: "Ngày 01" },
                  { value: "11", label: "Ngày 11" },
                ]}
              />
            </Form.Item>

            <Text
              type="secondary"
              style={{ display: "block", marginBottom: 24 }}
            >
              (Ngày trả nợ là ngày sao kê + 5 ngày)
            </Text>

            <Divider style={{ margin: "0 0 24px" }} />

            <Form.Item
              label={
                <>
                  Hình thức nhận thông báo <Text type="danger">*</Text>
                </>
              }
              name="notificationMethods"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn ít nhất một hình thức",
                },
              ]}
            >
              <CustomCheckBoxGroup options={methods} />
            </Form.Item>

            <Text type="secondary" style={{ fontSize: 12 }}>
              * Trường email đang bỏ trống, bạn sẽ không nhận được thông báo
              giao dịch/sao kê qua hình thức này.
            </Text>
          </Panel>
        </Collapse>

        <Form.Item style={{ marginTop: 24, textAlign: "right" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#EC5176",
              color: "#ffffff",
              border: "none",
              borderRadius: 4,
              padding: "8px 16px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Gửi thông tin
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
