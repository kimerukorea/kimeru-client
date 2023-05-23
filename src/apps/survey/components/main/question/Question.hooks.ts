import {
  useCurrentQuestion,
  useGetSurveyId,
  useQuestionCount,
} from "@/apps/survey/hooks";
import {
  useSurveyFinalListQuery,
  useSurveyListByIdQuery,
} from "@/apps/survey/queries";
import { useAnswersStore } from "@/apps/survey/stores";
import { HTTP_STATUS_CODE } from "@/constants/Supabase";
import { supabase } from "@/server";
import { useStepStore } from "@/stores";
import { useMemo } from "react";

export const useCTAButton = () => {
  const { currentStep, goToNext } = useStepStore((state) => ({
    goToNext: state.goToNext,
    currentStep: state.currentStep,
  }));

  const currentQuestion = useCurrentQuestion();
  const { answers } = currentQuestion;

  const { questionCount } = useQuestionCount();

  const { data: surveyFinalList } = useSurveyFinalListQuery();
  const { surveyId } = useGetSurveyId();
  const { myAnswers, setAnswers } = useAnswersStore((state) => ({
    myAnswers: state.answers,
    setAnswers: state.setAnswers,
  }));
  const { data: surveyInfo } = useSurveyListByIdQuery();

  const handleButtonClick = (answer: string) => async () => {
    setAnswers(answer);

    if (questionCount === currentStep && surveyFinalList) {
      const _myAnswers = [...myAnswers, answer];
      const statistics = surveyFinalList.statistics;

      _myAnswers.forEach((answer, index) => {
        statistics[index][answer] += 1;
      });

      const { status } = await supabase
        .from("surveyFinalList")
        .update({
          statistics,
        })
        .eq("surveyId", surveyId);

      if (status === HTTP_STATUS_CODE.success && surveyInfo) {
        await supabase
          .from("surveyList")
          .update({
            participationCount: surveyInfo.participationCount + 1,
          })
          .eq("id", surveyId);
      }
    }

    goToNext();
  };

  return {
    handleButtonClick,
  };
};

export const useProgressValue = () => {
  const { questionCount } = useQuestionCount();

  const currentStep = useStepStore((state) => state.currentStep);

  const progressValue = useMemo(() => {
    return (currentStep / questionCount) * 100;
  }, [currentStep, questionCount]);

  return progressValue;
};
