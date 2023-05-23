import { useSurveyListByIdQuery } from "../queries";

export const useSurveyListById = () => {
  const { data } = useSurveyListByIdQuery();

  return { surveyListById: data! };
};
