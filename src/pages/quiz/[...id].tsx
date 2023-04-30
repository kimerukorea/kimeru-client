import { QuizPage } from "@/apps/quiz/pages/QuizPage";
import { GET_QUIZ_INFO_QUERY_KEY } from "@/apps/quiz/queries";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const quizId = ctx.query.id?.toString();

  if (!quizId) {
    return {
      notFound: true,
    };
  }

  const supabase = createServerSupabaseClient(ctx);

  const queryClient = new QueryClient();

  const fetchGetQuizInfoQuery = queryClient.fetchQuery(
    [GET_QUIZ_INFO_QUERY_KEY, quizId],
    () => supabase.from("quizList").select("*").eq("id", quizId)
  );

  await Promise.resolve(fetchGetQuizInfoQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default QuizPage;
