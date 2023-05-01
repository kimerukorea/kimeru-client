import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getQuizMain } from "../apis/getQuizMain";
import { useSuspenseQuery } from "@suspensive/react-query";

export const GET_QUIZ_MAIN_QUERY_KEY = "get-quiz-main";

export const useGetQuizMainQuery = () => {
  const { query } = useRouter();
  const quizId = query.id?.toString();

  return useSuspenseQuery(
    [GET_QUIZ_MAIN_QUERY_KEY, quizId],
    () => getQuizMain({ quizId: quizId! }),
    {
      refetchOnWindowFocus: false,
      staleTime: 60,
    }
  );
};
