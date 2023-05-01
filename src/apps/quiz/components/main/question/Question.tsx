import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Portal,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useCTAButton } from "./Question.hooks";
import { QuestionProps } from "./Question.types";
import { useCurrentQuestion, useQuestionCount } from "@/apps/quiz/hooks";
import { useStepStore } from "@/apps/quiz/stores/step/step.store";

export const Question = ({ showSolution }: QuestionProps) => {
  const { title, descriptionImageUrl, descriptionExplanation } =
    useCurrentQuestion();

  const { handleYesButtonClick, handleNoButtonClick } = useCTAButton({
    showSolution,
  });

  const { questionCount } = useQuestionCount();

  const currentStep = useStepStore((state) => state.currentStep);

  return (
    <VStack gap={10}>
      <Progress
        width="100%"
        colorScheme="orange"
        size="xs"
        hasStripe
        value={(currentStep / questionCount) * 100}
      />

      <Heading size="md" color="orange.300">
        {title}
      </Heading>

      <VStack>
        <Text color="orange.400">{descriptionExplanation}</Text>
        {descriptionImageUrl && (
          <DescriptionImage
            src={descriptionImageUrl}
            alt={descriptionExplanation}
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
