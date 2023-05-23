import {
  bottomSlideByBottomProperty,
  defaultSlideFadeInVariants,
  framerMocker,
} from "@/constants/Motions";
import { Spacing } from "@/styles";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Portal, Text, VStack } from "@chakra-ui/react";
import { commaizeNumber } from "@toss/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSurveyListById } from "../../hooks";
import { useCTAButton } from "./Landing.hooks";
import { BottomButtonGroup, ShadowedButton } from "./Landing.styles";

export const Landing = () => {
  const { surveyListById } = useSurveyListById();
  const { onMoveSurveyMain, onStartSurvey } = useCTAButton();

  return (
    <VStack gap={20}>
      <VStack
        as={motion.div}
        variants={defaultSlideFadeInVariants("top")}
        {...framerMocker}
      >
        <Heading size="lg" color="orange.200">
          {surveyListById.title}
        </Heading>

        <Text size="lg" color="orange.200">
          {surveyListById.description}
        </Text>
      </VStack>

      <Image
        src={surveyListById.thumbnailImageUrl}
        alt=""
        width={200}
        height={200}
      />

      <Text color="whiteAlpha.900">
        현재 총 {commaizeNumber(surveyListById.participationCount)} 명이
        참여했습니다.
      </Text>

      <Spacing size={40} />

      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
          <ShadowedButton
            rightIcon={<ExternalLinkIcon />}
            width="full"
            onClick={onMoveSurveyMain}
            colorScheme="whiteAlpha"
          >
            메인 페이지 가기
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<ChevronRightIcon />}
            width="full"
            onClick={onStartSurvey}
          >
            시작하기
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};
