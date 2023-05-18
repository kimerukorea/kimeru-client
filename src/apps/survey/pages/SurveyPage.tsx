import { PageLoader, SwitchCase } from "@/components/@shared";
import { GlobalErrorLoader } from "@/components/@shared/global-error-loader/GlobalErrorLoader";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { AsyncBoundary } from "@suspensive/react";
import { Landing } from "../components/landing";
import { Final, Main } from "../components/main";
import { useQuestionCount, useSurveyListById } from "../hooks";
import { useStepStore } from "../stores/step";

export const SurveyPage = () => {
  const { currentStep } = useStepStore();
  const { questionCount } = useQuestionCount();
  const { surveyListById } = useSurveyListById();

  return (
    <>
      <OpenGraph
        title={surveyListById.title}
        description={surveyListById.description}
        imageUrl={surveyListById.thumbnailImageUrl}
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
