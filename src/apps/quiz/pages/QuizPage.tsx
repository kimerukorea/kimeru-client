import { PageLoader, SwitchCase } from "@/components/@shared";
import { Suspense } from "@suspensive/react";
import { Final, Landing, Main } from "../components";
import { useQuestionCount, useQuizInfo } from "../hooks";
import { useStepStore } from "../stores/step/step.store";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";

export const QuizPage = () => {
  const { currentStep } = useStepStore();
  const { questionCount } = useQuestionCount();
  const { quizInfo } = useQuizInfo();

  return (
    <>
      <OpenGraph
        title={quizInfo.name}
        description={quizInfo.description}
        imageUrl={quizInfo.thumbnailImageUrl}
      />
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
    </>
  );
};
