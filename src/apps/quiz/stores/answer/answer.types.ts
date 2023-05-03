export type AnswerInitialState = {
  answerCount: number;
};

export interface AnswerState extends AnswerInitialState {
  increaseAnswerCount: VoidFunction;
  dispatchInitialize: VoidFunction;
}
