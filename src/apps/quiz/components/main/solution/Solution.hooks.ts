import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { SolutionProps } from "./Solution.types";

export const useCTAButton = ({
  hideSolution,
}: Pick<SolutionProps, "hideSolution">) => {
  const goToNext = useStepStore((state) => state.goToNext);

  const handleNextQuestionButtonClick = () => {
    hideSolution();
    goToNext();
  };

  return {
    handleNextQuestionButtonClick,
  };
};
