import { BUTTON_TYPE } from "@/components/base/CustomButton";
import CardLayout from "@/components/layout/CardLayout";
import React from "react";
import { Outlet } from "react-router-dom";

const AddInfoIndex = () => {
  const backStep = () => {};
  const nextStep = () => {};
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
    <CardLayout action={renderActionView}>
      <Outlet />
    </CardLayout>
  );
};

export default AddInfoIndex;
