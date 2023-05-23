import { useInquiryModal } from "./inquiry-modal/InquiryModal.hooks";

export const useClickButton = () => {
  const handleInquiryButtonClick = useInquiryButton();
  const handleMailButtonClick = useEmailButton();
  const handleGithubButtonClick = useGithubButton();

  return {
    handleInquiryButtonClick,
    handleMailButtonClick,
    handleGithubButtonClick,
  };
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
