import { useGetSurveyInfoQuery } from "../queries";

export const useSurveyInfo = () => {
  const { data } = useGetSurveyInfoQuery();

  return { surveyInfo: data! };
};
