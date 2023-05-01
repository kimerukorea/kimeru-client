import { useSuspenseQuery } from "@suspensive/react-query";
import { useRouter } from "next/router";
import { getQuizFinalInfo } from "../apis/getQuizFinalInfo";
import { useAnswerStore } from "../stores/answer/answer.store";

const GET_QUIZ_FINAL_QUERY_KEY = "get-quiz-final";

export const useGetQuizFinalQuery = () => {
  const { query } = useRouter();
  const quizId = query.id?.toString();
  const answerCount = useAnswerStore((state) => state.answerCount);

  return useSuspenseQuery(
    [GET_QUIZ_FINAL_QUERY_KEY, quizId, answerCount],
    () => getQuizFinalInfo({ quizId: quizId! }),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        if (!data) {
          return;
        }

        const finalInfo = data.find((finalResult) => {
          return answerCount < finalResult.maxRange;
        });

        if (!finalInfo) {
          return;
        }

        return finalInfo;
      },
    }
  );
};
