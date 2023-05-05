import { useMutation } from "@tanstack/react-query";
import { makeQuiz } from "../apis/makeQuiz";
import { useCreateQuizStore } from "../stores/create-quiz/createQuiz.store";

export const useMakeQuizMutation = () => {
  const dispatchQuizId = useCreateQuizStore((state) => state.dispatchQuizId);

  return useMutation(makeQuiz, {
    onSuccess: (data) => {
      if (!data?.id) {
        return;
      }

      dispatchQuizId(data.id);
    },
  });
};
