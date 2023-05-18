import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import { FileUploadWithPreview } from "@/components/@shared";
import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Portal,
  Progress,
  Switch,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useCTAButton, useInput, useProgressValue } from "./Question.hooks";

export const Question = () => {
  const currentStep = useCreateQuizStepStore((state) => state.currentStep);

  const progressValue = useProgressValue();

  const {
    title,
    handleTitleChange,
    descriptionExplanation,
    handleDescriptionChange,
    descriptionImageFile,
    handleDescriptionImageChange,
    solutionExplanation,
    handleSolutionChange,
    solutionImageFile,
    handleSolutionImageChange,
    answerValue,
    handleAnswerValueChange,
  } = useInput();

  const {
    handlePreviousButtonClick,
    handleNextButtonClick,
    previousButtonText,
    nextButtonText,
    isLoading,
  } = useCTAButton();

  return (
    <VStack pb="40">
      <Progress
        width="100%"
        colorScheme="orange"
        size="xs"
        hasStripe
        value={progressValue}
        mb="4"
      />
      <Heading color="whiteAlpha.900" size="md">
        <strong>{currentStep}</strong>번 문제에요
      </Heading>
      <Text color="orange.200">문제는 의문형으로 작성해주세요.</Text>
      <Text color="orange.200">정답은 자세할수록 좋아요.</Text>

      <VStack width="100%" gap={4}>
        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">문제 분야</FormLabel>
          <Input
            placeholder="자바스크립트 디버깅"
            value={title}
            onChange={handleTitleChange}
            color="whiteAlpha.900"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">문제 설명</FormLabel>
          <Textarea
            placeholder="자바스크립트 개발중, 변수값을 콘솔에 찍어서 확인해보고 싶은 경우 print 메서드를 활용하면 되나요?"
            height="150"
            value={descriptionExplanation}
            onChange={handleDescriptionChange}
            color="whiteAlpha.900"
          />
        </FormControl>
        <FormControl>
          <FileUploadWithPreview
            image={descriptionImageFile}
            onChange={handleDescriptionImageChange}
            badgeText="문제에 연관된 사진을 올려주세요."
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" isRequired>
          <FormLabel htmlFor="answerValue" mb="0" color="whiteAlpha.900">
            문제의 설명이 참인가요?
          </FormLabel>
          <Switch
            id="answerValue"
            colorScheme="orange"
            isChecked={answerValue}
            onChange={handleAnswerValueChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">정답 설명</FormLabel>
          <Textarea
            placeholder="자바스크립트 개발중, 변수값을 콘솔에 찍어서 확인해보고 싶은 경우 console.log 메서드를 활용하면 되요. 별도로 Import없이 바로 사용가능해요. 운영 환경에서 로그를 노출시키지 않기 위해서 커스터마이징해서 사용하는 경우도 있어요."
            height="150"
            value={solutionExplanation}
            onChange={handleSolutionChange}
            color="whiteAlpha.900"
          />
        </FormControl>
        <FormControl>
          <FileUploadWithPreview
            image={solutionImageFile}
            onChange={handleSolutionImageChange}
            badgeText="정답에 연관된 사진을 올려주세요."
          />
        </FormControl>
      </VStack>
      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
          <ShadowedButton
            leftIcon={<ArrowBackIcon />}
            width="full"
            onClick={handlePreviousButtonClick}
          >
            {previousButtonText}
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<ArrowForwardIcon />}
            width="full"
            onClick={handleNextButtonClick}
            isLoading={isLoading}
          >
            {nextButtonText}
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
