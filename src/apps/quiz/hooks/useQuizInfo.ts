import { useGetQuizInfoQuery } from "../queries";

export const useQuizInfo = () => {
  const { data } = useGetQuizInfoQuery();

  return { quizInfo: data! };
};
