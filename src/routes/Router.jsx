export const RouterAddInfo = {
  // ADD INFO
  PERSONAL_INFO_FORM: "addInfo",
  PERSONAL_INFO_VIEW: "addInfoDetail",
};

export default {
  ONBOARDING: "onboarding",
  //VERIFY
  GENERAL_INFO: "generalInfo",
  ENTER_PASSWORD: "enterPassword",
  ENTER_OTP: "enterOtp",
  IDENTITY_UPLOAD: "identityUpload",
  IDENTITY_INFO: "identityInfo",
  FORGOT_PASSWORD: "forgotPassword",
  ENTER_OTP_FORGOT_PASS: "enterOtpForgotPass",
  ...RouterAddInfo,
};

export const RouteMatchers = {
  verify: /^\/onboarding\/verify.*$/,
  addInfo: /^\/onboarding\/addInfo.*$/,
};
