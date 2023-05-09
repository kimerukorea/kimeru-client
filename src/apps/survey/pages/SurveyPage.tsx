import { PageLoader, SwitchCase } from "@/components/@shared";
import { GlobalErrorLoader } from "@/components/@shared/global-error-loader/GlobalErrorLoader";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { AsyncBoundary } from "@suspensive/react";
import { Landing } from "../components/landing";
import { Final, Main } from "../components/main";
import { useQuestionCount, useSurveyInfo } from "../hooks";
import { useStepStore } from "../stores/step";

export const SurveyPage = () => {
  const { currentStep } = useStepStore();
  const { questionCount } = useQuestionCount();
  const { surveyInfo } = useSurveyInfo();

  return (
    <>
      <OpenGraph
        title={surveyInfo.title}
        description={surveyInfo.description}
        imageUrl={surveyInfo.thumbnailImageUrl}
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
