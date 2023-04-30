import { SwitchCase } from "@/components/@shared";
import { Final, Main } from "../components";
import { Landing } from "../components/react/landing";
import { questions } from "../components/react/main/main.constants";
import { useStepStore } from "../stores/step/step.store";

export const ReactPage = () => {
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
