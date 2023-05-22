import {
  useSurveyFinalListQuery,
  useSurveyListByIdQuery,
  useSurveyMainListQuery,
} from "@/apps/survey/queries";
import { useMoveOtherPath, useShareLink } from "@/hooks";
import { useState } from "react";
import { ChartDataStore } from "./Final.types";

export const useGetSurvey = () => {
  const { data: surveyMainList } = useSurveyMainListQuery();
  const { data: surveyFinalList } = useSurveyFinalListQuery(true);
  const { data: surveyListById } = useSurveyListByIdQuery();
  const [convertFetchDataToChartData, _] = useState(() => {
    const store: ChartDataStore[] = [];

    if (!surveyFinalList || !surveyListById) return store;

    surveyFinalList.statistics.forEach((stat) => {
      const statOfKeys = Object.keys(stat);
      const newStore: ChartDataStore = [];

      statOfKeys.forEach((key) => {
        newStore.push({
          name: key,
          비율: Number(
            ((stat[key] / surveyListById.participationCount) * 100).toFixed(2)
          ),
        });
      });

      store.push(newStore);
    });

    return store;
  });

  return {
    convertFetchDataToChartData,
    surveyMainList,
  };
};

export const useCTAButton = () => {
  const { onShareLink } = useShareLink();
  const { onMoveOtherPath } = useMoveOtherPath({
    path: "/survey-list",
  });

  return {
    onShareLink,
    onMoveOtherPath,
  };
};
