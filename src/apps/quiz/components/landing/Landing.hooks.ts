import { useStepStore } from "@/apps/quiz/stores/step/step.store";

export const useStartButton = () => {
  const { goToNext } = useStepStore();

  const handleStartButtonClick = () => {
    goToNext();
  };

  return {
    handleStartButtonClick,
  };
};
