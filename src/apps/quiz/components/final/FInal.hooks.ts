import { useRouter } from "next/router";
import { useGetQuizFinalQuery } from "../../queries";
import { useAnswerStore } from "../../stores/answer/answer.store";
import { useWebShareApi } from "@/hooks";

export const useFinalInfo = () => {
  const { data } = useGetQuizFinalQuery();

  if (!data) {
    throw new Error();
  }

  return {
    finalInfo: data,
  };
};

export const useAnswer = () => {
  const answerCount = useAnswerStore((state) => state.answerCount);

  return {
    answerCount,
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
    replace("/");
  };

  return handleOtherQuizButtonClick;
};
