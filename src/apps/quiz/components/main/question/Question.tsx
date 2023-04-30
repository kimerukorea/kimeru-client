import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
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
import { useStepStore } from "@/apps/quiz/stores/step/step.store";
import { useAnswerStore } from "@/apps/quiz/stores/answer/answer.store";
import { QuestionProps } from "./Question.types";

export const Question = ({ showSolution }: QuestionProps) => {
  const currentStep = useStepStore((state) => state.currentStep);
  const currentQuestion = questions.main[currentStep - 1];
  const increaseAnswerCount = useAnswerStore(
    (state) => state.increaseAnswerCount
  );

  const { title, description, answerValue } = currentQuestion;

  const handleYesButtonClick = () => {
    if (answerValue) {
      increaseAnswerCount();
    }
    showSolution();
  };

  const handleNoButtonClick = () => {
    if (!answerValue) {
      increaseAnswerCount();
    }
    showSolution();
  };

  return (
    <VStack gap={10}>
      <Heading size="md" color="orange.300">
        {title}
      </Heading>

      <VStack>
        <Text color="orange.400">{description.explanation}</Text>
        <DescriptionImage
          src={description.imageUrl}
          alt={description.explanation}
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
            onClick={handleYesButtonClick}
          >
            네
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<CloseIcon />}
            width="full"
            onClick={handleNoButtonClick}
          >
            아니요
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
