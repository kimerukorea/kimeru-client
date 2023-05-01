import { useRouter } from "next/router";

export const useCTAButton = () => {
  const handleGoMainPageButtonClick = useGoMainPageButton();

  return {
    handleGoMainPageButtonClick,
  };
};

const useGoMainPageButton = () => {
  const { replace } = useRouter();

  const handleGoMainPageButtonClick = () => {
    replace("/");
  };

  return handleGoMainPageButtonClick;
};
