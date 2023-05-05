import { useCreateQuizStepStore } from "@/apps/quiz/stores/create-quiz-step/createQuizStep.store";
import {
  GlobalErrorLoader,
  PageLoader,
  SwitchCase,
} from "@/components/@shared";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { AsyncBoundary } from "@suspensive/react";
import { Final, Question, Title } from "../components/create-quiz-page";
import { DEFAULT_QUESTION_LENGTH } from "./CreateQuizPage.constants";

export const CreateQuizPage = () => {
  const currentStep = useCreateQuizStepStore((state) => state.currentStep);

  return (
    <>
      <OpenGraph title={"퀴즈 만들기"} />
      <SwitchCase
        value={`${currentStep}`}
        defaultComponent={
          <AsyncBoundary.CSROnly
            pendingFallback={<PageLoader />}
            rejectedFallback={(errorProps) => (
              <GlobalErrorLoader {...errorProps} />
            )}
          >
            <Question />
          </AsyncBoundary.CSROnly>
        }
        caseBy={{
          0: <Title />,
          [DEFAULT_QUESTION_LENGTH + 1]: (
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
