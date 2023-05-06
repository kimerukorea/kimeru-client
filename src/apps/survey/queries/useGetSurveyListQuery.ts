import { useQuery } from "@tanstack/react-query";
import { getSurveyList } from "../apis/getSurveyList";

export const GET_SURVEY_LIST_QUERY_KEY = "get-survey-list";

export const useGetSurveyListQuery = () => {
  const { data } = useQuery(
    [GET_SURVEY_LIST_QUERY_KEY],
    () => getSurveyList(),
    {
      refetchOnMount: false,
    }
  );

  return {
    surveyList: data?.data,
  };
};
