import Router from "@/routes/Router";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const userOnboardingStore = create(
  immer((set) => ({
    data: {
      verify: {
        currentStep: Router.GENERAL_INFO,
      },
    },
    setVerify: (field, obj) =>
      set((state) => {
        state.data.verify[field] = obj;
      }),
  }))
);
