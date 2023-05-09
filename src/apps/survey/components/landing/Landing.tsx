import {
  bottomSlideByBottomProperty,
  defaultSlideFadeInVariants,
  framerMocker,
} from "@/constants/Motions";
import { Spacing } from "@/styles";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Heading, Portal, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { commaizeNumber } from "@toss/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSurveyInfo } from "../../hooks";
import { useCTAButton } from "./Landing.hooks";

export const Landing = () => {
  const { surveyInfo } = useSurveyInfo();
  const { handleGoMainPageButtonClick, handleStartButtonClick } =
    useCTAButton();

  return (
    <VStack gap={20}>
      <VStack
        as={motion.div}
        variants={defaultSlideFadeInVariants("top")}
        {...framerMocker}
      >
        <Heading size="lg" color="orange.200">
          {surveyInfo.title}
        </Heading>
        <Text size="lg" color="orange.200">
          {surveyInfo.description}
        </Text>
      </VStack>
      <Image
        src={surveyInfo.thumbnailImageUrl}
        alt=""
        width={200}
        height={200}
      />
      <Text color="whiteAlpha.900">
        현재 총 {commaizeNumber(surveyInfo.participationCount)} 명이
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
            onClick={handleGoMainPageButtonClick}
            colorScheme="whiteAlpha"
          >
            메인 페이지 가기
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<ChevronRightIcon />}
            width="full"
            onClick={handleStartButtonClick}
          >
            시작하기
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};

const BottomButtonGroup = styled(motion.div)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
  display: flex;
  gap: 8px;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
