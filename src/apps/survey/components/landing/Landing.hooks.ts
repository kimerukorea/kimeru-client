import { useStepStore } from "@/stores";
import { useRouter } from "next/router";

export const useCTAButton = () => {
  const { onStartSurvey } = useStartButton();
  const { onMoveSurveyMain } = useMoveSurveyMainButton();

  return {
    onMoveSurveyMain,
    onStartSurvey,
  };
};

const useStartButton = () => {
  const { goToNext } = useStepStore();

  const onStartSurvey = () => {
    goToNext();
  };

  return { onStartSurvey };
};

const useMoveSurveyMainButton = () => {
  const { replace } = useRouter();

  const onMoveSurveyMain = () => {
    replace("/survey-list");
  };

  return { onMoveSurveyMain };
};
