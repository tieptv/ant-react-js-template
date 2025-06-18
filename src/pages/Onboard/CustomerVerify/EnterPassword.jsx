import CustomInput from "@/components/base/CustomInput";
import GeneralInfo from "@/components/customer-verify/GeneralInfo";
import Router from "@/routes/Router";
import { userOnboardingStore } from "@/stores/OnboardingStore";
import { Form, Typography } from "antd";
import { Link as RouterLink } from "react-router-dom";

const { Link } = Typography;

export default function EnterPassword() {
  const setVerify = userOnboardingStore((state) => state.setVerify)
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
      <Link onClick={() => setVerify("currentStep", Router.FORGOT_PASSWORD)}>
        <RouterLink to={`/${Router.ONBOARDING}/${Router.FORGOT_PASSWORD}`}>Quên mật khẩu</RouterLink>
      </Link>
    </>
  );
}
