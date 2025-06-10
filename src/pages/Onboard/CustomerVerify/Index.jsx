import { useEffect, useState } from "react";
import CardLayout from "@/components/layout/CardLayout";
import CustomButton, { BUTTON_TYPE } from "@/components/base/CustomButton";
import { Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Router from "@/routes/Router";
import { userOnboardingStore } from "@/stores/OnboardingStore";

const { Link } = Typography;

const mapStep = new Map([
  [Router.GENERAL_INFO, Router.ENTER_PASSWORD],
  [Router.ENTER_PASSWORD, Router.ENTER_OTP],
  [Router.ENTER_OTP, Router.IDENTITY_UPLOAD],
  [Router.IDENTITY_UPLOAD, Router.IDENTITY_INFO],
  [Router.FORGOT_PASSWORD, Router.ENTER_OTP_FORGOT_PASS],
]);

export function CustomerVerifyIndex() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const verifyData = userOnboardingStore((state) => state.data.verify)
  const setVerify = userOnboardingStore((state) => state.setVerify)

  useEffect(() => {
    navigate(verifyData.currentStep)
  }, [verifyData.currentStep])

  const nextStep = () => {
    const nextStep = mapStep.get(verifyData.currentStep)
    if (nextStep) {
      setVerify("currentStep", nextStep)
    }
  };

  const backStep = () => {
    const previousStep = mapStep.keys().find(item => mapStep.get(item) === verifyData.currentStep)
    if (previousStep) {
      setVerify("currentStep", previousStep)
    }
  };

  const renderAction = () => {
    return (
      <div className="flex justify-between items-center border-t border-gray-300 pt-4">
        <Link className="!text-black">Hủy</Link>
        <div>
          <CustomButton
            title="Quay lại"
            type={BUTTON_TYPE.back}
            onClick={backStep}
            className="!mr-4"
          />
          <CustomButton
            title="Tiếp tục"
            type={BUTTON_TYPE.next}
            onClick={nextStep}
          />
        </div>
      </div>
    );
  };

  return (
    <CardLayout title={"Thông tin khách hàng"} action={renderAction()}>
      <Outlet />
    </CardLayout>
  );
}
