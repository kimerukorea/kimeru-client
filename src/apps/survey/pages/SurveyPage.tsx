import { SwitchCase } from "@/components/@shared";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { useStepStore } from "@/stores";
import { AsyncBoundaryFallback } from "../components/common";
import { Landing } from "../components/landing";
import { Final, Main } from "../components/main";
import { useQuestionCount, useSurveyListById } from "../hooks";

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
        value={currentStep.toString()}
        defaultComponent={
          <AsyncBoundaryFallback>
            <Main />
          </AsyncBoundaryFallback>
        }
        caseBy={{
          0: <Landing />,

          [questionCount + 1]: (
            <AsyncBoundaryFallback>
              <Final />
            </AsyncBoundaryFallback>
          ),
        }}
      />
    </>
  );
};
