import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Heading, Portal, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import React from "react";
import { useCTAButton } from "./SubmitSuccess.hooks";
import good from "@/apps/quiz/assets/json/good.json";
import { size } from "@/styles";

export const SubmitSuccess = () => {
  const { handleMyQuizButtonClick } = useCTAButton();

  return (
    <VStack pt="20">
      <Heading color="whiteAlpha.900" size="md">
        문제를 제작해주셔서 정말 고마워요
      </Heading>
      <LottieAnimation loop autoplay animationData={good} />

      <Heading color="whiteAlpha.900" size="md">
        다른 개발자들에게 큰 힘을 만들어주셨어요.
      </Heading>

      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
          <ShadowedButton
            rightIcon={<ExternalLinkIcon />}
            width="full"
            onClick={handleMyQuizButtonClick}
          >
            내가 만든 문제보기
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
  background-color: var(--chakra-colors-gray-900);
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

const LottieAnimation = styled(Lottie)`
  ${size({
    width: 200,
    height: 200,
  })}
`;
