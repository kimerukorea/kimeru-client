import { useRouter } from "next/router";
import { useInquiryModal } from "./inquiry-modal/InquiryModal.hooks";

export const useClickButton = () => {
  const handleAddButtonClick = useAddButton();
  const handleInquiryButtonClick = useInquiryButton();
  const handleMailButtonClick = useEmailButton();
  const handleGithubButtonClick = useGithubButton();

  return {
    handleAddButtonClick,
    handleInquiryButtonClick,
    handleMailButtonClick,
    handleGithubButtonClick,
  };
};

const useAddButton = () => {
  const { push } = useRouter();

  const handleAddButtonClick = () => {
    push("/create-quiz");
  };

  return handleAddButtonClick;
};
const useInquiryButton = () => {
  const { show } = useInquiryModal();

  const handleInquiryButtonClick = () => {
    show();
  };

  return handleInquiryButtonClick;
};

const useEmailButton = () => {
  const handleMailButtonClick = () => {
    window.open("mailto:chanhyuk-tech@kakao.com", "_blank");
  };

  return handleMailButtonClick;
};
const useGithubButton = () => {
  const handleGithubButtonClick = () => {
    window.open("https://github.com/kimerukorea", "_blank");
  };

  return handleGithubButtonClick;
};
