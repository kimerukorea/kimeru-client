import { supabase } from "@/server";
import { Database } from "@/types/supabase";

export const makeFinalList = async (
  params: Database["public"]["Tables"]["finalList"]["Insert"][]
) => {
  const data = await supabase.from("finalList").insert(params);
};
