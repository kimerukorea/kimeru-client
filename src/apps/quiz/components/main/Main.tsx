import { useState } from "react";
import { Question } from "./question/Question";
import { Solution } from "./solution/Solution";

export const Main = () => {
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const showSolutionFunctor = () => {
    setShowSolution(true);
  };
  const hideSolutionFunctor = () => {
    setShowSolution(false);
  };

  return showSolution ? (
    <Solution hideSolution={hideSolutionFunctor} />
  ) : (
    <Question showSolution={showSolutionFunctor} />
  );
};
