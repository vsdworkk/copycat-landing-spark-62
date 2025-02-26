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

  // Role & Experience
  const [selectedRoleName, setSelectedRoleName] = useState<string>("");
  const [customRoleName, setCustomRoleName] = useState<string>("");
  const [roleLevel, setRoleLevel] = useState<string>("");
  const [pitchWordLimit, setPitchWordLimit] = useState<string>("");
  const [roleDescription, setRoleDescription] = useState<string>(""); // <-- New field
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  const [relevantExperience, setRelevantExperience] = useState<string>("");

  // STAR Example #1
  const [situation, setSituation] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // STAR Example #2
  const [situationTwo, setSituationTwo] = useState<string>("");
  const [taskTwo, setTaskTwo] = useState<string>("");
  const [actionTwo, setActionTwo] = useState<string>("");
  const [resultTwo, setResultTwo] = useState<string>("");

  // Store webhook response so we can display it in FinalPreview
  const [webhookResponse, setWebhookResponse] = useState<any>(null);

  // Next/Prev logic
  const handleNext = async () => {
    // On step 10 (the "Submit" click), send data to webhook
    if (currentStep === 10) {
      const dataToSend = {
        selectedRoleName,
        customRoleName,
        roleLevel,
        pitchWordLimit,
        roleDescription, // <-- Include roleDescription
        yearsOfExperience,
        relevantExperience,
        starExample1: { situation, task, action, result },
        starExample2: {
          situation: situationTwo,
          task: taskTwo,
          action: actionTwo,
          result: resultTwo,
        },
      };

      try {
        const response = await fetch(
          "https://wadusilva.app.n8n.cloud/webhook-test/create-pitch",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
          }
        );
        if (!response.ok) {
          throw new Error("Error while submitting to webhook");
        }
        const resultData = await response.json();
        setWebhookResponse(resultData);
      } catch (error) {
        console.error("Error submitting data to webhook:", error);
      }
    }

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

  // Render each step
  const renderStep = () => {
    switch (currentStep) {
      // Step 1: RoleInformation
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
            roleDescription={roleDescription}         // <-- Pass state here
            setRoleDescription={setRoleDescription}   // <-- Pass state here
          />
        );
      // Step 2: ExperienceInformation
      case 2:
        return (
          <ExperienceInformation
            yearsOfExperience={yearsOfExperience}
            setYearsOfExperience={setYearsOfExperience}
            relevantExperience={relevantExperience}
            setRelevantExperience={setRelevantExperience}
          />
        );
      // STAR Example #1
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
      // STAR Example #2
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
      // Step 11: Final Preview
      case 11:
        return (
          <FinalPreview
            starExample1={{
              situation,
              task,
              action,
              result,
            }}
            starExample2={{
              situation: situationTwo,
              task: taskTwo,
              action: actionTwo,
              result: resultTwo,
            }}
            webhookResponse={webhookResponse}
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