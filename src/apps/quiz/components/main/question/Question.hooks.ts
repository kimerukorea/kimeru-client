import { useCurrentQuestion, useQuestionCount } from "@/apps/quiz/hooks";
import { useAnswerStore } from "@/apps/quiz/stores/answer/answer.store";
import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { useMemo } from "react";
import { QuestionProps } from "./Question.types";

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

export const useProgressValue = () => {
  const { questionCount } = useQuestionCount();

  const currentStep = useStepStore((state) => state.currentStep);

  const progressValue = useMemo(() => {
    return (currentStep / questionCount) * 100;
  }, [currentStep, questionCount]);

  return progressValue;
};
