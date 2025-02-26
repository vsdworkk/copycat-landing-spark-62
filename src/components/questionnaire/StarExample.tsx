import React from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SubQuestion {
  label: string;
  placeholder?: string;
  value: string;
  setValue: (val: string) => void;
}

interface StarExampleProps {
  title: string;                 // e.g. "STAR Example #1: Situation"
  subQuestions: SubQuestion[];   // array of { label, placeholder, value, setValue }
}

/**
 * Renders a single STAR step with multiple sub-questions,
 * each sub-question has its own independent Textarea.
 */
export const StarExample = ({ title, subQuestions }: StarExampleProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <Card className="p-6 shadow-md">
        <div className="space-y-6">
          {subQuestions.map((q, idx) => (
            <div key={idx} className="space-y-2">
              <Label className="text-base font-semibold">{q.label}</Label>
              <Textarea
                placeholder={q.placeholder || ""}
                value={q.value}
                onChange={(e) => q.setValue(e.target.value)}
                className="min-h-[120px] resize-vertical"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};