import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { useRouter } from "next/router";

export const useCTAButton = () => {
  const handleGoMainPageButtonClick = useGoMainPageButton();
  const handleStartButtonClick = useStartButton();

  return {
    handleGoMainPageButtonClick,
    handleStartButtonClick,
  };
};

const useGoMainPageButton = () => {
  const { push } = useRouter();

  const handleGoMainPageButtonClick = () => {
    push("/");
  };

  return handleGoMainPageButtonClick;
};

const useStartButton = () => {
  const { goToNext } = useStepStore();

  const handleStartButtonClick = () => {
    goToNext();
  };

  return handleStartButtonClick;
};
