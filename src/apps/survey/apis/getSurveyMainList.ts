import { supabase } from "@/server";
import type { SurveyId } from "./types";

export const getSurveyMainList = async ({ surveyId }: SurveyId) => {
  const { data } = await supabase
    .from("surveyMainList")
    .select("*")
    .eq("surveyId", surveyId)
    .order("step");

  return data;
};
