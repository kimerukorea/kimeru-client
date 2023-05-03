import { supabase } from "@/server";

export const getQuizList = async () => {
  return supabase.from("quizList").select("*");
};
