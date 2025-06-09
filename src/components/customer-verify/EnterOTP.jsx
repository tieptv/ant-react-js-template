import { Form } from "antd";
import GeneralInfo from "./general/GeneralInfo";
import OTPInput from "./general/OTPInput";

export default function EnterOTP({isGeneral = true}) {
  return (
    <Form layout="vertical">
      {isGeneral ? <GeneralInfo /> : <div className="text-[#EC5176] font-bold mb-[20px]">
        Nhập mã OTP
      </div>}
      <OTPInput/>
    </Form>
  );
}
