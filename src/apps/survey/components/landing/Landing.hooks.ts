import { useMoveOtherContents } from "@/hooks";
import { useStepStore } from "@/stores";

export const useCTAButton = () => {
  const { onMoveOtherContents } = useMoveOtherContents("/survey-list");
  const onStartSurvey = useStartButton();

  return {
    onMoveOtherContents,
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
