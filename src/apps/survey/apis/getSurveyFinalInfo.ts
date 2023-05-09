import { supabase } from "@/server";

export const getSurveyFinalInfo = async ({
  surveyId,
}: {
  surveyId: string;
}) => {
  const { data } = await supabase
    .from("surveyFinalList")
    .select("*")
    .eq("id", surveyId);

  return data?.[0];
};
