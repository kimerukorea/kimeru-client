import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { useGetQuizInfoQuery } from "../../queries";

export const useQuizInfo = () => {
  const { data } = useGetQuizInfoQuery();

  return { quizInfo: data! };
};

export const useStartButton = () => {
  const { goToNext } = useStepStore();

  const handleStartButtonClick = () => {
    goToNext();
  };

  return {
    handleStartButtonClick,
  };
};
