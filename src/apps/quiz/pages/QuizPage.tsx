import { PageLoader, SwitchCase } from "@/components/@shared";
import { Final, Landing, Main } from "../components";
import { useStepStore } from "../stores/step/step.store";
import { useQuestionCount } from "./QuizPage.hooks";
import { Suspense } from "@suspensive/react";

export const QuizPage = () => {
  const { currentStep } = useStepStore();
  const { questionCount } = useQuestionCount();

  return (
    <SwitchCase
      value={`${currentStep}`}
      defaultComponent={<Main />}
      caseBy={{
        0: <Landing />,
        [questionCount + 1]: (
          <Suspense.CSROnly fallback={<PageLoader />}>
            <Final />
          </Suspense.CSROnly>
        ),
      }}
    />
  );
};
