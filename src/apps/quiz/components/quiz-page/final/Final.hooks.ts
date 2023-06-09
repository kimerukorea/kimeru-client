import excellent from "@/apps/quiz/assets/json/excellent.json";
import good from "@/apps/quiz/assets/json/good.json";
import poor from "@/apps/quiz/assets/json/poor.json";
import { useShareLink } from "@/hooks";
import { useRouter } from "next/router";
import { useGetQuizFinalQuery } from "../../../queries";
import { useAnswerStore } from "../../../stores/answer/answer.store";

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
  const { onShareLink } = useShareLink();
  const { onMoveMainPath } = useMoveMainPath();

  return {
    onShareLink,
    onMoveMainPath,
  };
};

export const useMoveMainPath = () => {
  const { replace } = useRouter();

  const onMoveMainPath = () => {
    replace("/");
  };

  return { onMoveMainPath };
};

export const useFinalLottieSrc = () => {
  const { answerCount } = useAnswer();

  if (answerCount <= 4) {
    return poor;
  }

  if (answerCount <= 7) {
    return good;
  }

  return excellent;
};
