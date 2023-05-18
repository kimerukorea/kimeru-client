import { useQuery } from "@tanstack/react-query";
import { getSurveyFinalList } from "../apis";
import { useGetSurveyId } from "../hooks";

export const GET_SURVEY_FINAL_LIST_QUERY_KEY = "get-survey-final-list";

export const useSurveyFinalListQuery = (isFinalQuestion: boolean) => {
  const { surveyId } = useGetSurveyId();

  return useQuery({
    queryKey: [GET_SURVEY_FINAL_LIST_QUERY_KEY, surveyId],
    queryFn: () => getSurveyFinalList({ surveyId }),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 6,
    enabled: isFinalQuestion,
  });
};
