import { supabase } from "@/server";
import type { SurveyId } from "./types";

export const getSurveyListById = async ({ surveyId }: SurveyId) => {
  const { data } = await supabase
    .from("surveyList")
    .select("*")
    .eq("id", surveyId);

  return data?.[0];
};
