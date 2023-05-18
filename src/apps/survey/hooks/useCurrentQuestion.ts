import { useSurveyMainListQuery } from "../queries/useSurveyMainListQuery";
import { useStepStore } from "../stores/step";

export const useCurrentQuestion = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  const { data } = useSurveyMainListQuery();

  if (!data) {
    throw new Error();
  }

  const currentQuestion = data[currentStep - 1];

  return currentQuestion;
};
