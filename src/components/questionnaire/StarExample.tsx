import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

interface StarExampleProps {
  section: "situation" | "task" | "action" | "result";
  value: string;
  setValue: (value: string) => void;
  currentStep?: number;
}

const sectionData = {
  situation: {
    title: "Situation",
    description: "Tell us about a specific situation that showcases your skills ✨",
    questions: [
      {
        label: "What was the context?",
        placeholder: "Set the scene - when and where did this happen?",
        hint: "Describe the setting and circumstances"
      },
      {
        label: "What was the challenge?",
        placeholder: "What problem needed solving?",
        hint: "Explain the specific issue or opportunity"
      },
      {
        label: "Who was involved?",
        placeholder: "Who were the key players?",
        hint: "Mention your role and other stakeholders"
      }
    ],
    tips: [
      "Be specific about when and where the situation occurred",
      "Focus on one clear challenge or problem"
    ]
  },
  task: {
    title: "Task",
    description: "What were you responsible for in this situation? 🎯",
    questions: [
      {
        label: "What was your responsibility?",
        placeholder: "What were you asked to do?",
        hint: "Define your role and expectations"
      },
      {
        label: "What were your objectives?",
        placeholder: "What did you aim to achieve?",
        hint: "List your specific goals"
      },
      {
        label: "What were the constraints?",
        placeholder: "What limitations did you face?",
        hint: "Mention deadlines, resources, or requirements"
      }
    ],
    tips: [
      "Clearly outline your specific responsibilities",
      "Explain what success looked like"
    ]
  },
  action: {
    title: "Action",
    description: "What steps did you take to address the situation? 🚀",
    questions: [
      {
        label: "What steps did you take?",
        placeholder: "What actions did you initiate?",
        hint: "Describe your approach step by step"
      },
      {
        label: "How did you use your skills?",
        placeholder: "What expertise did you apply?",
        hint: "Highlight your key competencies"
      },
      {
        label: "How did you collaborate?",
        placeholder: "How did you work with others?",
        hint: "Describe your teamwork approach"
      }
    ],
    tips: [
      "Break down your actions step by step",
      "Focus on what YOU did (use 'I' not 'we')"
    ]
  },
  result: {
    title: "Result",
    description: "What were the outcomes of your actions? 🎉",
    questions: [
      {
        label: "What was the outcome?",
        placeholder: "What did you achieve?",
        hint: "Share the direct results"
      },
      {
        label: "What was the impact?",
        placeholder: "How did it benefit others?",
        hint: "Explain the broader effects"
      },
      {
        label: "Can you quantify it?",
        placeholder: "Any numbers to share?",
        hint: "Include metrics if possible"
      }
    ],
    tips: [
      "Use specific numbers and metrics",
      "Highlight both immediate and long-term impact"
    ]
  }
};

export const StarExample = ({ section, value, setValue, currentStep }: StarExampleProps) => {
  const currentSection = sectionData[section];
  const [openTipIndex, setOpenTipIndex] = useState<number | null>(null);

  const isSecondExample = currentStep && currentStep >= 7;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-black">
          Build Your Star Example {isSecondExample ? "#2" : "#1"}
        </h2>
        <p className="text-gray-600 text-lg">
          {currentSection.description}
        </p>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Tips panel with collapsible content */}
        <Card className="col-span-12 py-6 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 animate-fade-up animation-delay-200">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Tips for {currentSection.title}
              </h3>
            </div>
            <div className="grid gap-3">
              {currentSection.tips.map((tip, index) => (
                <Collapsible
                  key={index}
                  open={openTipIndex === index}
                  onOpenChange={() => setOpenTipIndex(openTipIndex === index ? null : index)}
                >
                  <CollapsibleTrigger className="flex items-start gap-3 w-full text-left p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <ChevronDown className={`w-5 h-5 text-primary mt-0.5 transition-transform ${
                      openTipIndex === index ? 'rotate-180' : ''
                    }`} />
                    <div>
                      <span className="text-gray-700 font-medium">{tip}</span>
                      <CollapsibleContent className="text-sm text-gray-500 mt-2">
                        Click to see more details about this tip...
                      </CollapsibleContent>
                    </div>
                  </CollapsibleTrigger>
                </Collapsible>
              ))}
            </div>
          </div>
        </Card>

        {/* Main content panel with enhanced visuals */}
        <Card className="col-span-12 p-8 animate-fade-up shadow-lg">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              {currentSection.title}
              {value.length > 10 && (
                <CheckCircle2 className="w-6 h-6 text-green-500 animate-fade-in" />
              )}
            </h3>
            {currentSection.questions.map((question, qIndex) => (
              <div key={qIndex} className="space-y-3 group">
                <Label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {question.label}
                  {value.length > 0 && qIndex === 0 && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 animate-fade-in" />
                  )}
                </Label>
                <p className="text-base text-gray-600">
                  {question.hint}
                </p>
                <div className="relative">
                  <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={question.placeholder}
                    className="min-h-[120px] text-base transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:border-primary group-hover:border-gray-400"
                  />
                  <div className="h-1 w-full bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-primary/60 transition-all duration-300 rounded-full"
                      style={{ 
                        width: `${Math.min((value.length / 100) * 100, 100)}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
