import {
  useGetSurveyFinalInfoQuery,
  useGetSurveyInfoQuery,
  useGetSurveyMainQuery,
} from "@/apps/survey/queries";
import { useWebShareApi } from "@/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChartDataStore } from "./Final.types";

export const useGetSurvey = () => {
  const { data: surveyMain } = useGetSurveyMainQuery();
  const { data: surveyFinalInfo } = useGetSurveyFinalInfoQuery(true);
  const { data: surveyInfo } = useGetSurveyInfoQuery();
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
  const handleShareButtonClick = useShare();
  const handleOtherQuizButtonClick = useOtherQuiz();

  return {
    handleShareButtonClick,
    handleOtherQuizButtonClick,
  };
};

export const useShare = () => {
  const { share } = useWebShareApi();

  const handleShareButtonClick = () => {
    share({
      url: window.location.href,
    });
  };

  return handleShareButtonClick;
};

export const useOtherQuiz = () => {
  const { replace } = useRouter();

  const handleOtherQuizButtonClick = () => {
    replace("/survey-list");
  };

  return handleOtherQuizButtonClick;
};
