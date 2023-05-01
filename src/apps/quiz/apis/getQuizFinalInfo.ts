import { supabase } from "@/server";

export const getQuizFinalInfo = async ({ quizId }: { quizId: string }) => {
  await delay(2000);

  const { data } = await supabase
    .from("finalList")
    .select("*")
    .eq("quizId", quizId);

  return data;
};

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
