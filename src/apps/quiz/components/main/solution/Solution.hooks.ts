import { useGetQuizInfoQuery } from "@/apps/quiz/queries";
import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { supabase } from "@/server";
import { useRouter } from "next/router";
import { useAnswer } from "../../final/Final.hooks";
import { SolutionProps } from "./Solution.types";

export const useCTAButton = ({
  hideSolution,
}: Pick<SolutionProps, "hideSolution">) => {
  const goToNext = useStepStore((state) => state.goToNext);
  const { isFinalSolution } = useFinalSolution();
  const { increaseParticipationCount } = useIncreaseParticipationCount();

  const handleCTAButtonClick = () => {
    hideSolution();
    goToNext();
    if (isFinalSolution) {
      increaseParticipationCount();
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

export const useIncreaseParticipationCount = () => {
  const { query } = useRouter();
  const quizId = query.id?.toString();
  const { data: quizInfo } = useGetQuizInfoQuery();
  const { answerCount } = useAnswer();

  const increaseParticipationCount = async () => {
    if (!quizInfo) {
      return;
    }

    // TODO 동시성 이슈 해결
    await supabase
      .from("quizList")
      .update({ participationCount: quizInfo.participationCount + 1 })
      .eq("id", quizId);
  };

  return {
    increaseParticipationCount,
  };
};
