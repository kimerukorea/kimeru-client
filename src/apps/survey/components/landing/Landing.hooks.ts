import { useMoveOtherPath } from "@/hooks";
import { useStepStore } from "@/stores";

export const useCTAButton = () => {
  const { onStartSurvey } = useStartButton();
  const { onMoveOtherPath } = useGoMainPageButton();

  return {
    onMoveOtherPath,
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

const useGoMainPageButton = () => {
  const { onMoveOtherPath } = useMoveOtherPath({
    path: "/survey-list",
  });

  return { onMoveOtherPath };
};
