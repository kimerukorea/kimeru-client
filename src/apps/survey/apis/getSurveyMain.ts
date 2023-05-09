import { supabase } from "@/server";

export const getSurveyMain = async ({ surveyId }: { surveyId: string }) => {
  const { data } = await supabase
    .from("surveyMainList")
    .select("*")
    .eq("surveyId", surveyId)
    .order("step");

  return data;
};
