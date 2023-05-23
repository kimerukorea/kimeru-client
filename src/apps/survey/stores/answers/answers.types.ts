export type AnswersInitialState = {
  answers: number[];
};

export interface AnswersState extends AnswersInitialState {
  setAnswers: (answer: number) => void;
  dispatchInitialize: VoidFunction;
}
