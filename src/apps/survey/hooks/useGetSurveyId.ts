import { useRouter } from "next/router";

const DEFAULT_SURVEY_ID = "1";

export const useGetSurveyId = () => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return {
    surveyId: surveyId ?? DEFAULT_SURVEY_ID,
  };
};
