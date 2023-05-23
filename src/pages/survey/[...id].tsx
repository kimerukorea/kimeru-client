import { SurveyByIdPage } from "@/apps/survey/pages";
import { GET_SURVEY_LIST_BY_ID_QUERY_KEY } from "@/apps/survey/queries";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const surveyId = ctx.query.id?.toString();

  if (!surveyId) {
    return {
      notFound: true,
    };
  }

  const supabase = createServerSupabaseClient(ctx);

  const queryClient = new QueryClient();

  const fetchGetSurveyInfoQuery = queryClient.fetchQuery(
    [GET_SURVEY_LIST_BY_ID_QUERY_KEY, surveyId],
    async () => {
      const { data } = await supabase
        .from("surveyList")
        .select("*")
        .eq("id", surveyId);

      return data?.[0];
    }
  );

  await Promise.resolve(fetchGetSurveyInfoQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SurveyByIdPage;
