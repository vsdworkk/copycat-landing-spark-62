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
import { Command } from "cmdk";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoleInformationProps {
  selectedRoleName: string;
  setSelectedRoleName: (value: string) => void;
  customRoleName: string;
  setCustomRoleName: (value: string) => void;
  roleLevel: string;
  setRoleLevel: (value: string) => void;
  pitchWordLimit: string;
  setPitchWordLimit: (value: string) => void;
  roleDescription?: string;
  setRoleDescription?: (value: string) => void;
}

const roles = [
  {
    category: "Healthcare Practitioners and Technical Occupations",
    roles: [
      "Chiropractor",
      "Dentist",
      "Dietitian or Nutritionist",
      "Optometrist",
      "Pharmacist",
      "Physician",
      "Physician Assistant",
      "Podiatrist",
      "Registered Nurse",
      "Therapist",
      "Veterinarian",
      "Health Technologist or Technician",
      "Other Healthcare Practitioners and Technical Occupation"
    ]
  },
  {
    category: "Healthcare Support Occupations",
    roles: [
      "Nursing, Psychiatric, or Home Health Aide",
      "Occupational and Physical Therapist Assistant or Aide",
      "Other Healthcare Support Occupation"
    ]
  },
  {
    category: "Business, Executive, Management, and Financial Occupations",
    roles: [
      "Chief Executive",
      "General and Operations Manager",
      "Advertising, Marketing, Promotions, Public Relations, and Sales Manager",
      "Operations Specialties Manager (e.g., IT or HR Manager)",
      "Construction Manager",
      "Engineering Manager",
      "Accountant, Auditor",
      "Business Operations or Financial Specialist",
      "Business Owner",
      "Other Business, Executive, Management, Financial Occupation"
    ]
  },
  {
    category: "Architecture and Engineering Occupations",
    roles: [
      "Architect, Surveyor, or Cartographer",
      "Engineer",
      "Other Architecture and Engineering Occupation"
    ]
  },
  {
    category: "Education, Training, and Library Occupations",
    roles: [
      "Postsecondary Teacher (e.g., College Professor)",
      "Primary, Secondary, or Special Education School Teacher",
      "Other Teacher or Instructor",
      "Other Education, Training, and Library Occupation"
    ]
  },
  {
    category: "Other Professional Occupations",
    roles: [
      "Arts, Design, Entertainment, Sports, and Media Occupations",
      "Computer Specialist, Mathematical Science",
      "Counselor, Social Worker, or Other Community and Social Service Specialist",
      "Lawyer, Judge",
      "Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)",
      "Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)",
      "Religious Worker (e.g., Clergy, Director of Religious Activities or Education)",
      "Social Scientist and Related Worker",
      "Other Professional Occupation"
    ]
  },
  {
    category: "Office and Administrative Support Occupations",
    roles: [
      "Supervisor of Administrative Support Workers",
      "Financial Clerk",
      "Secretary or Administrative Assistant",
      "Material Recording, Scheduling, and Dispatching Worker",
      "Other Office and Administrative Support Occupation"
    ]
  },
  {
    category: "Services Occupations",
    roles: [
      "Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)",
      "Chef or Head Cook",
      "Cook or Food Preparation Worker",
      "Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)",
      "Building and Grounds Cleaning and Maintenance",
      "Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)",
      "Sales Supervisor, Retail Sales",
      "Retail Sales Worker",
      "Insurance Sales Agent",
      "Sales Representative",
      "Real Estate Sales Agent",
      "Other Services Occupation"
    ]
  },
  {
    category: "Agriculture, Maintenance, Repair, and Skilled Crafts Occupations",
    roles: [
      "Construction and Extraction (e.g., Construction Laborer, Electrician)",
      "Farming, Fishing, and Forestry",
      "Installation, Maintenance, and Repair",
      "Production Occupations",
      "Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation"
    ]
  },
  {
    category: "Transportation Occupations",
    roles: [
      "Aircraft Pilot or Flight Engineer",
      "Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)",
      "Other Transportation Occupation"
    ]
  },
  {
    category: "Other Occupations",
    roles: [
      "Military",
      "Homemaker",
      "Other Occupation",
      "Don't Know",
      "Not Applicable"
    ]
  }
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
  roleDescription = "",
  setRoleDescription = () => {},
}: RoleInformationProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const allRoles = roles.flatMap(category => category.roles);
  const filteredRoles = allRoles.filter(role =>
    role.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Tell us about the role</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="roleName">Role Name</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {selectedRoleName
                  ? allRoles.find((role) => role === selectedRoleName)
                  : "Select a role..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <div className="flex items-center border-b px-3">
                  <Input
                    placeholder="Search roles..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="h-9 w-full border-0 bg-transparent p-2 shadow-none focus-visible:ring-0"
                  />
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {roles.map((category) => {
                    const categoryRoles = category.roles.filter((role) =>
                      role.toLowerCase().includes(searchValue.toLowerCase())
                    );
                    if (categoryRoles.length === 0) return null;
                    
                    return (
                      <div key={category.category}>
                        <h4 className="px-2 py-1 text-sm font-semibold text-gray-500 bg-gray-50">
                          {category.category}
                        </h4>
                        {categoryRoles.map((role) => (
                          <div
                            key={role}
                            className={cn(
                              "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100",
                              selectedRoleName === role && "bg-gray-100"
                            )}
                            onClick={() => {
                              setSelectedRoleName(role);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedRoleName === role ? "opacity-100" : "opacity-0"
                              )}
                            />
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  {filteredRoles.length === 0 && (
                    <p className="p-2 text-sm text-gray-500">No roles found.</p>
                  )}
                </div>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

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