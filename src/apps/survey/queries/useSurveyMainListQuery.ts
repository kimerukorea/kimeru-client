import { useSuspenseQuery } from "@suspensive/react-query";
import { getSurveyMainList } from "../apis";
import { useGetSurveyId } from "../hooks";

export const GET_SURVEY_MAIN_LIST_QUERY_KEY = "get-survey-main-list";

export const useSurveyMainListQuery = () => {
  const { surveyId } = useGetSurveyId();

  return useSuspenseQuery(
    [GET_SURVEY_MAIN_LIST_QUERY_KEY, surveyId],
    () => getSurveyMainList({ surveyId }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    }
  );
};
