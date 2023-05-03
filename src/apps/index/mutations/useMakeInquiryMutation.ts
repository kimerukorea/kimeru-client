import { useMutation } from "@tanstack/react-query";
import { makeInquiry } from "../apis/makeInquiry";
import { useInquiryModalStore } from "../stores/inquiryModal.store";
import { useToast } from "@chakra-ui/react";

export const useMakeInquiryMutation = () => {
  const toast = useToast();
  const onClose = useInquiryModalStore((state) => state.onClose);

  return useMutation(makeInquiry, {
    onSuccess: () => {
      onClose();
      toast({
        title: "문의가 접수 되었어요.",
        description: "빠른 시일내에 보내주신 이메일로 답장 드릴게요.",
        status: "info",
        duration: 2000,
        containerStyle: {
          width: "100vw",
        },
        isClosable: true,
      });
    },
  });
};
