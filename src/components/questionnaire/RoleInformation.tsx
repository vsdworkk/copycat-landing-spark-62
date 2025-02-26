import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RoleInformationProps {
  selectedRoleName: string;
  setSelectedRoleName: (value: string) => void;
  customRoleName: string;
  setCustomRoleName: (value: string) => void;
  roleLevel: string;
  setRoleLevel: (value: string) => void;
  pitchWordLimit: string;
  setPitchWordLimit: (value: string) => void;
  // Fix: Accept roleDescription and setRoleDescription
  roleDescription: string;
  setRoleDescription: (value: string) => void;
}

const roles = [
  // ... the existing categories/roles remain unchanged ...
];

export const RoleInformation = ({
  selectedRoleName,
  setSelectedRoleName,
  customRoleName,
  setCustomRoleName,
  roleLevel,
  setRoleLevel,
  pitchWordLimit,
  setPitchWordLimit,
  roleDescription,
  setRoleDescription,
}: RoleInformationProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Tell us about the role</h2>

      <div className="space-y-4">
        {/* Role Name Select */}
        <div className="space-y-2">
          <Label htmlFor="roleName">Role Name</Label>
          <Select
            value={selectedRoleName}
            onValueChange={setSelectedRoleName}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role..." />
            </SelectTrigger>
            <SelectContent>
              {roles.map((category) => (
                <div key={category.category}>
                  <h4 className="px-2 py-1 text-sm font-semibold text-gray-500 bg-gray-50">
                    {category.category}
                  </h4>
                  {category.roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Role Level */}
        <div className="space-y-2">
          <Label htmlFor="roleLevel">Role Level</Label>
          <Select value={roleLevel} onValueChange={setRoleLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="junior">Junior</SelectItem>
              <SelectItem value="mid-level">Mid-level</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
              <SelectItem value="lead">Lead</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Pitch Word Limit */}
        <div className="space-y-2">
          <Label htmlFor="pitchWordLimit">Pitch Word Limit</Label>
          <Select value={pitchWordLimit} onValueChange={setPitchWordLimit}>
            <SelectTrigger>
              <SelectValue placeholder="Select word limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500">500</SelectItem>
              <SelectItem value="650">&lt;650</SelectItem>
              <SelectItem value="750">750</SelectItem>
              <SelectItem value="1000">&lt;1000</SelectItem>
              <SelectItem value="1500">&lt;1500</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Role Description - Fix for text entry */}
        <div className="space-y-2">
          <Label htmlFor="roleDescription">Role Description</Label>
          <Textarea
            id="roleDescription"
            placeholder="Paste the role description here..."
            value={roleDescription}
            onChange={(e) => setRoleDescription(e.target.value)}
            className="min-h-[150px]"
          />
        </div>
      </div>
    </div>
  );
};