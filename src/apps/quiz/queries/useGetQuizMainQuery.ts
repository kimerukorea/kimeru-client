import { useSuspenseQuery } from "@suspensive/react-query";
import { useRouter } from "next/router";
import { getQuizMain } from "../apis/getQuizMain";

export const GET_QUIZ_MAIN_QUERY_KEY = "get-quiz-main";

export const useGetQuizMainQuery = () => {
  const { query } = useRouter();
  const quizId = query.id?.toString();

  return useSuspenseQuery(
    [GET_QUIZ_MAIN_QUERY_KEY, quizId],
    () => getQuizMain({ quizId: quizId! }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    }
  );
};
