import CustomInput from "@/components/base/CustomInput";
import GeneralInfo from "@/components/customer-verify/GeneralInfo";
import { Form, Typography } from "antd";

const { Link } = Typography;

export default function EnterPassword() {
  return (
    <>
      <GeneralInfo />
      <Form layout="vertical">
        <Form.Item
          label={
            <span className="font-normal text-gray-700">
              Nhập mật khẩu <span className="text-red-500">*</span>
            </span>
          }
        >
          <CustomInput placeholder="Nhập mật khẩu" />
        </Form.Item>
      </Form>
      <Link href="#" target="_blank">
        Quên mật khẩu
      </Link>
    </>
  );
}
