import { supabase } from "@/server";

export const getQuizInfo = async ({ quizId }: { quizId: string }) => {
  const { data } = await supabase.from("quizList").select("*").eq("id", quizId);

  return data?.[0];
};
