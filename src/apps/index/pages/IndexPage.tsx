import { QuizList } from "@/apps/index/components/quiz-list";
import { Footer } from "@/components/@shared";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { IconButton, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useClickFooterButton } from "./IndexPage.hooks";
import { AddIcon } from "@chakra-ui/icons";
import { SurveyIcon } from "@/apps/survey/assets/svg/survey";

export const IndexPage = () => {
  const { handleAddButtonClick, handleSurveyButtonClick } =
    useClickFooterButton();

  return (
    <VStack>
      <OpenGraph title="퀴즈 리스트" />
      <Image src="/logo.png" alt="kimeru" width={300} height={270} />
      <QuizList />
      <Footer
        iconButtonList={[
          <IconButton
            key="create"
            aria-label="create"
            fontSize="18px"
            icon={<AddIcon />}
            size="sm"
            onClick={handleAddButtonClick}
          />,
          <IconButton
            key="go-survey"
            aria-label="go-survey"
            fontSize="18px"
            icon={<SurveyIcon />}
            size="sm"
            onClick={handleSurveyButtonClick}
          />,
        ]}
      />
    </VStack>
  );
};
