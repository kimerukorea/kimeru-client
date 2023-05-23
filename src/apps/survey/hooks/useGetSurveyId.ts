import { useRouter } from "next/router";

export const useGetSurveyId = () => {
  const { query } = useRouter();
  const surveyId = query.id?.toString();

  return {
    surveyId: surveyId!,
  };
};
