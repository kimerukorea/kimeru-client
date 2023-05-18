import { useMakeQuizMutation } from "@/apps/quiz/mutations/useMakeQuizMutation";
import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
import { PATH } from "@/constants/Supabase";
import { useInsertImageMutation } from "@/mutations/useInsertImage";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEventHandler, useCallback } from "react";

export const useInput = () => {
  const [quizMetaData, dispatchMetaData] = useCreateQuizStore((state) => [
    state.quizMetaData,
    state.dispatchMetaData,
  ]);

  const { name, description, thumbnailImageFile } = quizMetaData;

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatchMetaData("name", e.currentTarget.value);
  };
  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    dispatchMetaData("description", e.currentTarget.value);
  };

  const handleThumbnailImageChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (!e.target.files) {
          dispatchMetaData("thumbnailImageFile", null);
          return;
        }
        dispatchMetaData("thumbnailImageFile", e.target.files[0]);
      },
      [dispatchMetaData]
    );

  return {
    name,
    description,
    handleNameChange,
    handleDescriptionChange,
    thumbnailImageFile,
    handleThumbnailImageChange,
  };
};

export const useCTAButton = () => {
  const handleGoMainPageButtonClick = useGoMainPageButton();
  const { handleNextButtonClick, isLoading } = useNextButton();

  return {
    handleGoMainPageButtonClick,
    handleNextButtonClick,
    isLoading,
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
  const { makeQuizAction, isLoading } = useMakeQuizAction();

  const handleNextButtonClick = async () => {
    const result = await makeQuizAction();

    if (result) {
      goToNext();
    }
  };

  return { handleNextButtonClick, isLoading };
};

const useMakeQuizAction = () => {
  const toast = useToast();
  const {
    mutateAsync: insertImageMutateAsync,
    isLoading: insertImageIsLoading,
  } = useInsertImageMutation();
  const { mutateAsync: makeQuizMutateAsync, isLoading: makeQuizIsLoading } =
    useMakeQuizMutation();
  const quizMetaData = useCreateQuizStore((state) => state.quizMetaData);

  const { name, description, thumbnailImageFile } = quizMetaData;

  const makeQuizAction = async () => {
    if (!thumbnailImageFile || !name || !description) {
      toast({
        title: "필수 항목을 작성해주세요.",
        description: "필수 항목은 빨간색 * 표시가 있어요.",
        status: "error",
        duration: 2000,
        containerStyle: {
          width: "100vw",
        },
      });
      return false;
    }

    const uuid = new Date().getMilliseconds();
    const imagePath = `publicQuizLogo/${uuid}_${thumbnailImageFile.name}`;
    const thumbnailImageUrl = `${PATH}/storage/v1/object/public/image/${imagePath}`;

    await insertImageMutateAsync({
      path: imagePath,
      fileBody: thumbnailImageFile,
    });

    await makeQuizMutateAsync({
      name,
      description,
      thumbnailImageUrl,
    });

    return true;
  };

  return {
    makeQuizAction,
    isLoading: insertImageIsLoading || makeQuizIsLoading,
  };
};
