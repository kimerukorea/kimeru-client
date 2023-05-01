import { supabase } from "@/server";

export const getQuizMain = async ({ quizId }: { quizId: string }) => {
  const { data } = await supabase
    .from("mainList")
    .select("*")
    .eq("quizId", quizId);

  return data;
};
