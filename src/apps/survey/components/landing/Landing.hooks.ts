import { useRouter } from "next/router";
import { useStepStore } from "../../stores/step";

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
    push("/survey-list");
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
