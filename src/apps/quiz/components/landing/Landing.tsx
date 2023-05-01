import {
  bottomSlideByBottomProperty,
  defaultSlideFadeInVariants,
  framerMocker,
} from "@/constants/Motions";
import { Spacing } from "@/styles";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Heading, Portal, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { commaizeNumber } from "@toss/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuizInfo } from "../../hooks";
import { useStartButton } from "./Landing.hooks";

export const Landing = () => {
  const { quizInfo } = useQuizInfo();
  const { handleStartButtonClick } = useStartButton();

  return (
    <VStack gap={20}>
      <VStack
        as={motion.div}
        variants={defaultSlideFadeInVariants("top")}
        {...framerMocker}
      >
        <Heading size="lg" color="orange.200">
          {quizInfo.name}
        </Heading>
        <Text size="lg" color="orange.200">
          {quizInfo.description}
        </Text>
      </VStack>
      <Image src={quizInfo.thumbnailImageUrl} alt="" width={200} height={200} />
      <Text color="whiteAlpha.900">
        현재 총 {commaizeNumber(quizInfo.participationCount)} 명이 참여했습니다.
      </Text>
      <Spacing size={40} />
      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
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
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
