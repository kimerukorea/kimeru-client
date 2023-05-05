import { useMakeQuizMutation } from "@/apps/quiz/mutations/useMakeQuizMutation";
import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
import { supabase } from "@/server";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";

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

  const handleThumbnailImageChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) {
      dispatchMetaData("thumbnailImageFile", null);
      return;
    }
    dispatchMetaData("thumbnailImageFile", e.target.files[0]);
  };

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
  const { handleNextButtonClick, makeQuizIsLoading } = useNextButton();

  return {
    handleGoMainPageButtonClick,
    handleNextButtonClick,
    makeQuizIsLoading,
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
  const { makeQuizAction, makeQuizIsLoading } = useMakeQuizAction();

  const handleNextButtonClick = async () => {
    await makeQuizAction();
    goToNext();
  };

  return { handleNextButtonClick, makeQuizIsLoading };
};

const useMakeQuizAction = () => {
  const { mutateAsync: makeQuizMutateAsync, isLoading: makeQuizIsLoading } =
    useMakeQuizMutation();
  const quizMetaData = useCreateQuizStore((state) => state.quizMetaData);

  const { name, description } = quizMetaData;

  const makeQuizAction = async () => {
    const { data, error } = await supabase.storage
      .from("image")
      .upload("public/avatar1.png", avatarFile, {
        cacheControl: "3600",
        upsert: false,
      });

    await makeQuizMutateAsync({
      name,
      description,
      thumbnailImageUrl: "a",
    });
  };

  return { makeQuizAction, makeQuizIsLoading };
};
