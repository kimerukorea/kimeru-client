import { useSurveyInfo } from "./useSurveyInfo";

export const useQuestionCount = () => {
  const { surveyInfo } = useSurveyInfo();

  return {
    questionCount: surveyInfo?.questionCount,
  };
};
