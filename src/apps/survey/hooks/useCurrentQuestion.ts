import { useStepStore } from "@/stores";
import { useSurveyMainListQuery } from "../queries/useSurveyMainListQuery";

export const useCurrentQuestion = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  const { data } = useSurveyMainListQuery();

  if (!data) {
    throw new Error();
  }

  const currentQuestion = data[currentStep - 1];

  return currentQuestion;
};
