export type InquiryModalInitialState = {
  isOpen: boolean;
};

export interface InquiryModalState extends InquiryModalInitialState {
  onOpen: VoidFunction;
  onClose: VoidFunction;
}
