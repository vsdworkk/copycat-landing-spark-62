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

  // ---------------------------------------
  // 1) ROLE & EXPERIENCE STATES
  // ---------------------------------------
  const [selectedRoleName, setSelectedRoleName] = useState<string>("");
  const [customRoleName, setCustomRoleName] = useState<string>("");
  const [roleLevel, setRoleLevel] = useState<string>("");
  const [pitchWordLimit, setPitchWordLimit] = useState<string>("");
  const [roleDescription, setRoleDescription] = useState<string>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  const [relevantExperience, setRelevantExperience] = useState<string>("");

  // ------------------------------------------------------
  // 2) STAR EXAMPLE #1: SITUATION (Step 3)
  // ------------------------------------------------------
  const [star1SituationContext, setStar1SituationContext] = useState("");
  const [star1SituationChallenge, setStar1SituationChallenge] = useState("");
  const [star1SituationInvolved, setStar1SituationInvolved] = useState("");

  // STAR EXAMPLE #1: TASK (Step 4)
  const [star1TaskResponsibility, setStar1TaskResponsibility] = useState("");
  const [star1TaskObjectives, setStar1TaskObjectives] = useState("");
  const [star1TaskConstraints, setStar1TaskConstraints] = useState("");

  // STAR EXAMPLE #1: ACTION (Step 5)
  const [star1ActionSteps, setStar1ActionSteps] = useState("");
  const [star1ActionSkills, setStar1ActionSkills] = useState("");
  const [star1ActionCollaboration, setStar1ActionCollaboration] = useState("");

  // STAR EXAMPLE #1: RESULT (Step 6)
  const [star1ResultOutcome, setStar1ResultOutcome] = useState("");
  const [star1ResultImpact, setStar1ResultImpact] = useState("");
  const [star1ResultQuantify, setStar1ResultQuantify] = useState("");

  // ------------------------------------------------------
  // 3) STAR EXAMPLE #2: SITUATION (Step 7)
  // ------------------------------------------------------
  const [star2SituationContext, setStar2SituationContext] = useState("");
  const [star2SituationChallenge, setStar2SituationChallenge] = useState("");
  const [star2SituationInvolved, setStar2SituationInvolved] = useState("");

  // STAR EXAMPLE #2: TASK (Step 8)
  const [star2TaskResponsibility, setStar2TaskResponsibility] = useState("");
  const [star2TaskObjectives, setStar2TaskObjectives] = useState("");
  const [star2TaskConstraints, setStar2TaskConstraints] = useState("");

  // STAR EXAMPLE #2: ACTION (Step 9)
  const [star2ActionSteps, setStar2ActionSteps] = useState("");
  const [star2ActionSkills, setStar2ActionSkills] = useState("");
  const [star2ActionCollaboration, setStar2ActionCollaboration] = useState("");

  // STAR EXAMPLE #2: RESULT (Step 10)
  const [star2ResultOutcome, setStar2ResultOutcome] = useState("");
  const [star2ResultImpact, setStar2ResultImpact] = useState("");
  const [star2ResultQuantify, setStar2ResultQuantify] = useState("");

  // Store webhook response to display in FinalPreview
  const [webhookResponse, setWebhookResponse] = useState<any>(null);

  // ---------------------------------------
  // Step nav
  // ---------------------------------------
  const handleNext = async () => {
    // On step 10 => next means "Submit" => post data
    if (currentStep === 10) {
      const dataToSend = {
        selectedRoleName,
        customRoleName,
        roleLevel,
        pitchWordLimit,
        roleDescription,
        yearsOfExperience,
        relevantExperience,
        // STAR #1
        star1SituationContext,
        star1SituationChallenge,
        star1SituationInvolved,
        star1TaskResponsibility,
        star1TaskObjectives,
        star1TaskConstraints,
        star1ActionSteps,
        star1ActionSkills,
        star1ActionCollaboration,
        star1ResultOutcome,
        star1ResultImpact,
        star1ResultQuantify,
        // STAR #2
        star2SituationContext,
        star2SituationChallenge,
        star2SituationInvolved,
        star2TaskResponsibility,
        star2TaskObjectives,
        star2TaskConstraints,
        star2ActionSteps,
        star2ActionSkills,
        star2ActionCollaboration,
        star2ResultOutcome,
        star2ResultImpact,
        star2ResultQuantify,
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

    // Advance to next step
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

  // ---------------------------------------
  // Step Render
  // ---------------------------------------
  const renderStep = () => {
    switch (currentStep) {
      // Step 1: Role Info
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
            roleDescription={roleDescription}
            setRoleDescription={setRoleDescription}
          />
        );
      // Step 2: Experience Info
      case 2:
        return (
          <ExperienceInformation
            yearsOfExperience={yearsOfExperience}
            setYearsOfExperience={setYearsOfExperience}
            relevantExperience={relevantExperience}
            setRelevantExperience={setRelevantExperience}
          />
        );

      // Steps 3-6 => STAR #1
      case 3:
        return (
          <StarExample
            title="STAR Example #1: Situation"
            subQuestions={[
              {
                label: "What was the context?",
                placeholder: "Set the scene - when/where did this happen?",
                value: star1SituationContext,
                setValue: setStar1SituationContext,
              },
              {
                label: "What was the challenge?",
                placeholder: "What problem needed solving?",
                value: star1SituationChallenge,
                setValue: setStar1SituationChallenge,
              },
              {
                label: "Who was involved?",
                placeholder: "Key players, your role, etc.",
                value: star1SituationInvolved,
                setValue: setStar1SituationInvolved,
              },
            ]}
          />
        );
      case 4:
        return (
          <StarExample
            title="STAR Example #1: Task"
            subQuestions={[
              {
                label: "What was your responsibility?",
                placeholder: "Describe your specific role or assignment",
                value: star1TaskResponsibility,
                setValue: setStar1TaskResponsibility,
              },
              {
                label: "What were your objectives?",
                placeholder: "What did you aim to achieve?",
                value: star1TaskObjectives,
                setValue: setStar1TaskObjectives,
              },
              {
                label: "What were the constraints?",
                placeholder: "Deadlines, resources, or requirements?",
                value: star1TaskConstraints,
                setValue: setStar1TaskConstraints,
              },
            ]}
          />
        );
      case 5:
        return (
          <StarExample
            title="STAR Example #1: Action"
            subQuestions={[
              {
                label: "What steps did you take?",
                placeholder: "Outline your approach step by step",
                value: star1ActionSteps,
                setValue: setStar1ActionSteps,
              },
              {
                label: "How did you use your skills?",
                placeholder: "Mention key expertise or skill sets you used",
                value: star1ActionSkills,
                setValue: setStar1ActionSkills,
              },
              {
                label: "How did you collaborate?",
                placeholder: "Did you work with others, lead a team, etc.?",
                value: star1ActionCollaboration,
                setValue: setStar1ActionCollaboration,
              },
            ]}
          />
        );
      case 6:
        return (
          <StarExample
            title="STAR Example #1: Result"
            subQuestions={[
              {
                label: "What was the outcome?",
                placeholder: "What did you achieve?",
                value: star1ResultOutcome,
                setValue: setStar1ResultOutcome,
              },
              {
                label: "What was the impact?",
                placeholder: "How did it benefit others or the company?",
                value: star1ResultImpact,
                setValue: setStar1ResultImpact,
              },
              {
                label: "Can you quantify it?",
                placeholder: "Include metrics or data if possible",
                value: star1ResultQuantify,
                setValue: setStar1ResultQuantify,
              },
            ]}
          />
        );

      // Steps 7-10 => STAR #2
      case 7:
        return (
          <StarExample
            title="STAR Example #2: Situation"
            subQuestions={[
              {
                label: "What was the context?",
                placeholder: "Set the scene for your second example",
                value: star2SituationContext,
                setValue: setStar2SituationContext,
              },
              {
                label: "What was the challenge?",
                placeholder: "What problem or challenge needed solving?",
                value: star2SituationChallenge,
                setValue: setStar2SituationChallenge,
              },
              {
                label: "Who was involved?",
                placeholder: "Key players, your role, etc.",
                value: star2SituationInvolved,
                setValue: setStar2SituationInvolved,
              },
            ]}
          />
        );
      case 8:
        return (
          <StarExample
            title="STAR Example #2: Task"
            subQuestions={[
              {
                label: "What was your responsibility?",
                placeholder: "Your specific assignment or role",
                value: star2TaskResponsibility,
                setValue: setStar2TaskResponsibility,
              },
              {
                label: "What were your objectives?",
                placeholder: "What did you aim to achieve?",
                value: star2TaskObjectives,
                setValue: setStar2TaskObjectives,
              },
              {
                label: "What were the constraints?",
                placeholder: "Deadlines, resources, or special requirements?",
                value: star2TaskConstraints,
                setValue: setStar2TaskConstraints,
              },
            ]}
          />
        );
      case 9:
        return (
          <StarExample
            title="STAR Example #2: Action"
            subQuestions={[
              {
                label: "What steps did you take?",
                placeholder: "Step by step how you approached it",
                value: star2ActionSteps,
                setValue: setStar2ActionSteps,
              },
              {
                label: "How did you use your skills?",
                placeholder: "What expertise did you apply?",
                value: star2ActionSkills,
                setValue: setStar2ActionSkills,
              },
              {
                label: "How did you collaborate?",
                placeholder: "Did you work with a team?",
                value: star2ActionCollaboration,
                setValue: setStar2ActionCollaboration,
              },
            ]}
          />
        );
      case 10:
        return (
          <StarExample
            title="STAR Example #2: Result"
            subQuestions={[
              {
                label: "What was the outcome?",
                placeholder: "What changed because of your efforts?",
                value: star2ResultOutcome,
                setValue: setStar2ResultOutcome,
              },
              {
                label: "What was the impact?",
                placeholder: "How did it benefit the team/client?",
                value: star2ResultImpact,
                setValue: setStar2ResultImpact,
              },
              {
                label: "Can you quantify it?",
                placeholder: "Numbers, percentages, or measurable results?",
                value: star2ResultQuantify,
                setValue: setStar2ResultQuantify,
              },
            ]}
          />
        );

      // Step 11: Final Preview
      case 11:
        return (
          <FinalPreview
            webhookResponse={webhookResponse}
            starExample1={{
              // Combine each sub-field with newlines or keep them separate
              situation: `${star1SituationContext}\n${star1SituationChallenge}\n${star1SituationInvolved}`,
              task: `${star1TaskResponsibility}\n${star1TaskObjectives}\n${star1TaskConstraints}`,
              action: `${star1ActionSteps}\n${star1ActionSkills}\n${star1ActionCollaboration}`,
              result: `${star1ResultOutcome}\n${star1ResultImpact}\n${star1ResultQuantify}`,
            }}
            starExample2={{
              situation: `${star2SituationContext}\n${star2SituationChallenge}\n${star2SituationInvolved}`,
              task: `${star2TaskResponsibility}\n${star2TaskObjectives}\n${star2TaskConstraints}`,
              action: `${star2ActionSteps}\n${star2ActionSkills}\n${star2ActionCollaboration}`,
              result: `${star2ResultOutcome}\n${star2ResultImpact}\n${star2ResultQuantify}`,
            }}
          />
        );

      default:
        return <div>Step {currentStep} content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-12">
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
  );
};

export default Questionnaire;