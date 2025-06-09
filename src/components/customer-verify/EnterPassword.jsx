import CustomInput from "@/components/base/CustomInput";
import { Form, Typography } from "antd";
import EnterOTP from "./EnterOTP";
import GeneralInfo from "./general/GeneralInfo";

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
