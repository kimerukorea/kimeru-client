import { useStepStore } from "@/apps/quiz/stores/step/step.store";
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
import { questions } from "../main.constants";
import { SolutionProps } from "./Solution.types";

export const Solution = ({ hideSolution }: SolutionProps) => {
  const [currentStep, goToNext] = useStepStore((state) => [
    state.currentStep,
    state.goToNext,
  ]);
  const currentQuestion = questions.main[currentStep - 1];

  const { title, solution } = currentQuestion;

  const handleNextQuestionButtonClick = () => {
    hideSolution();
    goToNext();
  };

  return (
    <VStack gap={10}>
      <Heading size="md" color="orange.300">
        {title}
      </Heading>
      <VStack>
        <Text color="orange.400">{solution.explanation}</Text>
        <DescriptionImage
          src={solution.imageUrl}
          alt={solution.explanation}
          width={340}
          height={100}
        />
      </VStack>

      <Portal>
        <BottomButtonGroup>
          <ShadowedButton
            rightIcon={<CheckCircleIcon />}
            width="full"
            boxShadow="dark-lg"
            onClick={handleNextQuestionButtonClick}
          >
            다음문제
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
