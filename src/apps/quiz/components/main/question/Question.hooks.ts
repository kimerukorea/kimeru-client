import { useAnswerStore } from "@/apps/quiz/stores/answer/answer.store";
import { QuestionProps } from "./Question.types";
import { useCurrentQuestion } from "@/apps/quiz/hooks";

export const useCTAButton = ({
  showSolution,
}: Pick<QuestionProps, "showSolution">) => {
  const increaseAnswerCount = useAnswerStore(
    (state) => state.increaseAnswerCount
  );
  const currentQuestion = useCurrentQuestion();

  const { answerValue } = currentQuestion;

  const handleYesButtonClick = () => {
    if (answerValue) {
      increaseAnswerCount();
    }
    showSolution();
  };

  const handleNoButtonClick = () => {
    if (!answerValue) {
      increaseAnswerCount();
    }
    showSolution();
  };

  return {
    handleYesButtonClick,
    handleNoButtonClick,
  };
};
