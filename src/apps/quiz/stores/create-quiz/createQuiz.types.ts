import { Database } from "@/types/supabase";

type MetaData = Database["public"]["Tables"]["quizList"]["Insert"] & {
  thumbnailImageFile: File | null;
};

type MainQuestion = Omit<
  Database["public"]["Tables"]["mainList"]["Insert"],
  "descriptionImageUrl" | "solutionImageUrl" | "quizId"
> & {
  descriptionImageFile: File | null;
  solutionImageFile: File | null;
  quizId?: number;
};

export interface CreateQuizInitialState {
  quizId: number | null;
  quizMetaData: MetaData;
  mainQuestionList: MainQuestion[];
  finalList: Database["public"]["Tables"]["finalList"]["Insert"][];
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
}
