import { useCurrentQuestion } from "@/apps/survey/hooks";
import { Button, Progress, Text, VStack } from "@chakra-ui/react";
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
            onClick={handleButtonClick(index)}
          >
            {answer}
          </Button>
        ))}
      </VStack>
    </VStack>
  );
};
