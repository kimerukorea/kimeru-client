import { useAnswerStore } from "@/apps/quiz/stores/answer/answer.store";

export const Final = () => {
  const answerCount = useAnswerStore((state) => state.answerCount);


  return <div>{answerCount}개 맞으셨어요</div>;
};
