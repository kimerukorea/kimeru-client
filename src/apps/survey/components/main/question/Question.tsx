import { useCurrentQuestion } from "@/apps/survey/hooks";
import { Button, ButtonGroup, Progress, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useCTAButton, useProgressValue } from "./Question.hooks";

export const Question = () => {
  const { question, answers } = useCurrentQuestion();
  const { handleButtonClick } = useCTAButton();

  const progressValue = useProgressValue();

  return (
    <VStack gap={10} pb="40">
      <Progress
        width="100%"
        colorScheme="orange"
        size="xs"
        hasStripe
        value={progressValue}
      />

      <VStack>
        <Text color="orange.400" whiteSpace="break-spaces">
          {question}
        </Text>

        {answers.map((answer, index) => (
          <Button
            key={answer}
            variant="ghost"
            color="orange.300"
            colorScheme="whiteAlpha"
            onClick={() => {
              handleButtonClick(index);
            }}
          >
            {answer}
          </Button>
        ))}
      </VStack>
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
