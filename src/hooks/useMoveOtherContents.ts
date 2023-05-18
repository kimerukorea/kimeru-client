import { useRouter } from "next/router";

export const useMoveOtherContents = ({ path }: { path: string }) => {
  const { replace } = useRouter();

  const onMoveOtherContents = () => {
    replace(path);
  };

  return { onMoveOtherContents };
};
