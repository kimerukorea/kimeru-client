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
  const { data: surveyListById } = useSurveyListByIdQuery();

  const handleButtonClick = (index: number) => async () => {
    if (answers) {
      setAnswers(index);

      if (questionCount === currentStep && surveyFinalList) {
        const _myAnswers = [...myAnswers, index];
        const statistics = surveyFinalList.statistics;

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

        if (status === HTTP_STATUS_CODE.success && surveyListById) {
          await supabase
            .from("surveyList")
            .update({
              participationCount: surveyListById.participationCount + 1,
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
