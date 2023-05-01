import { useAnswerStore } from "@/apps/quiz/stores/answer/answer.store";
import { useFinalInfo } from "./FInal.hooks";

export const Final = () => {
  const answerCount = useAnswerStore((state) => state.answerCount);
  const { finalInfo } = useFinalInfo();
  console.log(finalInfo);

  return <div>{answerCount}개 맞으셨어요</div>;
};
