import { useState } from "react";
import { Question } from "./question/Question";
import { Solution } from "./solution/Solution";
import { Suspense } from "@suspensive/react";
import { PageLoader } from "@/components/@shared";

export const Main = () => {
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const showSolutionFunctor = () => {
    setShowSolution(true);
  };
  const hideSolutionFunctor = () => {
    setShowSolution(false);
  };

  return (
    <Suspense.CSROnly fallback={<PageLoader />}>
      {showSolution ? (
        <Solution hideSolution={hideSolutionFunctor} />
      ) : (
        <Question showSolution={showSolutionFunctor} />
      )}
    </Suspense.CSROnly>
  );
};
