import { supabase } from "@/server";
import { Database } from "@/types/supabase";

export const makeQuiz = async (
  params: Database["public"]["Tables"]["quizList"]["Insert"]
) => {
  const data = await supabase
    .from("quizList")
    .insert([{ ...params }])
    .select();

  return data.data?.[0];
};
