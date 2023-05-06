import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import { SurveyList } from "../components/survey-list/SurveyList";

export const SurveyListPage = () => {
  return (
    <VStack>
      <OpenGraph title="서베이 리스트" />
      <Image src="/logo.png" alt="kimeru" width={300} height={270} />
      <SurveyList />
    </VStack>
  );
};
