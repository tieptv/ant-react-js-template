// OnboardingLayout.jsx
import React, { useState } from "react";
import { Steps, Badge, Input, Radio, Button, Popover } from "antd";
import "antd/dist/reset.css"; // AntD v5+ reset (or just "antd/dist/antd.css" if you’re on v4)
import { Outlet, useNavigate } from "react-router-dom";
import "./OnboardingLayout.css";
import { CheckOutlined } from "@ant-design/icons";
import LfvnIcon from "../../assets/icons/lfvn-icon.svg?react";
import VnTripIcon from "../../assets/icons/vntrip-logo.svg?react";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-[#ffb5c9] to-[#ffd9d6] ">
      {/* HEADER */}
      <header
        className="w-full bg-white px-6 py-4 flex justify-between items-center shadow-sm"
        style={{ position: "sticky", top: 0, zIndex: 1, display: "flex" }}
      >
        {/* Left Logo */}
        <VnTripIcon width={122} height={80} />
        <LfvnIcon width={118} height={80} />
      </header>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col md:flex-row justify-center px-6 py-8">
        {/* Sidebar (Purple Card) */}
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/7 mb-6 md:mb-0">
          <div className="bg-[#3A2D4C] text-white rounded-xl p-6">
            {/* Top Title */}
            <div className="text-center mb-4">
              <p className="text-sm">
                Thanh toán cho hóa đơn <br />
                <span className="font-semibold">“VNTRIP3348384”</span>
              </p>
            </div>
            {/* Dashed Divider */}
            <div className="border-t border-dashed border-purple-700 mb-6"></div>
            {/* Vertical Steps */}
            <ProgressSteps currentStep={2} />
            <div className="bottom-4 left-6 right-6 text-center text-xs mt-20 font-normal">
              <p>
                Xin vui lòng liên hệ số hotline: <br />
                <span className="text-pink-500 font-medium">1900-6866</span> để
                được hỗ trợ
              </p>
            </div>
          </div>
        </div>

        {/* Content (White Card with Form) */}
        <div className="w-full  h-full md:w-2/3 lg:w-1/2 ml-6">
          <Outlet />
        </div>
      </main>

      {/* Footer / Bottom Note (optional - shown in screenshot) */}
      <footer className="w-full bg-transparent px-6 py-6 text-center text-gray-700 text-sm">
        Dịch vụ Pay Later của LOTTE Finance là hình thức cho vay thanh toán mua
        hàng hoá nhanh chóng và tiện dụng. Chi tiết thông tin xin xem{" "}
        <a href="#" className="text-pink-600 underline">
          [tại đây].
        </a>
      </footer>
    </div>
  );
}

export function ProgressSteps({ initialStep = 0 }) {
  /**
   * initialStep = zero-based index of the step that starts “in-progress.”
   * You can pass <ProgressSteps initialStep={2} /> to start on “Phê duyệt,”
   * or leave it at the default (0) to start on “Xác thực.”
   */
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigate = useNavigate();

  const steps = [
    "Xác thực",
    "Bổ sung thông tin",
    "Phê duyệt",
    "Ký hợp đồng",
    "Thực hiện giao dịch",
  ];

  const stepPaths = [
    "/onboarding",
    "/onboarding/add-info",
    "/onboarding/approval",
    "/onboarding/contract",
    "/onboarding/execute",
  ];

  return (
    <div className="flex flex-col items-start">
      {steps.map((label, idx) => {
        // Determine each step’s “status”
        const status =
          idx < currentStep
            ? "completed"
            : idx === currentStep
            ? "in-progress"
            : "future";

        // Render dot or check-icon based on status
        let dot;
        if (status === "completed") {
          dot = (
            <div className="relative">
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                <CheckOutlined style={{ fontSize: 12, color: "white" }} />
              </div>
            </div>
          );
        } else if (status === "in-progress") {
          dot = <div className="h-4 w-4 rounded-full bg-secondary mt-1"></div>;
        } else {
          dot = <div className="h-4 w-4 rounded-full bg-[#554966] mt-1"></div>;
        }

        // Choose label color
        const labelColor =
          status === "completed" || status === "in-progress"
            ? "text-secondary"
            : "text-[#8F7A87]";

        return (
          <div
            key={idx}
            className="flex w-full flex-row items-start cursor-pointer"
            onClick={() => {
              setCurrentStep(idx);
              navigate(stepPaths[idx]);
            }}
          >
            {/* ==== ICON & CONNECTOR COLUMN ==== */}
            <div className="flex flex-col items-center w-6 mr-2">
              {dot}

              {/* Connector line below (except on last step) */}
              {idx < steps.length - 1 && (
                <div
                  className={`mt-1 w-0.5 ${
                    idx < currentStep ? "bg-pink-500 h-5" : "bg-gray-600 h-6"
                  }`}
                />
              )}
            </div>

            {/* ==== LABEL COLUMN ==== */}
            <div
              className={`flex-1 mt-0.5 text-base font-medium ${labelColor}`}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
