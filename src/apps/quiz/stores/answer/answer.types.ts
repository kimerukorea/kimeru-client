export type AnswerInitialState = {
  answerCount: number;
  averageAnswerCount: number;
};

export interface AnswerState extends AnswerInitialState {
  increaseAnswerCount: VoidFunction;
  dispatchInitialize: VoidFunction;
  calculateAverageAnswerCount: (
    averageAnswerCount: AnswerInitialState["averageAnswerCount"]
  ) => void;
}
