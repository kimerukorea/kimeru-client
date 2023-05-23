import { supabase } from "@/server";
import type { SurveyId } from "./types";

export const getSurveyFinalList = async ({ surveyId }: SurveyId) => {
  const { data } = await supabase
    .from("surveyFinalList")
    .select("*")
    .eq("id", surveyId);

  return data?.[0];
};
