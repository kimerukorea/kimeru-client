import {
  GET_QUIZ_INFO_QUERY_KEY,
  useGetQuizInfoQuery,
} from "@/apps/quiz/queries";
import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { HTTP_STATUS_CODE } from "@/constants/Supabase";
import { supabase } from "@/server";
import { QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useAnswer } from "../../final/Final.hooks";
import { SolutionProps } from "./Solution.types";

export const useCTAButton = ({
  hideSolution,
}: Pick<SolutionProps, "hideSolution">) => {
  const goToNext = useStepStore((state) => state.goToNext);
  const { isFinalSolution } = useFinalSolution();
  const { calculateParticipationStats, quizId } =
    useCalculateParticipationStats();

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

      return decimalNumber;
    };

    // 본인꺼 합한 평균 (api 호출값과 일치하는지 확인용)
    console.log(getAnswersCountAverage());

    // TODO 동시성 이슈 해결
    const { status } = await supabase
      .from("quizList")
      .update({
        participationCount: quizInfo.participationCount + 1,
        averageAnswerCount: getAnswersCountAverage(),
      })
      .eq("id", quizId);

    const queryClient = new QueryClient();

    if (status === HTTP_STATUS_CODE.success) {
      queryClient.invalidateQueries({
        queryKey: [GET_QUIZ_INFO_QUERY_KEY, quizId],
        exact: true,
      });
    }
  };

  return {
    calculateParticipationStats,
    quizId,
  };
};
