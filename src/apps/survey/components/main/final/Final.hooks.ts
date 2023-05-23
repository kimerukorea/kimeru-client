import {
  useSurveyFinalListQuery,
  useSurveyListByIdQuery,
  useSurveyMainListQuery,
} from "@/apps/survey/queries";
import { useAnswersStore } from "@/apps/survey/stores";
import { useShareLink } from "@/hooks";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { ChartDataStore } from "./Final.types";

export const useGetSurvey = () => {
  const { data: surveyMainList } = useSurveyMainListQuery();
  const { convertData } = useConvertFetchDataToChartData();

  return {
    convertData,
    surveyMainList,
  };
};

const useConvertFetchDataToChartData = () => {
  const { data: surveyFinalList } = useSurveyFinalListQuery();
  const { data: surveyInfo } = useSurveyListByIdQuery();

  const onConvertFetchDataToChartData = useCallback(() => {
    const store: ChartDataStore[] = [];

    if (!surveyFinalList || !surveyInfo) return store;

    surveyFinalList.statistics.forEach((stat) => {
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
  }, [surveyFinalList, surveyInfo]);

  return {
    convertData: onConvertFetchDataToChartData(),
  };
};

export const useCTAButton = () => {
  const { onShareLink } = useShareLink();
  const { onMoveSurveyMain } = useMoveSurveyMainButton();

  return {
    onShareLink,
    onMoveSurveyMain,
  };
};

export const useMoveSurveyMainButton = () => {
  const dispatchInitialize = useAnswersStore(
    (state) => state.dispatchInitialize
  );
  const { replace } = useRouter();

  const onMoveSurveyMain = () => {
    dispatchInitialize();
    replace("/survey-list");
  };

  return { onMoveSurveyMain };
};
