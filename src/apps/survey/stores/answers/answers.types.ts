export type AnswersInitialState = {
  answers: string[];
};

export interface AnswersState extends AnswersInitialState {
  setAnswers: (answer: string) => void;
  dispatchInitialize: VoidFunction;
}
