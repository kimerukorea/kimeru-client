import { useGetSurveyMainQuery } from "../queries/useGetSurveyMainQuery";
import { useStepStore } from "../stores/step";

export const useCurrentQuestion = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  const { data } = useGetSurveyMainQuery();

  if (!data) {
    throw new Error();
  }

  const currentQuestion = data[currentStep - 1];

  return currentQuestion;
};
