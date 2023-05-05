import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Portal,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCTAButton, useInput } from "./Title.hooks";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FileUploadWithPreview } from "@/components/@shared";

export const Title = () => {
  const {
    name,
    handleNameChange,
    description,
    handleDescriptionChange,
    thumbnailImageFile,
    handleThumbnailImageChange,
  } = useInput();

  const { handleGoMainPageButtonClick, handleNextButtonClick, isLoading } =
    useCTAButton();

  return (
    <VStack>
      <Text color="orange.200">문제 제작을 결심해줘서 고마워요.</Text>
      <Text color="orange.200">다른 누군가에게 반드시 도움이 될거에요.</Text>

      <VStack width="100%" gap={4}>
        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">문제 제목</FormLabel>
          <Input
            placeholder="자바스크립트 초급 레벨 테스트"
            value={name}
            onChange={handleNameChange}
            color="whiteAlpha.900"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">문제 설명</FormLabel>
          <Textarea
            placeholder="기초 자바스크립트 문제에 도전해봐요."
            value={description}
            onChange={handleDescriptionChange}
            color="whiteAlpha.900"
          />
        </FormControl>
        <FormControl isRequired>
          <FileUploadWithPreview
            image={thumbnailImageFile}
            onChange={handleThumbnailImageChange}
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
            rightIcon={<ExternalLinkIcon />}
            width="full"
            onClick={handleGoMainPageButtonClick}
            colorScheme="whiteAlpha"
          >
            메인 페이지 가기
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<ChevronRightIcon />}
            width="full"
            onClick={handleNextButtonClick}
            isLoading={isLoading}
          >
            다음
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
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
