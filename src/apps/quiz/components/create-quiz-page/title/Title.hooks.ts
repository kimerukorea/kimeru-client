import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";

export const useInput = () => {
  const [quizMetaData, dispatchMetaDataText] = useCreateQuizStore((state) => [
    state.quizMetaData,
    state.dispatchMetaDataText,
  ]);

  const { name, description } = quizMetaData;

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatchMetaDataText("name", e.currentTarget.value);
  };
  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    dispatchMetaDataText("description", e.currentTarget.value);
  };

  return {
    name,
    description,
    handleNameChange,
    handleDescriptionChange,
  };
};

export const useCTAButton = () => {
  const handleGoMainPageButtonClick = useGoMainPageButton();
  const handleNextButtonClick = useNextButton();

  return {
    handleGoMainPageButtonClick,
    handleNextButtonClick,
  };
};

const useGoMainPageButton = () => {
  const { push } = useRouter();

  const handleGoMainPageButtonClick = () => {
    push("/");
  };

  return handleGoMainPageButtonClick;
};

const useNextButton = () => {
  const { goToNext } = useCreateQuizStepStore();

  const handleNextButtonClick = () => {
    goToNext();
  };

  return handleNextButtonClick;
};

const useMakeQuizAction = () => {};
