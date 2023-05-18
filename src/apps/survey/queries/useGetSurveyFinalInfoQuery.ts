import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSurveyFinalList } from "../apis";

export const GET_SURVEY_FINAL_INFO_QUERY_KEY = "get-survey-final-info";

export const useGetSurveyFinalInfoQuery = (isFinalQuestion: boolean) => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return useQuery({
    queryKey: [GET_SURVEY_FINAL_INFO_QUERY_KEY, surveyId],
    queryFn: () => getSurveyFinalList({ surveyId: surveyId! }),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 6,
    enabled: isFinalQuestion,
  });
};
