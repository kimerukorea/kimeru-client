import { supabase } from "@/server";

export const getSurveyMainList = async ({ surveyId }: { surveyId: string }) => {
  const { data } = await supabase
    .from("surveyMainList")
    .select("*")
    .eq("surveyId", surveyId)
    .order("step");

  return data;
};
