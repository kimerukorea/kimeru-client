import { DEFAULT_QUESTION_LENGTH } from "@/apps/quiz/pages/CreateQuizPage.constants";
import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
import { useToast } from "@chakra-ui/react";
import { ChangeEventHandler, useMemo } from "react";

export const useProgressValue = () => {
  const currentStep = useCreateQuizStepStore((state) => state.currentStep);

  const progressValue = useMemo(() => {
    return (currentStep / DEFAULT_QUESTION_LENGTH) * 100;
  }, [currentStep]);

  return progressValue;
};

export const useInput = () => {
  const currentStep = useCreateQuizStepStore((state) => state.currentStep);

  const [mainQuestionList, dispatchMainQuestion] = useCreateQuizStore(
    (state) => [state.mainQuestionList, state.dispatchMainQuestion]
  );

  const {
    title,
    descriptionExplanation,
    solutionExplanation,
    descriptionImageFile,
    solutionImageFile,
  } = mainQuestionList[currentStep - 1];

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatchMainQuestion("title", e.currentTarget.value);
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    dispatchMainQuestion("descriptionExplanation", e.currentTarget.value);
  };
  const handleSolutionChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    dispatchMainQuestion("solutionExplanation", e.currentTarget.value);
  };

  const handleDescriptionImageChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) {
      dispatchMainQuestion("descriptionImageFile", null);
      return;
    }
    dispatchMainQuestion("descriptionImageFile", e.target.files[0]);
  };
  const handleSolutionImageChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) {
      dispatchMainQuestion("solutionImageFile", null);
      return;
    }
    dispatchMainQuestion("solutionImageFile", e.target.files[0]);
  };

  return {
    title,
    handleTitleChange,
    descriptionExplanation,
    handleDescriptionChange,
    descriptionImageFile,
    handleDescriptionImageChange,
    solutionExplanation,
    handleSolutionChange,
    solutionImageFile,
    handleSolutionImageChange,
  };
};

export const useCTAButton = () => {
  const toast = useToast();
  const [currentStep, goToPrevious, goToNext] = useCreateQuizStepStore(
    (state) => [state.currentStep, state.goToPrevious, state.goToNext]
  );

  const [mainQuestionList, dispatchMainQuestion] = useCreateQuizStore(
    (state) => [state.mainQuestionList, state.dispatchMainQuestion]
  );

  const { title, descriptionExplanation, solutionExplanation } =
    mainQuestionList[currentStep - 1];

  const handlePreviousButtonClick = () => {
    goToPrevious();
  };
  const handleNextButtonClick = () => {
    if (!title || !descriptionExplanation || !solutionExplanation) {
      toast({
        title: "필수 항목을 작성해주세요.",
        description: "필수 항목은 빨간색 * 표시가 있어요.",
        status: "error",
        duration: 2000,
        containerStyle: {
          width: "100vw",
        },
      });

      return;
    }

    goToNext();
  };

  const previousButtonText = useMemo(() => {
    if (currentStep === 1) {
      return "이전 페이지";
    }
    return "이전 문제";
  }, [currentStep]);
  const nextButtonText = useMemo(() => {
    if (currentStep === DEFAULT_QUESTION_LENGTH) {
      return "문제 결과값 설정";
    }
    return "다음 문제";
  }, [currentStep]);

  return {
    handlePreviousButtonClick,
    handleNextButtonClick,
    previousButtonText,
    nextButtonText,
  };
};
