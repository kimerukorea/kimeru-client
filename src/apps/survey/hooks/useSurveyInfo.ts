import { useSurveyListByIdQuery } from "../queries";

export const useSurveyInfo = () => {
  const { data } = useSurveyListByIdQuery();

  return { surveyInfo: data! };
};
