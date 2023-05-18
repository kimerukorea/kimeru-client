import { useSurveyListById } from "./useSurveyListById";

export const useQuestionCount = () => {
  const { surveyListById } = useSurveyListById();

  return {
    questionCount: surveyListById?.questionCount,
  };
};
