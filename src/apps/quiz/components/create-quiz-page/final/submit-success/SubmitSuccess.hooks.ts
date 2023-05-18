import { useRouter } from "next/router";

export const useCTAButton = () => {
  const { replace } = useRouter();
  const handleMyQuizButtonClick = () => {
    replace("/");
  };

  return {
    handleMyQuizButtonClick,
  };
};
