import { useMutation } from "@tanstack/react-query";
import { makeInquiry } from "../apis/makeInquiry";
import { useInquiryModalStore } from "../stores/inquiryModal.store";

export const useMakeInquiryMutation = () => {
  const onClose = useInquiryModalStore((state) => state.onClose);
  return useMutation(makeInquiry, {
    onSuccess: () => {
      onClose();
    },
  });
};
