import { useState } from "react";

export const useStep = () => {
  const [step, setStep] = useState<number>(0);

  const goToPrevious = () => {
    setStep((prev) => prev - 1);
  };
  const goToNext = () => {
    setStep((prev) => prev + 1);
  };

  return {
    step,
    goToNext,
  };
};

export const useAnswer = () => {
  const [answerCount, setAnswerCount] = useState<number>(0);

  const increaseAnswerCount = () => {
    setAnswerCount((prev) => prev + 1);
  };

  return {
    answerCount,
    increaseAnswerCount,
  };
};
