import CardLayout from "@/components/layout/CardLayout";
import CustomButton, { BUTTON_TYPE } from "@/components/base/CustomButton";
import { Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { RouterAddInfo } from "@/routes/Router";
import { useEffect, useState } from "react";

const { Link } = Typography;

const mapStep = new Map([
  [RouterAddInfo.PERSONAL_INFO_FORM, RouterAddInfo.PERSONAL_INFO_VIEW],
]);
const AddInfoIndex = () => {
  const [currentStep, setCurrentStep] = useState(
    RouterAddInfo.PERSONAL_INFO_FORM
  );
  const navigate = useNavigate();

  useEffect(() => {
    navigate(currentStep);
  }, [currentStep, navigate]);

  const nextStep = () => {
    const nextStep = mapStep.get(currentStep);
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  const backStep = () => {
    const previousStep = mapStep
      .keys()
      .find((item) => mapStep.get(item) === currentStep);
    if (previousStep) {
      setCurrentStep(previousStep);
    }
  };
  const renderActionView = () => {
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
    <CardLayout title={"Thông tin khách hàng"} action={renderActionView()}>
      <Outlet />
    </CardLayout>
  );
};

export default AddInfoIndex;
