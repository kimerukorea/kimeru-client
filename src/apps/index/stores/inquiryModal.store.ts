import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  InquiryModalInitialState,
  InquiryModalState,
} from "./inquiryModal.types";

const initialState: InquiryModalInitialState = {
  isOpen: false,
};

export const useInquiryModalStore = create(
  immer<InquiryModalState>((set) => ({
    ...initialState,
    onOpen: () => {
      set((state) => {
        state.isOpen = true;
      });
    },
    onClose: () => {
      set((state) => {
        state.isOpen = false;
      });
    },
  }))
);
