import reactLogo from "@/apps/quiz/assets/react/reactLogo.png";
import { Spacing } from "@/styles";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { LandingProps } from "./Landing.types";
import styled from "@emotion/styled";
import { useStartButton } from "./Landing.hooks";

export const Landing = () => {
  const { handleStartButtonClick } = useStartButton();
  return (
    <VStack>
      <Heading size="lg" color="orange.200">
        React 레벨 테스트
      </Heading>
      <Text size="lg" color="orange.200">
        React 문제 100점에 도전해보세요.
      </Text>
      <Image src={reactLogo} alt="react" width={300} height={300} />
      <Text color="whiteAlpha.900">현재 총 175,692 명이 참여했습니다.</Text>
      <Spacing size={40} />
      <Portal>
        <BottomButtonGroup>
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

const BottomButtonGroup = styled(ButtonGroup)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
