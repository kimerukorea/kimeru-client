import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSurveyFinalInfo } from "../apis/getSurveyFinalInfo";

export const GET_SURVEY_FINAL_INFO_QUERY_KEY = "get-survey-final-info";

export const useGetSurveyFinalInfoQuery = (isFinalQuestion: boolean) => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return useQuery({
    queryKey: [GET_SURVEY_FINAL_INFO_QUERY_KEY, surveyId],
    queryFn: () => getSurveyFinalInfo({ surveyId: surveyId! }),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 6,
    enabled: isFinalQuestion,
  });
};
