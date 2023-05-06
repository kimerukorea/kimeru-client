import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Portal,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCTAButton, useInput } from "./Final.hooks";
import {
  DEFAULT_DESCRIPTION_EXPLANATION_PLACEHOLDER,
  DEFAULT_MAIN_TITLE_PLACEHOLDER,
} from "./Final.constants";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { SubmitSuccess } from "./submit-success";

export const Final = () => {
  const {
    finalList,
    handleMainTitleChange,
    handleDescriptionExplanationChange,
  } = useInput();
  const { handleSubmitButtonClick, isLoading, isSuccess } = useCTAButton();

  if (isSuccess) {
    return <SubmitSuccess />;
  }

  return (
    <VStack pb="40">
      <Heading size="md" color="whiteAlpha.900" mb="4">
        마지막 단계에요.
      </Heading>
      <VStack width="100%" gap={4}>
        {finalList.map((finalMetaData, index) => (
          <FormControl isRequired key={index}>
            <FormLabel color="whiteAlpha.900">
              <strong>{(index + 1) * 3 + 1}문제 이하의 개발자</strong>는 어떤
              개발자인가요?
            </FormLabel>
            <Input
              placeholder={DEFAULT_MAIN_TITLE_PLACEHOLDER[index]}
              value={finalMetaData.mainTitle}
              onChange={handleMainTitleChange(index)}
              color="whiteAlpha.900"
            />
            <FormLabel color="whiteAlpha.900" mt="4">
              <strong>{(index + 1) * 3 + 1}문제 이하의 개발자</strong>에게
              조언을 적어주세요.
            </FormLabel>
            <Textarea
              placeholder={DEFAULT_DESCRIPTION_EXPLANATION_PLACEHOLDER[index]}
              value={finalMetaData.descriptionExplanation}
              onChange={handleDescriptionExplanationChange(index)}
              color="whiteAlpha.900"
            />
            <Divider color="whiteAlpha.900" mt="6" />
          </FormControl>
        ))}
      </VStack>

      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
          <ShadowedButton
            rightIcon={<CheckCircleIcon />}
            width="full"
            onClick={handleSubmitButtonClick}
            isLoading={isLoading}
          >
            문제 제출하기
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
