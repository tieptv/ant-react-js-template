import { Form } from "antd";
import OTPInput from "@/components/customer-verify/OTPInput";
import GeneralInfo from "@/components/customer-verify/GeneralInfo";

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
