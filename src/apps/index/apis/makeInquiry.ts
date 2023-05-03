import { supabase } from "@/server";
import { Database } from "@/types/supabase";

export const makeInquiry = async (
  params: Database["public"]["Tables"]["customerInquiryList"]["Insert"]
) => {
  const { data, error } = await supabase
    .from("customerInquiryList")
    .insert([{ ...params }]);

  console.log(data, error);
};
