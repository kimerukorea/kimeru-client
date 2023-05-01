import { supabase } from "@/server";

export const getQuizList = async () => {
  console.log("호출");

  return supabase.from("quizList").select("*");
};
