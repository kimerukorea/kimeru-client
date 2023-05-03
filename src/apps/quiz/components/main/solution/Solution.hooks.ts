import { useGetQuizInfoQuery } from "@/apps/quiz/queries";
import { useAnswerStore } from "@/apps/quiz/stores/answer/answer.store";
import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { supabase } from "@/server";
import { useRouter } from "next/router";
import { shallow } from "zustand/shallow";
import { useAnswer } from "../../final/Final.hooks";
import { SolutionProps } from "./Solution.types";

export const useCTAButton = ({
  hideSolution,
}: Pick<SolutionProps, "hideSolution">) => {
  const goToNext = useStepStore((state) => state.goToNext);
  const { isFinalSolution } = useFinalSolution();
  const { calculateParticipationStats } = useCalculateParticipationStats();

  const handleCTAButtonClick = () => {
    hideSolution();
    goToNext();
    if (isFinalSolution) {
      calculateParticipationStats();
    }
  };

  return {
    handleCTAButtonClick,
  };
};

export const useFinalSolution = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  const { data } = useGetQuizInfoQuery();

  if (!data) {
    throw new Error();
  }

  const isFinalSolution = currentStep === data.questionCount;

  return {
    isFinalSolution,
  };
};

export const useCalculateParticipationStats = () => {
  const { query } = useRouter();
  const quizId = query.id?.toString();
  const { data: quizInfo } = useGetQuizInfoQuery();
  const { answerCount } = useAnswer();
  const { calculateAverageAnswerCount } = useAnswerStore(
    (state) => ({
      calculateAverageAnswerCount: state.calculateAverageAnswerCount,
    }),
    shallow
  );

  const calculateParticipationStats = async () => {
    if (!quizInfo) {
      return;
    }

    const getAnswersCountAverage = () => {
      const average =
        (quizInfo.averageAnswerCount * quizInfo.participationCount +
          answerCount) /
        (quizInfo.participationCount + 1);

      const decimalNumber = Number(average.toFixed(2));

      calculateAverageAnswerCount(decimalNumber);

      return decimalNumber;
    };

    // TODO 동시성 이슈 해결
    await supabase
      .from("quizList")
      .update({
        participationCount: quizInfo.participationCount + 1,
        averageAnswerCount: getAnswersCountAverage(),
      })
      .eq("id", quizId);
  };

  return {
    calculateParticipationStats,
  };
};
