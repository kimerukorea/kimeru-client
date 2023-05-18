import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { logoSize } from "@/constants/Sizes";
import { useStepStore } from "@/stores";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { SurveyList } from "../components/survey-list";

export const SurveyListPage = () => {
  const dispatchInitialize = useStepStore((state) => state.dispatchInitialize);

  useEffect(() => {
    dispatchInitialize();
  }, [dispatchInitialize]);

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
