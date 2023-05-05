import { useCreateQuizStore } from "@/apps/quiz/stores/create-quiz/createQuiz.store";
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
