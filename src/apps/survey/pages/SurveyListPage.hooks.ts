import { useStepStore } from "@/stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useInitialization = () => {
  const dispatchInitialize = useStepStore((state) => state.dispatchInitialize);

  useEffect(() => {
    dispatchInitialize();
  }, [dispatchInitialize]);
};

export const useClickFooterButton = () => {
  const handleQuizButtonClick = useQuizButton();

  return {
    handleQuizButtonClick,
  };
};

const useQuizButton = () => {
  const { push } = useRouter();

  const handleQuizButtonClick = () => {
    push("/");
  };

  return handleQuizButtonClick;
};
