import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AppLayout from "../components/layout/AppLayout";
import OnboardingLayout from "@/components/layout/OnboardingLayout";
import XacThuc from "@/pages/Onboard/XacThuc";
import XacThucEKYC from "@/pages/Onboard/XacThucEKYC";
import AddInfo from "@/pages/Onboard/AddInfo";

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
      <Route path="/onboarding" element={<OnboardingLayout />}>
        {/* <Route index element={<Onboarding />} /> */}

        <Route index element={<XacThuc />} />

        {/* /onboarding/ekyc */}
        <Route path="ekyc" element={<XacThucEKYC />} />

        {/* /onboarding/add-info */}
        <Route path="add-info" element={<AddInfo />} />

        {/* /onboarding/approval */}
        <Route path="approval" element={<AddInfo />} />

        {/* /onboarding/contract */}
        <Route path="contract" element={<AddInfo />} />

        {/* /onboarding/execute */}
        <Route path="execute" element={<AddInfo />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
