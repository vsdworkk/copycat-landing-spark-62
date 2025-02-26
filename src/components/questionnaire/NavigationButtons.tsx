import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onFinalize: () => void;
}

export const NavigationButtons = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onFinalize,
}: NavigationButtonsProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (currentStep === 1) {
      navigate("/dashboard");
    } else {
      onPrevious();
    }
  };

  // Decide label for the "next" button
  // The step before final preview (totalSteps - 1) should show "Submit" instead of "Next".
  let nextButtonLabel = "Next";
  if (currentStep === totalSteps - 1) {
    nextButtonLabel = "Submit";
  }

  return (
    <div className="mt-8 flex justify-between gap-4">
      <Button
        variant="outline"
        onClick={handleBack}
        className="bg-gray-50 hover:bg-gray-100 border-gray-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      {currentStep === totalSteps ? (
        <Button
          onClick={onFinalize}
          className="bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white"
        >
          Finalise <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          onClick={onNext}
          className="bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white"
        >
          {nextButtonLabel} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};