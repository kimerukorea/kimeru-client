import { Footer } from "@/components/@shared";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { IconButton, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { SurveyList } from "../components/survey-list";
import {
  useClickFooterButton,
  useInitialization,
} from "./SurveyListPage.hooks";
import { QuizIcon } from "@/assets/svg/quiz";

export const SurveyListPage = () => {
  useInitialization();
  const { handleQuizButtonClick } = useClickFooterButton();

  return (
    <VStack>
      <OpenGraph title="설문조사 리스트" />
      <Image
        src="/logo.png"
        alt="kimeru survey version"
        width={300}
        height={270}
      />
      <SurveyList />
      <Footer
        iconButtonList={[
          <IconButton
            key="create"
            aria-label="create"
            icon={<QuizIcon />}
            size="sm"
            onClick={handleQuizButtonClick}
          />,
        ]}
      />
    </VStack>
  );
};
