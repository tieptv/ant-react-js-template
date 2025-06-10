import CustomInput from "@/components/base/CustomInput";
import { Form } from "antd";

export default function RepeatPasswordInput({ isNew = false }) {
  return (
    <Form layout="vertical">
      <Form.Item
        label={
          <span className="font-normal text-gray-700">
            {`Nhập mật khẩu ${isNew ? "mới" : ""}`}
            <span className="text-red-500">*</span>
          </span>
        }
      >
        <CustomInput placeholder={`Nhập mật khẩu ${isNew ? "mới" : ""}`} />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-normal text-gray-700">
            {`Nhập lại mật khẩu ${isNew ? "mới" : ""}`}{" "}
            <span className="text-red-500">*</span>
          </span>
        }
      >
        <CustomInput placeholder={`Nhập mật khẩu ${isNew ? "mới" : ""}`} />
      </Form.Item>
    </Form>
  );
}
