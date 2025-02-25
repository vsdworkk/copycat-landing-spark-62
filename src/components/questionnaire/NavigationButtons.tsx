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
          className="bg-[#FEC6A1] hover:bg-[#FEB68D] text-gray-800"
        >
          Finalise <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <Button
          onClick={onNext}
          className="bg-[#FEC6A1] hover:bg-[#FEB68D] text-gray-800"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};