import { supabase } from "@/server";

export const getSurveyList = async () => {
  return supabase.from("surveyList").select("*");
};
