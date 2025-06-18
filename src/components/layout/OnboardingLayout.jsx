// OnboardingLayout.jsx
import React, { useEffect, useState } from "react";
import "antd/dist/reset.css"; // AntD v5+ reset (or just "antd/dist/antd.css" if you’re on v4)
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./OnboardingLayout.css";
import { CheckOutlined } from "@ant-design/icons";
import LfvnIcon from "@/assets/icons/lfvn-icon.svg?react";
import VnTripIcon from "@/assets/icons/vntrip-logo.svg?react";
import { RouteMatchers } from "@/routes/Router";

const steps = [
  "Xác thực",
  "Bổ sung thông tin",
  "Phê duyệt",
  "Ký hợp đồng",
  "Thực hiện giao dịch",
];

const stepPaths = [
  "/onboarding",
  "/onboarding/addInfo",
  "/onboarding/approval",
  "/onboarding/esign",
  "/onboarding/transaction",
];

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
            <ProgressSteps initialStep={0} />
            <div className="bottom-4 left-6 right-6 text-center text-xs mt-20 font-normal">
              <p>
                Xin vui lòng liên hệ số hotline: <br />
                <span className="text-pink-500 font-medium">1900-6866</span> để
                được hỗ trợ
              </p>
            </div>
          </div>
        </div>
        {/* Content (White Card with Form) */}\
        <div className="w-6" />
        <div className="w-full h-full md:w-2/3 lg:w-1/2">
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
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname || "";

  useEffect(() => {
    let current = 0;

    if (RouteMatchers.verify.test(pathname)) {
      current = 0;
    } else if (RouteMatchers.addInfo.test(pathname)) {
      current = 1;
    } else if (RouteMatchers.approval.test(pathname)) {
      current = 2;
    } else if (RouteMatchers.esign.test(pathname)) {
      current = 3;
    } else if (RouteMatchers.transaction.test(pathname)) {
      current = 4;
    } else {
      current = 0;
    }

    setCurrentStep(current);
  }, [pathname]);
  const handleStepClick = (idx) => {
    if (animating || idx === currentStep) return;

    setAnimating(true);
    setCurrentStep(idx);
    navigate(stepPaths[idx]);

    // Reset animation after transition completes
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <div className="flex flex-col items-start">
      {steps.map((label, idx) => {
        const status =
          idx < currentStep
            ? "completed"
            : idx === currentStep
            ? "in-progress"
            : "future";

        let dot;
        if (status === "completed") {
          dot = (
            <div className="relative">
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ease-in-out">
                <CheckOutlined style={{ fontSize: 12, color: "white" }} />
              </div>
            </div>
          );
        } else if (status === "in-progress") {
          dot = (
            <div className="relative">
              <div className="absolute inset-0 bg-pink-300 rounded-full animate-ping opacity-75"></div>
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center relative z-10"></div>
            </div>
          );
        } else {
          dot = (
            <div className="h-4 w-4 rounded-full bg-[#554966] mt-1 transition-all duration-300 ease-in-out"></div>
          );
        }

        const labelColor =
          status === "completed" || status === "in-progress"
            ? "text-secondary"
            : "text-[#8F7A87]";

        return (
          <div
            key={idx}
            className={`flex w-full flex-row items-start cursor-pointer transition-all duration-500 ease-in-out ${
              animating ? "pointer-events-none" : ""
            }`}
            onClick={() => handleStepClick(idx)}
          >
            {/* ==== ICON & CONNECTOR COLUMN ==== */}
            <div className="flex flex-col items-center w-6 mr-2">
              {dot}

              {/* Connector line below (except on last step) */}
              {idx < steps.length - 1 && (
                <div
                  className={`mt-1 w-0.5 transition-all duration-500 ease-in-out ${
                    idx < currentStep ? "bg-pink-500 h-5" : "bg-gray-600 h-6"
                  }`}
                />
              )}
            </div>

            {/* ==== LABEL COLUMN ==== */}
            <div
              className={`flex-1 mt-0.5 text-base font-medium ${labelColor} transition-colors duration-300`}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
