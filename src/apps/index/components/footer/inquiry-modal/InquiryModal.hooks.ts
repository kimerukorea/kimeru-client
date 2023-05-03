import { useMakeInquiryMutation } from "@/apps/index/mutations/useMakeInquiryMutation";
import { useInquiryModalStore } from "@/apps/index/stores/inquiryModal.store";
import { Database } from "@/types/supabase";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react";

export const useInquiryModal = () => {
  const onOpen = useInquiryModalStore((state) => state.onOpen);

  const show = () => {
    onOpen();
  };

  return {
    show,
  };
};

export const useInput = () => {
  const isOpen = useInquiryModalStore((state) => state.isOpen);
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.currentTarget.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setContent("");
    }
  }, [isOpen]);

  return {
    email,
    handleEmailChange,
    content,
    handleContentChange,
  };
};

type UseInquiryActionParams = Pick<
  Database["public"]["Tables"]["customerInquiryList"]["Insert"],
  "email" | "content"
>;

export const useInquiryAction = ({
  email,
  content,
}: UseInquiryActionParams) => {
  const { mutate, isLoading: makeInquiryButtonClickIsLoading } =
    useMakeInquiryMutation();

  const handleMakeInquiryButtonClick = useCallback(() => {
    mutate({
      email,
      content,
    });
  }, [content, email, mutate]);

  return {
    makeInquiryButtonClickIsLoading,
    handleMakeInquiryButtonClick,
  };
};
