import PageHeader from "@/components/onboarding/PageHeader";
import CustomButton, { BUTTON_TYPE } from "@/components/base/CustomButton";
import { LfvnCard } from "./Approval/Approval";
import { Checkbox, Form } from "antd";
import CustomRadioGroup from "@/components/base/CustomRadioGroup";
import TableTransaction from "@/components/onboarding/TableTransaction";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Transaction() {
  const [isActive, setActive] = useState(false);
  return (
    <div className="bg-white flex-1 flex-col rounded-xl p-8 shadow-md">
      <PageHeader label="Phê duyệt" />
      <div className="flex items-center justify-center py-8 flex-col flex-1">
        <LfvnCard logo>
          <div className="flex  flex-1 flex-col w-full h-full items-center">
            <span className="font-bold text-white text-sm">
              Thanh toán cho hoá đơn "VNTRIP3348384"
            </span>
            <span className="font-bold text-white text-[40px]">
              1.500.000 VND
            </span>
          </div>
        </LfvnCard>
        <Form layout="horizontal">
          <Form.Item
            label={
              <span className="font-bold text-text-default">
                Loại giấy tờ tùy thân: *
              </span>
            }
          >
            <CustomRadioGroup
              defaultValue={"cccd"}
              options={[
                { value: "cmnd", label: "CMND" },
                { value: "cccd", label: "CCCD" },
              ]}
            />
          </Form.Item>
        </Form>
        <div className="w-full">
          <div className="px-4 max-w-3xl mx-auto ">
            <div className="py-4 w-full flex flex-row items-center justify-between border-t border-b border-gray-200">
              <span className="text-text-200 font-bold text-sm">
                Số kỳ trả góp *
              </span>
              <div className="flex flex-row">
                <CustomButton
                  shape="round"
                  type={isActive ? BUTTON_TYPE.active : BUTTON_TYPE.inactive}
                  onClick={() => setActive(!isActive)}
                  title={"2 kỳ"}
                />
                <div className="w-2" />
                <CustomButton
                  shape="round"
                  type={!isActive ? BUTTON_TYPE.active : BUTTON_TYPE.inactive}
                  title={"3 kỳ"}
                  onClick={() => setActive(!isActive)}
                />
              </div>
            </div>
          </div>
          <TableTransaction
            tableLabel={["#", "Ngày đến hạn", "Số tiền(VND)"]}
          />
        </div>

        <Checkbox
          className="text-text-default"
          style={{ fontSize: 14, marginTop: 10, marginBottom: 10 }}
        >
          Tôi đồng ý nhận nợ ngay khi đơn hàng được thanh toán
        </Checkbox>
      </div>

      <div className="flex justify-between items-center border-t border-gray-300 pt-4">
        <Link className="!text-black">Hủy</Link>
        <div>
          <CustomButton title="Tôi đồng ý" type={"next"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
