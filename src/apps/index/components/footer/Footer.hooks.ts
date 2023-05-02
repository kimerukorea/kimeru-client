export const useClickButton = () => {
  const handleMailButtonClick = useEmailButton();
  const handleGithubButtonClick = useGithubButton();

  return {
    handleMailButtonClick,
    handleGithubButtonClick,
  };
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
