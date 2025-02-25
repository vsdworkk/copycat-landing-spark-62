import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoleInformation } from "@/components/questionnaire/RoleInformation";
import { ExperienceInformation } from "@/components/questionnaire/ExperienceInformation";
import { StarExample } from "@/components/questionnaire/StarExample";
import { FinalPreview } from "@/components/questionnaire/FinalPreview";
import { NavigationButtons } from "@/components/questionnaire/NavigationButtons";
import { ProgressIndicator } from "@/components/questionnaire/ProgressIndicator";
import { handleFinalization } from "@/utils/questionnaire/finalizeUtils";

const TOTAL_STEPS = 11;

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoleName, setSelectedRoleName] = useState<string>("");
  const [customRoleName, setCustomRoleName] = useState<string>("");
  const [roleLevel, setRoleLevel] = useState<string>("");
  const [pitchWordLimit, setPitchWordLimit] = useState<string>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  const [relevantExperience, setRelevantExperience] = useState<string>("");
  const [situation, setSituation] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [situationTwo, setSituationTwo] = useState<string>("");
  const [taskTwo, setTaskTwo] = useState<string>("");
  const [actionTwo, setActionTwo] = useState<string>("");
  const [resultTwo, setResultTwo] = useState<string>("");

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalize = () => {
    handleFinalization(navigate);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RoleInformation
            selectedRoleName={selectedRoleName}
            setSelectedRoleName={setSelectedRoleName}
            customRoleName={customRoleName}
            setCustomRoleName={setCustomRoleName}
            roleLevel={roleLevel}
            setRoleLevel={setRoleLevel}
            pitchWordLimit={pitchWordLimit}
            setPitchWordLimit={setPitchWordLimit}
          />
        );
      case 2:
        return (
          <ExperienceInformation
            yearsOfExperience={yearsOfExperience}
            setYearsOfExperience={setYearsOfExperience}
            relevantExperience={relevantExperience}
            setRelevantExperience={setRelevantExperience}
          />
        );
      // First STAR Example (Steps 3-6)
      case 3:
        return (
          <StarExample
            section="situation"
            value={situation}
            setValue={setSituation}
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <StarExample
            section="task"
            value={task}
            setValue={setTask}
            currentStep={currentStep}
          />
        );
      case 5:
        return (
          <StarExample
            section="action"
            value={action}
            setValue={setAction}
            currentStep={currentStep}
          />
        );
      case 6:
        return (
          <StarExample
            section="result"
            value={result}
            setValue={setResult}
            currentStep={currentStep}
          />
        );
      // Second STAR Example (Steps 7-10)
      case 7:
        return (
          <StarExample
            section="situation"
            value={situationTwo}
            setValue={setSituationTwo}
            currentStep={currentStep}
          />
        );
      case 8:
        return (
          <StarExample
            section="task"
            value={taskTwo}
            setValue={setTaskTwo}
            currentStep={currentStep}
          />
        );
      case 9:
        return (
          <StarExample
            section="action"
            value={actionTwo}
            setValue={setActionTwo}
            currentStep={currentStep}
          />
        );
      case 10:
        return (
          <StarExample
            section="result"
            value={resultTwo}
            setValue={setResultTwo}
            currentStep={currentStep}
          />
        );
      case 11:
        return (
          <FinalPreview
            starExample1={{
              situation,
              task,
              action,
              result
            }}
            starExample2={{
              situation: situationTwo,
              task: taskTwo,
              action: actionTwo,
              result: resultTwo
            }}
          />
        );
      default:
        return <div>Step {currentStep} content coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-12">
        <div className="bg-white rounded-2xl">
          <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          {renderStep()}
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onFinalize={handleFinalize}
          />
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;