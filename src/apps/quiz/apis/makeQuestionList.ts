import { supabase } from "@/server";
import { Database } from "@/types/supabase";

export const makeQuestionList = async (
  params: Database["public"]["Tables"]["mainList"]["Insert"][]
) => {
  const data = await supabase.from("mainList").insert(params);

  console.log(data);
};
