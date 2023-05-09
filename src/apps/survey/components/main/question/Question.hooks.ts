import { useCurrentQuestion, useQuestionCount } from "@/apps/survey/hooks";
import {
  useGetSurveyFinalInfoQuery,
  useGetSurveyInfoQuery,
} from "@/apps/survey/queries";
import { useAnswersStore } from "@/apps/survey/stores/answers";
import { useStepStore } from "@/apps/survey/stores/step";
import { HTTP_STATUS_CODE } from "@/constants/Supabase";
import { supabase } from "@/server";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useCTAButton = () => {
  const { currentStep, goToNext } = useStepStore((state) => ({
    goToNext: state.goToNext,
    currentStep: state.currentStep,
  }));

  const currentQuestion = useCurrentQuestion();
  const { questionCount } = useQuestionCount();

  const { answers } = currentQuestion;

  const { query } = useRouter();
  const { data: finalInfo } = useGetSurveyFinalInfoQuery(
    questionCount === currentStep
  );
  const surveyId = query.id?.toString();
  const { myAnswers, setAnswers } = useAnswersStore((state) => ({
    myAnswers: state.answers,
    setAnswers: state.setAnswers,
  }));
  const { data: surveyInfo } = useGetSurveyInfoQuery();

  const handleButtonClick = async (index: number) => {
    if (answers) {
      setAnswers(index);

      if (questionCount === currentStep && finalInfo) {
        const _myAnswers = [...myAnswers, index];
        const statistics = finalInfo.statistics;

        _myAnswers.forEach((answer, index) => {
          const select = Object.keys(statistics[index])[answer];

          statistics[index][select] += 1;
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
    }
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
