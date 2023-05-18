import { useStepStore } from "@/stores";
import { useSurveyMainListQuery } from "../queries/useSurveyMainListQuery";

export const useCurrentQuestion = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  const { data } = useSurveyMainListQuery();

  if (!data) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }

  const currentQuestion = data[currentStep - 1];

  return currentQuestion;
};
