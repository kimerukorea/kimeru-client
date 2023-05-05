import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  CreateQuizStepInitialState,
  CreateQuizStepState,
} from "./createQuizStep.types";

const initialState: CreateQuizStepInitialState = {
  currentStep: 0,
};

export const useCreateQuizStepStore = create(
  immer<CreateQuizStepState>((set) => ({
    ...initialState,
    goToPrevious: () => {
      set((state) => {
        state.currentStep = state.currentStep - 1;
      });
    },
    goToNext: () => {
      set((state) => {
        state.currentStep = state.currentStep + 1;
      });
    },

    dispatchInitialize: () => set(initialState),
  }))
);
