import { supabase } from "@/server";
import { Database } from "@/types/supabase";

export const makeInquiry = async (
  params: Database["public"]["Tables"]["customerInquiryList"]["Insert"]
) => {
  await supabase.from("customerInquiryList").insert([{ ...params }]);
};
