import ButtonBase from "@/components/base/ButtonBase";
import { useState } from "react";
import EnterPassword from "@/components/customer-verify/EnterPassword";
import CardLayout from "@/components/layout/CardLayout";
import CustomerVerify from "@/components/customer-verify/CustomerVerify";
import CreatePassword from "@/components/customer-verify/CreatePassword";
import EnterOTP from "@/components/customer-verify/EnterOTP";
import ForgotPassword from "@/components/customer-verify/ForgotPassword";
import IdentityComponent from "@/components/customer-verify/IdentityComponent";
import IdentityInfo from "@/components/customer-verify/IdentityInfo";
import CustomButton, { BUTTON_TYPE } from "@/components/base/CustomButton";
import { Typography } from "antd";

const { Link } = Typography;

const STEPS = {
  GENERAL_INFO: "GENERAL_INFO",
  ENTER_PASSWORD: "ENTER_PASSWORD",
  ENTER_OTP: "ENTER_OTP",
  CREATE_PASSWORD: "CREATE_PASSWORD",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  IDENTITY_UPLOAD: "IDENTITY_UPLOAD",
  IDENTITY_INFO: "IDENTITY_INFO",
};

const ORDER_STEPS = [
  STEPS.GENERAL_INFO,
  STEPS.ENTER_PASSWORD,
  STEPS.ENTER_OTP,
  STEPS.IDENTITY_UPLOAD,
  STEPS.IDENTITY_INFO
];

export function CustomerVerifyIndex() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < ORDER_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const backStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const renderStep = () => {
    switch (ORDER_STEPS[currentStep]) {
      case STEPS.GENERAL_INFO:
        return <CustomerVerify />;
      case STEPS.ENTER_PASSWORD:
        return <EnterPassword />;
      case STEPS.CREATE_PASSWORD:
        return <CreatePassword />;
      case STEPS.ENTER_OTP:
        return <EnterOTP isGeneral={false} />;
      case STEPS.FORGOT_PASSWORD:
        return <ForgotPassword />;
      case STEPS.IDENTITY_UPLOAD:
        return <IdentityComponent />;
      case STEPS.IDENTITY_INFO:
        return <IdentityInfo />;
      default:
        return <div>Empty</div>;
    }
  };

  const renderAction = () => {
    return (
      <div className="flex justify-between items-center border-t border-gray-300 pt-4">
        <Link className="!text-black">Hủy</Link>
        <div>
          <CustomButton title="Quay lại" type={BUTTON_TYPE.back} onClick={backStep} className="!mr-4"/>
          <CustomButton title="Tiếp tục" type={BUTTON_TYPE.next} onClick={nextStep} />
        </div>
      </div>
    );
  };

  return (
    <CardLayout title={"Thông tin khách hàng"} action={renderAction()}>
      {renderStep()}
    </CardLayout>
  );
}
