import { supabase } from "@/server";

export const getSurveyInfo = async ({ surveyId }: { surveyId: string }) => {
  const { data } = await supabase
    .from("surveyList")
    .select("*")
    .eq("id", surveyId);

  return data?.[0];
};
