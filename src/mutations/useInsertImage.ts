import { insertImage } from "@/apis/insertImage";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

export const useInsertImageMutation = () => {
  const toast = useToast();

  return useMutation(insertImage, {
    onError: () => {
      toast({
        title: "이미지 업로드 실패했어요.",
        status: "error",
        duration: 2000,
        containerStyle: {
          width: "100vw",
        },
      });
    },
  });
};
