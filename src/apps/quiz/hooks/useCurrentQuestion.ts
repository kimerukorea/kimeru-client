import { useStepStore } from "@/stores";
import { useGetQuizMainQuery } from "../queries/useGetQuizMainQuery";

export const useCurrentQuestion = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  const { data } = useGetQuizMainQuery();

  if (!data) {
    throw new Error();
  }

  const currentQuestion = data[currentStep - 1];

  return currentQuestion;
};
