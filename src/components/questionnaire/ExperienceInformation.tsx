import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EXPERIENCE_LEVELS = [
  "Less than 1 year",
  "1-2 years",
  "2-5 years",
  "5-10 years",
  "10+ years"
] as const;

interface ExperienceInformationProps {
  yearsOfExperience: string;
  setYearsOfExperience: (value: string) => void;
  relevantExperience: string;
  setRelevantExperience: (value: string) => void;
}

export const ExperienceInformation = ({
  yearsOfExperience,
  setYearsOfExperience,
  relevantExperience,
  setRelevantExperience,
}: ExperienceInformationProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically handle the file upload
      console.log("File selected:", file.name);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Tell us about your experience</h2>
      <p className="text-gray-600">
        Help us understand your background and expertise in this field.
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="yearsOfExperience">Years of Experience</Label>
          <Select
            value={yearsOfExperience}
            onValueChange={setYearsOfExperience}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              {EXPERIENCE_LEVELS.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="relevantExperience">Relevant Experience</Label>
          <Textarea
            id="relevantExperience"
            value={relevantExperience}
            onChange={(e) => setRelevantExperience(e.target.value)}
            placeholder="Describe your relevant experience, including key achievements and responsibilities in previous roles"
            className="min-h-[200px]"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="resume">Resume</Label>
          <Input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Accepted formats: PDF, DOC, DOCX
          </p>
        </div>
      </div>
    </div>
  );
};