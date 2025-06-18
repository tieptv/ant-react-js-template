export const RouterAddInfo = {
  // ADD INFO
  PERSONAL_INFO_FORM: "addInfo",
  PERSONAL_INFO_VIEW: "addInfoDetail",
};

export const RouterApproval = {
  APPROVAL: "approval",
};

export const RouterEsign = {
  APPROVAL: "esign",
};

export const RouterTransaction = {
  APPROVAL: "transaction",
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
  ...RouterApproval,
  ...RouterEsign,
  ...RouterTransaction,
};

export const RouteMatchers = {
  verify: /^\/onboarding\/verify.*$/,
  addInfo: /^\/onboarding\/addInfo.*$/,
  approval: /^\/onboarding\/approval.*$/,
  esign: /^\/onboarding\/esign.*$/,
  transaction: /^\/onboarding\/transaction.*$/,
};
