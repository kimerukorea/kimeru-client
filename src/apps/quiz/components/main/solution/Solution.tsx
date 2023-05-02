import { useCurrentQuestion } from "@/apps/quiz/hooks";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useCTAButton, useFinalSolution } from "./Solution.hooks";
import { SolutionProps } from "./Solution.types";

export const Solution = ({ hideSolution }: SolutionProps) => {
  const { title, solutionImageUrl, solutionExplanation } = useCurrentQuestion();

  const { handleCTAButtonClick } = useCTAButton({ hideSolution });
  const { isFinalSolution } = useFinalSolution();

  return (
    <VStack gap={10} paddingBottom="40">
      <Heading size="md" color="orange.300">
        {title}
      </Heading>
      <VStack>
        <Text color="orange.400" whiteSpace="break-spaces">
          {solutionExplanation}
        </Text>
        {solutionImageUrl && (
          <DescriptionImage
            src={solutionImageUrl}
            alt={solutionExplanation}
            width={340}
            height={100}
          />
        )}
      </VStack>

      <Portal>
        <BottomButtonGroup>
          <ShadowedButton
            rightIcon={<CheckCircleIcon />}
            width="full"
            boxShadow="dark-lg"
            onClick={handleCTAButtonClick}
          >
            {isFinalSolution ? "결과 보기" : "다음 문제"}
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};

const DescriptionImage = styled(Image)`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const BottomButtonGroup = styled(ButtonGroup)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
