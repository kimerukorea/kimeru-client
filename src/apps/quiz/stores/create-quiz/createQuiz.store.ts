import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useCreateQuizStepStore } from "../create-quiz-step/createQuizStep.store";
import { CreateQuizInitialState, CreateQuizState } from "./createQuiz.types";

const initialState: CreateQuizInitialState = {
  quizId: null,
  quizMetaData: {
    name: "",
    description: "",
    thumbnailImageUrl: "",
    thumbnailImageFile: null,
  },
  mainQuestionList: [...Array(10)].map((_, index) => ({
    step: index + 1,
    title: "",
    descriptionExplanation: "",
    solutionExplanation: "",
    descriptionImageFile: null,
    solutionImageFile: null,
    answerValue: false,
  })),
  finalList: [...Array(3)].map((_, index) => ({
    mainTitle: "",
    descriptionExplanation: "",
    maxRange: (index + 1) * 3 + 1,
  })),
};

export const useCreateQuizStore = create(
  immer<CreateQuizState>((set) => ({
    ...initialState,
    dispatchMetaData: (key, value) => {
      set((state) => {
        state.quizMetaData[key] = value;
      });
    },
    dispatchQuizId: (value) => {
      set((state) => {
        state.quizId = value;
      });
    },
    dispatchMainQuestion: (key, value) => {
      set((state) => {
        state.mainQuestionList[
          useCreateQuizStepStore.getState().currentStep - 1
        ][key] = value;
      });
    },
    dispatchMainQuestionWithStep: (key, value, step) => {
      set((state) => {
        state.mainQuestionList[step - 1][key] = value;
      });
    },
    dispatchFinal: (key, value, index) => {
      set((state) => {
        state.finalList[index][key] = value;
      });
    },
  }))
);
