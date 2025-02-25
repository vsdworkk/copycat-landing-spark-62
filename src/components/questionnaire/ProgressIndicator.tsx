import { Progress } from "@/components/ui/progress";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep}
          </span>
          <span className="text-sm text-gray-400">
            of {totalSteps}
          </span>
        </div>
        <span className="text-sm font-medium text-emerald-500">
          +{Math.round(progress)}%
        </span>
      </div>
      <Progress value={progress} className="h-2 bg-gray-100" />
    </div>
  );
};