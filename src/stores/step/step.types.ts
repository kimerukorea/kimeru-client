export interface StepInitialState {
  currentStep: number;
}

export interface StepState extends StepInitialState {
  goToNext: VoidFunction;
  dispatchInitialize: VoidFunction;
}
