import { useMakeFinalListMutation } from "@/apps/quiz/mutations/useMakeFinalListMutation";
import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
import { useToast } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export const useInput = () => {
  const [finalList, dispatchFinal] = useCreateQuizStore((state) => [
    state.finalList,
    state.dispatchFinal,
  ]);

  const handleMainTitleChange =
    (index: number): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      dispatchFinal("mainTitle", e.currentTarget.value, index);
    };
  const handleDescriptionExplanationChange =
    (index: number): ChangeEventHandler<HTMLTextAreaElement> =>
    (e) => {
      dispatchFinal("descriptionExplanation", e.currentTarget.value, index);
    };

  return {
    finalList,
    handleMainTitleChange,
    handleDescriptionExplanationChange,
  };
};

export const useCTAButton = () => {
  const toast = useToast();

  const finalList = useCreateQuizStore((state) => state.finalList);

  const { makeFinalListAction, isLoading, isSuccess } =
    useMakeFinalListAction();

  const handleSubmitButtonClick = async () => {
    if (
      finalList.some(
        ({ mainTitle, descriptionExplanation }) =>
          !mainTitle || !descriptionExplanation
      )
    ) {
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

    await makeFinalListAction();
  };

  return {
    handleSubmitButtonClick,
    isLoading,
    isSuccess,
  };
};

const useMakeFinalListAction = () => {
  const [finalList, quizId] = useCreateQuizStore((state) => [
    state.finalList,
    state.quizId,
  ]);

  const {
    mutateAsync: makeFinalListMutateAsync,
    isLoading: makeFinalListIsLoading,
    isSuccess,
  } = useMakeFinalListMutation();

  const makeFinalListAction = async () => {
    await makeFinalListMutateAsync(
      finalList.map((finalMetaData) => ({
        ...finalMetaData,
        quizId: quizId!,
      }))
    );
  };

  return {
    makeFinalListAction,
    isLoading: makeFinalListIsLoading,
    isSuccess,
  };
};
