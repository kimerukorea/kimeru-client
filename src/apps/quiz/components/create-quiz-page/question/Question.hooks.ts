import { useMakeQuestionListMutation } from "@/apps/quiz/mutations/useMakeQuestionListMutation";
import { DEFAULT_QUESTION_LENGTH } from "@/apps/quiz/pages/CreateQuizPage.constants";
import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
import { PATH } from "@/constants/Supabase";
import { useInsertImageMutation } from "@/mutations/useInsertImage";
import { useToast } from "@chakra-ui/react";
import { omit } from "@toss/utils";
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
    answerValue,
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
  const handleAnswerValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatchMainQuestion("answerValue", e.currentTarget.checked);
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
    answerValue,
    handleAnswerValueChange,
  };
};

export const useCTAButton = () => {
  const toast = useToast();
  const [currentStep, goToPrevious, goToNext] = useCreateQuizStepStore(
    (state) => [state.currentStep, state.goToPrevious, state.goToNext]
  );

  const [mainQuestionList, quizId] = useCreateQuizStore((state) => [
    state.mainQuestionList,
    state.quizId,
  ]);

  const { makeQuestionListAction, isLoading } = useMakeQuestionListAction();

  const { title, descriptionExplanation, solutionExplanation } =
    mainQuestionList[currentStep - 1];

  const handlePreviousButtonClick = () => {
    goToPrevious();
  };
  const handleNextButtonClick = async () => {
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

    if (currentStep === DEFAULT_QUESTION_LENGTH) {
      await makeQuestionListAction();
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
    isLoading,
  };
};

const useMakeQuestionListAction = () => {
  const [mainQuestionList, quizId, dispatchMainQuestionWithStep] =
    useCreateQuizStore((state) => [
      state.mainQuestionList,
      state.quizId,
      state.dispatchMainQuestionWithStep,
    ]);

  const {
    mutateAsync: insertImageMutateAsync,
    isLoading: insertImageIsLoading,
  } = useInsertImageMutation();

  const {
    mutateAsync: makeQuestionListMutateAsync,
    isLoading: makeQuestionListIsLoading,
  } = useMakeQuestionListMutation();

  const makeQuestionListAction = async () => {
    await Promise.all(
      mainQuestionList.map(async (mainQuestion) => {
        if (mainQuestion.descriptionImageFile) {
          const descriptionImagePath =
            `quiz_${quizId}/q${mainQuestion.step}_description`.replaceAll(
              " ",
              ""
            );
          const descriptionImageUrl = `${PATH}/storage/v1/object/${descriptionImagePath}`;

          await insertImageMutateAsync({
            path: descriptionImageUrl,
            fileBody: mainQuestion.descriptionImageFile,
          });

          dispatchMainQuestionWithStep(
            "descriptionImageUrl",
            descriptionImageUrl,
            mainQuestion.step
          );
        }

        if (mainQuestion.solutionImageFile) {
          const solutionImagePath =
            `quiz_${mainQuestion.step}/q${mainQuestion.step}_solution`.replaceAll(
              " ",
              ""
            );
          const solutionImageUrl = `${PATH}/storage/v1/object/${solutionImagePath}`;

          await insertImageMutateAsync({
            path: solutionImagePath,
            fileBody: mainQuestion.solutionImageFile,
          });

          dispatchMainQuestionWithStep(
            "solutionImageUrl",
            solutionImageUrl,
            mainQuestion.step
          );
        }
      })
    );

    await makeQuestionListMutateAsync(
      useCreateQuizStore
        .getState()
        .mainQuestionList.map((mainQuestion) => ({
          ...mainQuestion,
          quizId: quizId!,
        }))
        .map((mainQuestion) =>
          omit(mainQuestion, ["descriptionImageFile", "solutionImageFile"])
        )
    );
  };

  return {
    makeQuestionListAction,
    isLoading: makeQuestionListIsLoading || insertImageIsLoading,
  };
};
