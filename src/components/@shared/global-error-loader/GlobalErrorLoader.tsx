import errorAnimationData from "@/assets/json/error.json";
import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { size } from "@/styles";
import { ExternalLinkIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Button, Portal, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useCTAButton } from "./GlobalErrorLoader.hooks";
import { GlobalErrorLoaderProps } from "./GlobalErrorLoader.types";

export const GlobalErrorLoader = ({ error, reset }: GlobalErrorLoaderProps) => {
  const { handleGoMainPageButtonClick } = useCTAButton();

  return (
    <VStack>
      <LottieAnimation loop autoplay animationData={errorAnimationData} />
      <Text fontSize="xl" color="orange.100">
        무언가 <strong>오류</strong>가 발생했어요. 금방 해결할게요
      </Text>
      <Text
        fontSize="sm"
        color="orange.100"
        whiteSpace="pre-wrap"
        wordBreak="break-all"
      >
        {error.message}
      </Text>
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
          >
            메인 페이지 가기
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<SpinnerIcon />}
            width="full"
            onClick={reset}
            colorScheme="whiteAlpha"
          >
            에러 초기화
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};

const LottieAnimation = styled(Lottie)`
  ${size({
    width: 300,
    height: 300,
  })}
`;

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
