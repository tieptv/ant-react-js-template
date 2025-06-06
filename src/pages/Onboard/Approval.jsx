import PageHeader from "@/components/onboarding/PageHeader";
import backgroundImage from "../../assets/images/background.png";
import { Radio } from "antd";
import { useState } from "react";
const plainOptions = ["Apple", "Pear", "Orange"];

export default function Approval() {
  const [value1, setValue1] = useState("Apple");
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  return (
    <div className="bg-white flex-1 min-h-[50vh] flex-col rounded-xl p-8 shadow-md">
      <PageHeader label="Phê duyệt" />
      <div className="items-center flex flex-col justify-center">
        <div className="mt-8 w-[522px] h-[214px] rounded-[20px] bg-gradient-to-tr bg-[linear-gradient(to_top_right,_#A32385,_#E5194C)]">
          <div
            className="bg-cover bg-center rounded-[20px] bg-no-repeat h-full w-full p-4 justify-center flex flex-col"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <span className="text-white font-bold">
              Hồ sơ của bạn đang được xử lý ...
            </span>
            {/* <LoadingSpinner size={70} /> */}
            <Radio.Group
              options={plainOptions}
              onChange={onChange1}
              value={value1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
