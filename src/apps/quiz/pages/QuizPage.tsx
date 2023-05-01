import { PageLoader, SwitchCase } from "@/components/@shared";
import { Suspense } from "@suspensive/react";
import { Final, Landing, Main } from "../components";
import { useQuestionCount } from "../hooks";
import { useStepStore } from "../stores/step/step.store";

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
