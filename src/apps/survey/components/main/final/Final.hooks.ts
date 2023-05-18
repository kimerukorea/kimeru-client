import {
  useSurveyFinalListQuery,
  useSurveyListByIdQuery,
  useSurveyMainListQuery,
} from "@/apps/survey/queries";
import { useShareLink } from "@/hooks";
import { useMoveOtherContents } from "@/hooks/useMoveOtherContents";
import { useState } from "react";
import { ChartDataStore } from "./Final.types";

export const useGetSurvey = () => {
  const { data: surveyMain } = useSurveyMainListQuery();
  const { data: surveyFinalInfo } = useSurveyFinalListQuery(true);
  const { data: surveyInfo } = useSurveyListByIdQuery();
  const [convertData, _] = useState(() => {
    const store: ChartDataStore[] = [];

    if (!surveyFinalInfo || !surveyInfo) return store;

    surveyFinalInfo.statistics.forEach((stat) => {
      const statOfKeys = Object.keys(stat);
      const newStore: ChartDataStore = [];

      statOfKeys.forEach((key) => {
        newStore.push({
          name: key,
          비율: Number(
            ((stat[key] / surveyInfo.participationCount) * 100).toFixed(2)
          ),
        });
      });

      store.push(newStore);
    });

    return store;
  });

  return {
    convertData,
    surveyMain,
  };
};

export const useCTAButton = () => {
  const { onShareLink } = useShareLink();
  const { onMoveOtherContents } = useMoveOtherContents("/survey-list");

  return {
    onShareLink,
    onMoveOtherContents,
  };
};
