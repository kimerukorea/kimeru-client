import { useSuspenseQuery } from "@suspensive/react-query";
import { useRouter } from "next/router";
import { getSurveyMain } from "../apis";

export const GET_SURVEY_MAIN_QUERY_KEY = "get-survey-main";

export const useGetSurveyMainQuery = () => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return useSuspenseQuery(
    [GET_SURVEY_MAIN_QUERY_KEY, surveyId],
    () => getSurveyMain({ surveyId: surveyId! }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    }
  );
};
