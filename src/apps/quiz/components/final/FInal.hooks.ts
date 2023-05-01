import { useGetQuizFinalQuery } from "../../queries";

export const useFinalInfo = () => {
  const { data } = useGetQuizFinalQuery();

  if (!data) {
    throw new Error();
  }

  return {
    finalInfo: data,
  };
};
