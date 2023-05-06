import { useMutation } from "@tanstack/react-query";
import { makeFinalList } from "../apis/makeFinalList";

export const useMakeFinalListMutation = () => {
  return useMutation(makeFinalList);
};
