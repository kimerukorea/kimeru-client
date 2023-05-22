import { useRouter } from "next/router";

export const useMoveOtherPath = ({ path }: { path: string }) => {
  const { replace } = useRouter();

  const onMoveOtherPath = () => {
    replace(path);
  };

  return { onMoveOtherPath };
};
