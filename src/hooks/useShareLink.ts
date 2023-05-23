import { useWebShareApi } from "./useWebShareApi";

export const useShareLink = () => {
  const { share } = useWebShareApi();

  const onShareLink = () => {
    share({
      url: window.location.href,
    });
  };

  return { onShareLink };
};
