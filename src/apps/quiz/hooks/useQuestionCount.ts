import { useQuizInfo } from "./useQuizInfo";

export const useQuestionCount = () => {
  const { quizInfo } = useQuizInfo();

  return {
    questionCount: quizInfo.questionCount,
  };
};
