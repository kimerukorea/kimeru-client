import { PageLoader, SwitchCase } from "@/components/@shared";
import { GlobalErrorLoader } from "@/components/@shared/global-error-loader/GlobalErrorLoader";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { AsyncBoundary } from "@suspensive/react";
import { Final, Landing, Main } from "../components";
import { useQuestionCount, useQuizInfo } from "../hooks";
import { useStepStore } from "../stores/step/step.store";

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
        defaultComponent={
          <AsyncBoundary.CSROnly
            pendingFallback={<PageLoader />}
            rejectedFallback={(errorProps) => (
              <GlobalErrorLoader {...errorProps} />
            )}
          >
            <Main />
          </AsyncBoundary.CSROnly>
        }
        caseBy={{
          0: <Landing />,
          [questionCount + 1]: (
            <AsyncBoundary.CSROnly
              pendingFallback={<PageLoader />}
              rejectedFallback={(errorProps) => (
                <GlobalErrorLoader {...errorProps} />
              )}
            >
              <Final />
            </AsyncBoundary.CSROnly>
          ),
        }}
      />
    </>
  );
};
