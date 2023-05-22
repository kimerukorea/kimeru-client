import { useMoveOtherPath } from "@/hooks";
import { useStepStore } from "@/stores";

export const useCTAButton = () => {
  const { onMoveOtherPath } = useMoveOtherPath({
    path: "/survey-list",
  });
  const onStartSurvey = useStartButton();

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

  return onStartSurvey;
};
