import { useToast } from "@chakra-ui/react";
import copy from "copy-to-clipboard";

export interface WebShareDataParams {
  text?: string;
  url: string;
  title?: string;
}

export const useWebShareApi = () => {
  const toast = useToast();
  const share = (data: WebShareDataParams) => {
    if (window.navigator.share) {
      window.navigator.share(data);

      return;
    }

    copy(data.url);

    toast({
      title: "클립보드 복사가 되었어요.",
      description: "원하는 곳에 링크를 붙여넣기 하세요.",
      status: "info",
      duration: 2000,
      containerStyle: {
        width: "100vw",
      },
      isClosable: true,
    });
  };

  return { share };
};
