import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { StepInitialState, StepState } from "./step.types";

const initialState: StepInitialState = {
  currentStep: 0,
};

export const useStepStore = create(
  immer<StepState>((set) => ({
    ...initialState,
    goToNext: () => {
      set((state) => {
        state.currentStep = state.currentStep + 1;
      });
    },

    dispatchInitialize: () => set(initialState),
  }))
);
