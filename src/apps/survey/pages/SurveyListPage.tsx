import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import { SurveyList } from "../components/survey-list/SurveyList";
import { logoSize } from "@/constants/Sizes";

export const SurveyListPage = () => {
  return (
    <VStack>
      <OpenGraph title="설문조사 리스트" />
      <Image
        src="/logo.png"
        alt="kimeru survey version"
        width={logoSize.width}
        height={logoSize.height}
      />
      <SurveyList />
    </VStack>
  );
};
