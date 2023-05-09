import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSurveyInfo } from "../apis/getSurveyInfo";

export const GET_SURVEY_INFO_QUERY_KEY = "get-survey-info";

export const useGetSurveyInfoQuery = () => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return useQuery({
    queryKey: [GET_SURVEY_INFO_QUERY_KEY, surveyId],
    queryFn: () => getSurveyInfo({ surveyId: surveyId! }),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 6,
  });
};
