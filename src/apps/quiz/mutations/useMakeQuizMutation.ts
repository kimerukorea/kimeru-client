import { useMutation } from "@tanstack/react-query";
import { makeQuiz } from "../apis/makeQuiz";

export const useMakeQuizMutation = () => {
  return useMutation(makeQuiz);
};
