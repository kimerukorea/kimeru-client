import { SurveyListPage } from "@/apps/survey/pages/SurveyListPage";
import { GET_SURVEY_LIST_QUERY_KEY } from "@/apps/survey/queries/useGetSurveyListQuery";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const queryClient = new QueryClient();

  const fetchGetSurveyListQuery = queryClient.fetchQuery(
    [GET_SURVEY_LIST_QUERY_KEY],
    () => supabase.from("surveyList").select("*")
  );

  await Promise.resolve(fetchGetSurveyListQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SurveyListPage;
