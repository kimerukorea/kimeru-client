import { IndexPage } from "@/apps/index/pages/IndexPage";
import { GET_QUIZ_LIST_QUERY_KEY } from "@/apps/index/queries/useGetQuizListQuery";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const queryClient = new QueryClient();

  const fetchGetQuizListQuery = queryClient.fetchQuery(
    [GET_QUIZ_LIST_QUERY_KEY],
    () => supabase.from("quizList").select("*")
  );

  await Promise.resolve(fetchGetQuizListQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
