import InfoView from "@/components/onboarding/InfoView";
import React from "react";
import { dataGeneral } from "./data";

const AddInfoDetail = () => {
  return (
    <div>
      <InfoView title="Thông tin chung" data={dataGeneral} rowNumber={2} />
    </div>
  );
};

export default AddInfoDetail;
