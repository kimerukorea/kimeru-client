import { useQuery } from "@tanstack/react-query";
import { getQuizList } from "../apis/getQuizList";

export const GET_QUIZ_LIST_QUERY_KEY = "get-quiz-list";

export const useGetQuizListQuery = () => {
  const { data } = useQuery([GET_QUIZ_LIST_QUERY_KEY], () => getQuizList());

  return {
    quizList: data?.data,
  };
};
