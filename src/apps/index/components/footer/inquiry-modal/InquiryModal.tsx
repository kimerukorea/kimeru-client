import { useInquiryModalStore } from "@/apps/index/stores/inquiryModal.store";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useInput, useInquiryAction } from "./InquiryModal.hooks";

export const InquiryModal = () => {
  const [isOpen, onClose] = useInquiryModalStore((state) => [
    state.isOpen,
    state.onClose,
  ]);

  const { email, handleEmailChange, content, handleContentChange } = useInput();

  const { handleMakeInquiryButtonClick, makeInquiryButtonClickIsLoading } =
    useInquiryAction({
      email,
      content,
    });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent marginX="4">
        <ModalHeader>문의</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormLabel>이메일</FormLabel>
          <Input
            placeholder="연락받으실 메일을 작성해주세요."
            value={email}
            onChange={handleEmailChange}
          />

          <FormLabel pt="6">문의 내용</FormLabel>
          <Textarea
            placeholder="문의 내용을 작성해 주세요."
            value={content}
            onChange={handleContentChange}
            height="240px"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="orange"
            mr={3}
            onClick={handleMakeInquiryButtonClick}
            isLoading={makeInquiryButtonClickIsLoading}
          >
            문의 접수
          </Button>
          <Button onClick={onClose}>취소</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
