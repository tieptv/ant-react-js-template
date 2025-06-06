// src/AdditionalInfoForm.jsx
import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  Collapse,
  Divider,
  Typography,
} from "antd";
import "./AddInfo.css";

const { Panel } = Collapse;
const { Title, Text } = Typography;
const { Option } = Select;

export default function AdditionalInfoForm() {
  const [form] = Form.useForm();
  const [sameAddress, setSameAddress] = useState(false);

  // Handle the “Địa chỉ hiện tại trùng…” checkbox
  const onSameAddressChange = (e) => {
    setSameAddress(e.target.checked);
    if (e.target.checked) {
      // If “sameAddress” is checked, clear or disable the residence fields
      form.setFieldsValue({
        province: undefined,
        district: undefined,
        ward: undefined,
        detailedAddress: "",
      });
    }
  };

  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* ====== Form Title ====== */}
      <Title level={4} style={{ marginBottom: 0 }}>
        Bổ sung thông tin
      </Title>
      <Divider style={{ margin: "8px 0 24px" }} />

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
          {/* ================================
              Panel 1: Nhập thông tin nhân thân
             ================================ */}
          <Panel header={<Text strong>Nhập thông tin nhân thân</Text>} key="1">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập Email" },
                { type: "email", message: "Địa chỉ Email không hợp lệ" },
              ]}
            >
              {/* <Input placeholder="Nhập Email" /> */}
              <Input
                addonBefore={
                  <span className="bg-white text-gray-800">Email</span>
                }
              />
            </Form.Item>

            <Form.Item name="oldIdNumber">
              <Input placeholder="Số CMND/CCCD cũ" />
            </Form.Item>

            <Form.Item
              name="occupation"
              label={
                <>
                  Nghề nghiệp&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn Nghề nghiệp",
                },
              ]}
            >
              <Select placeholder="Chọn nghề nghiệp">
                <Option value="employee">Nhân viên</Option>
                <Option value="self-employed">Tự do</Option>
                <Option value="student">Sinh viên</Option>
                {/* Thêm tùy chọn khác nếu cần */}
              </Select>
            </Form.Item>

            <Form.Item
              name="position"
              label={
                <>
                  Chức vụ&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn Chức vụ",
                },
              ]}
            >
              <Select placeholder="Chọn chức vụ">
                <Option value="manager">Quản lý</Option>
                <Option value="staff">Nhân viên</Option>
                <Option value="director">Giám đốc</Option>
                {/* Thêm tùy chọn khác nếu cần */}
              </Select>
            </Form.Item>
          </Panel>

          {/* ================================
              Panel 2: Nhập thông tin cư trú
             ================================ */}
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
                  Tỉnh/Thành phố&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn Tỉnh/Thành phố",
                },
              ]}
            >
              <Select placeholder="Chọn Tỉnh/Thành phố" disabled={sameAddress}>
                <Option value="hanoi">Hà Nội</Option>
                <Option value="hochiminh">TP. Hồ Chí Minh</Option>
                <Option value="danang">Đà Nẵng</Option>
                {/* Thêm các tỉnh/thành khác */}
              </Select>
            </Form.Item>

            <Form.Item
              name="district"
              label={
                <>
                  Quận/Huyện&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn Quận/Huyện",
                },
              ]}
            >
              <Select placeholder="Chọn Quận/Huyện" disabled={sameAddress}>
                <Option value="ba-dinh">Ba Đình</Option>
                <Option value="dong-da">Đống Đa</Option>
                <Option value="hai-ba-trung">Hai Bà Trưng</Option>
                {/* Thêm các quận/huyện khác */}
              </Select>
            </Form.Item>

            <Form.Item
              name="ward"
              label={
                <>
                  Phường/Xã&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn Phường/Xã",
                },
              ]}
            >
              <Select placeholder="Chọn Phường/Xã" disabled={sameAddress}>
                <Option value="phuong-linh-dien">Phường Linh Điền</Option>
                <Option value="phuong-linh-trung">Phường Linh Trung</Option>
                <Option value="phuong-linh-xuan">Phường Linh Xuân</Option>
                {/* Thêm các phường/xã khác */}
              </Select>
            </Form.Item>

            <Form.Item
              name="detailedAddress"
              label={
                <>
                  Địa chỉ chi tiết&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Địa chỉ chi tiết",
                },
              ]}
            >
              <Input
                placeholder="Ví dụ: Số nhà, đường, tổ/ấp, khu phố…"
                disabled={sameAddress}
              />
            </Form.Item>
          </Panel>

          {/* =================================
              Panel 3: Nhập thông tin người tham chiếu
             ================================= */}
          <Panel
            header={<Text strong>Nhập thông tin người tham chiếu</Text>}
            key="3"
          >
            <Form.Item name="refName" label="Họ tên">
              <Input placeholder="Họ tên" />
            </Form.Item>

            <Form.Item name="refRelationship" label="Mối quan hệ">
              <Select placeholder="Chọn mối quan hệ">
                <Option value="father">Cha</Option>
                <Option value="mother">Mẹ</Option>
                <Option value="friend">Bạn bè</Option>
                <Option value="spouse">Vợ/Chồng</Option>
                {/* Thêm các tùy chọn khác */}
              </Select>
            </Form.Item>

            <Form.Item name="refPhone" label="Số điện thoại">
              <Input placeholder="Số điện thoại" />
            </Form.Item>
          </Panel>

          {/* ======================================
              Panel 4: Thông tin tài khoản Pay Later
             ====================================== */}
          <Panel
            header={<Text strong>Thông tin tài khoản Pay Later</Text>}
            key="4"
          >
            <Form.Item
              label={
                <>
                  Ngày sao kê hàng tháng&nbsp;
                  <Text type="danger">*</Text>
                </>
              }
              name="statementDate"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn Ngày sao kê",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="01">Ngày 01</Radio>
                <Radio value="11">Ngày 11</Radio>
              </Radio.Group>
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
                  Hình thức nhận thông báo&nbsp;
                  <Text type="danger">*</Text>
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
              <Checkbox.Group>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <Checkbox value="sms">SMS</Checkbox>
                  <Checkbox value="email">Email</Checkbox>
                  <Checkbox value="lottef">Lotte F</Checkbox>
                </div>
              </Checkbox.Group>
            </Form.Item>

            <Text type="secondary" style={{ fontSize: 12 }}>
              * Trường email đang bỏ trống, bạn sẽ không nhận được thông báo
              giao dịch/sao kê qua hình thức này.
            </Text>
          </Panel>
        </Collapse>

        {/* =======================
            (Optional) Submit Button
           ======================= */}
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
