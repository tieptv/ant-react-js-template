import CustomInput from "@/components/base/CustomInput";
import { Button, Form } from "antd";

export default function OTPInput (){
    return (<Form.Item
        label={
          <span className="font-bold text-gray-700">
            Mã OTP <span className="text-red-500">*</span>
          </span>
        }
      >
        <div className="flex items-center gap-2">
          <CustomInput
            placeholder="Nhập mã OTP đã gửi tới số của bạn"
            className="flex-1"
          />
          <Button
            style={{ height: "50px", backgroundColor: "#EEDAE6" }}
            onClick={null}
          >
            <span className="text-[#AE2595] text-[14px] font-semibold">
              Gửi lại OTP
            </span>
          </Button>
        </div>
      </Form.Item>)
}