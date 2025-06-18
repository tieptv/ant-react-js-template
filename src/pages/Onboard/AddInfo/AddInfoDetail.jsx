import InfoView from "@/components/onboarding/InfoView";
import React from "react";
import { dataGeneral, dataEmp, dataCutru } from "./data";

const AddInfoDetail = () => {
  return (
    <div>
      <InfoView title="Thông tin chung" data={dataGeneral} rowNumber={2} />
      <InfoView
        title="Thông tin nhân thân"
        data={dataEmp}
        isFullWidth={false}
      />
      <InfoView
        title="Thông tin cư trú"
        data={dataCutru}
        isFullWidth={false}
        nonBorder
      />
    </div>
  );
};

export default AddInfoDetail;
