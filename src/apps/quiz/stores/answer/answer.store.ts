import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AnswerInitialState, AnswerState } from "./answer.types";

const initialState: AnswerInitialState = {
  answerCount: 0,
};

export const useAnswerStore = create(
  immer<AnswerState>((set) => ({
    ...initialState,
    increaseAnswerCount: () => {
      set((state) => {
        state.answerCount = state.answerCount + 1;
      });
    },

    dispatchInitialize: () => set(initialState),
  }))
);
