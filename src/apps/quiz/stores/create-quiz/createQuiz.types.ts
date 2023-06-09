import { Database } from "@/types/supabase";

type MetaData = Database["public"]["Tables"]["quizList"]["Insert"] & {
  thumbnailImageFile: File | null;
};

type MainQuestion = Omit<
  Database["public"]["Tables"]["mainList"]["Insert"],
  "quizId"
> & {
  descriptionImageFile: File | null;
  solutionImageFile: File | null;
  quizId?: number;
};

type Final = Omit<
  Database["public"]["Tables"]["finalList"]["Insert"],
  "quizId"
> & { quizId?: number };
export interface CreateQuizInitialState {
  quizId: number | null;
  quizMetaData: MetaData;
  mainQuestionList: MainQuestion[];
  finalList: Final[];
}

export interface CreateQuizState extends CreateQuizInitialState {
  dispatchMetaData: <
    T extends keyof Pick<
      MetaData,
      "name" | "description" | "thumbnailImageFile"
    >
  >(
    key: T,
    value: MetaData[T]
  ) => void;
  dispatchQuizId: (value: number) => void;
  dispatchMainQuestion: <T extends keyof MainQuestion>(
    key: T,
    value: MainQuestion[T]
  ) => void;
  dispatchMainQuestionWithStep: <T extends keyof MainQuestion>(
    key: T,
    value: MainQuestion[T],
    step: number
  ) => void;
  dispatchFinal: <T extends keyof Final>(
    key: T,
    value: Final[T],
    index: number
  ) => void;
}
