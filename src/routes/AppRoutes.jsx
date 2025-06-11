import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AppLayout from "../components/layout/AppLayout";
import OnboardingLayout from "@/components/layout/OnboardingLayout";
import XacThucEKYC from "@/pages/Onboard/XacThucEKYC";
import AddInfo from "@/pages/Onboard/AddInfo";
import Approval from "@/pages/Onboard/Approval";
import { CustomerVerifyIndex } from "@/pages/Onboard/CustomerVerify/Index";
import CustomerVerify from "@/pages/Onboard/CustomerVerify/CustomerVerify";
import EnterPassword from "@/pages/Onboard/CustomerVerify/EnterPassword";
import EnterOTP from "@/pages/Onboard/CustomerVerify/EnterOTP";
import IdentityComponent from "@/pages/Onboard/CustomerVerify/IdentityComponent";
import IdentityInfo from "@/pages/Onboard/CustomerVerify/IdentityInfo";
import Router from "./Router";
import ForgotPassword from "@/pages/Onboard/CustomerVerify/ForgotPassword";
import AdditionalInfoForm from "@/pages/Onboard/AddInfo/AddInfo";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path={Router.ONBOARDING} element={<OnboardingLayout />}>
        {/* <Route index element={<Onboarding />} /> */}

        <Route path="" element={<CustomerVerifyIndex />}>
          <Route
            index
            element={<Navigate to={Router.GENERAL_INFO} replace />}
          />

          {/* Verify Tab */}
          <Route path={Router.GENERAL_INFO} element={<CustomerVerify />} />
          <Route path={Router.ENTER_PASSWORD} element={<EnterPassword />} />
          <Route
            path={Router.ENTER_OTP}
            element={<EnterOTP isGeneral={true} />}
          />
          <Route
            path={Router.IDENTITY_UPLOAD}
            element={<IdentityComponent />}
          />
          <Route path={Router.IDENTITY_INFO} element={<IdentityInfo />} />
          <Route path={Router.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route
            path={Router.ENTER_OTP_FORGOT_PASS}
            element={<EnterOTP isGeneral={false} />}
          />
          {/* Verify Tab */}

          {/* Personal Info Tab */}
          <Route
            path={Router.PERSONAL_INFO_FORM}
            element={<AdditionalInfoForm />}
          />
          <Route
            path={Router.PERSONAL_INFO_VIEW}
            element={<AdditionalInfoForm />}
          />
          {/* Personal Info Tab */}
        </Route>

        <Route path="ekyc" element={<XacThucEKYC />} />

        {/* /onboarding/add-info */}
        <Route path="add-info" element={<AddInfo />} />

        {/* /onboarding/approval */}
        <Route path="approval" element={<Approval />} />

        {/* /onboarding/contract */}
        <Route path="contract" element={<AddInfo />} />

        {/* /onboarding/execute */}
        <Route path="execute" element={<AddInfo />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
