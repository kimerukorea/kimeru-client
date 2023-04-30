import { SwitchCase } from "@/components/@shared";
import { Final, Landing, Main } from "../components";
import { useStepStore } from "../stores/step/step.store";
import { questions } from "../components/main/main.constants";

export const QuizPage = () => {
  const { currentStep } = useStepStore();

  return (
    <SwitchCase
      value={`${currentStep}`}
      defaultComponent={<Main />}
      caseBy={{
        0: <Landing />,
        [questions.main.length + 1]: <Final />,
      }}
    />
  );
};
