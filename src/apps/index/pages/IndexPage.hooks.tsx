import { useRouter } from "next/router";

export const useClickFooterButton = () => {
  const handleAddButtonClick = useAddButton();
  const handleSurveyButtonClick = useSurveyButton();

  return {
    handleAddButtonClick,
    handleSurveyButtonClick,
  };
};

const useAddButton = () => {
  const { push } = useRouter();

  const handleAddButtonClick = () => {
    push("/create-quiz");
  };

  return handleAddButtonClick;
};
const useSurveyButton = () => {
  const { push } = useRouter();

  const handleSurveyButtonClick = () => {
    push("/survey-list");
  };

  return handleSurveyButtonClick;
};
