import { useMutation } from "@tanstack/react-query";
import { makeQuestionList } from "../apis/makeQuestionList";

export const useMakeQuestionListMutation = () => {
  return useMutation(makeQuestionList);
};
