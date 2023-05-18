import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSurveyListById } from "../apis";

export const GET_SURVEY_LIST_BY_ID_QUERY_KEY = "get-survey-list-by-id";

export const useSurveyListByIdQuery = () => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return useQuery({
    queryKey: [GET_SURVEY_LIST_BY_ID_QUERY_KEY, surveyId],
    queryFn: () => getSurveyListById({ surveyId: surveyId! }),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 6,
  });
};
