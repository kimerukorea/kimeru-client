export interface CreateQuizStepInitialState {
  currentStep: number;
}

export interface CreateQuizStepState extends CreateQuizStepInitialState {
  goToPrevious: VoidFunction;
  goToNext: VoidFunction;
  dispatchInitialize: VoidFunction;
}
