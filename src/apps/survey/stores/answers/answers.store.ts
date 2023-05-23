import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AnswersInitialState, AnswersState } from "./answers.types";

const initialState: AnswersInitialState = {
  answers: [],
};

export const useAnswersStore = create(
  immer<AnswersState>((set) => ({
    ...initialState,

    setAnswers: (answer) =>
      set((state) => ({
        answers: [...state.answers, answer],
      })),

    dispatchInitialize: () => set(initialState),
  }))
);
