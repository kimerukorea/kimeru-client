import { PageLoader } from "@/components/@shared";
import { Suspense } from "@suspensive/react";
import { Question } from "./question/Question";

export const Main = () => {
  return (
    <Suspense.CSROnly fallback={<PageLoader />}>
      <Question />
    </Suspense.CSROnly>
  );
};
