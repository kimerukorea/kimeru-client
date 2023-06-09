import { useQuery } from "@tanstack/react-query";
import { getSurveyById } from "../apis";
import { useGetSurveyId } from "../hooks";

export const GET_SURVEY_LIST_BY_ID_QUERY_KEY = "get-survey-list-by-id";

export const useSurveyListByIdQuery = () => {
  const { surveyId } = useGetSurveyId();

  return useQuery({
    queryKey: [GET_SURVEY_LIST_BY_ID_QUERY_KEY, surveyId],
    queryFn: () => getSurveyById({ surveyId }),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 6,
  });
};
