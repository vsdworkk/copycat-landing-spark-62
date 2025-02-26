import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Download, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { generatePitchInsights } from "@/utils/ai";
import { toast } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useUser } from "@supabase/auth-helpers-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

// Extended pitch type with a document property
type Pitch = {
  id: number;
  role: string;
  company: string;
  date: string;
  status: string;
  insights: string;
  document?: string; // <--- for storing final doc preview
};

// Mock data for demonstration
const mockPitches: Pitch[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Tech Corp",
    date: "2024-03-15",
    status: "Completed",
    insights: "",
    document: "",
  },
  {
    id: 2,
    role: "Product Manager",
    company: "Innovation Inc",
    date: "2024-03-10",
    status: "Completed",
    insights: "",
    document: "",
  },
  {
    id: 3,
    role: "UX Designer",
    company: "Design Studio",
    date: "2024-03-05",
    status: "Completed",
    insights: "",
    document: "",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [pitches, setPitches] = useState<Pitch[]>(mockPitches);
  const [loading, setLoading] = useState<number | null>(null);
  const user = useUser();

  // For document preview
  const [selectedPitch, setSelectedPitch] = useState<Pitch | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle AI Insights
  const handleGenerateInsights = async (pitch: Pitch) => {
    setLoading(pitch.id);
    const insights = await generatePitchInsights(pitch.role, pitch.company);
    setLoading(null);

    if (insights) {
      setPitches((current) =>
        current.map((p) =>
          p.id === pitch.id
            ? { ...p, insights }
            : p
        )
      );
      toast.success("AI insights generated successfully!");
    }
  };

  // Handle "View" button => open doc preview
  const handleViewPitch = (pitch: Pitch) => {
    if (!pitch.document) {
      toast.error("No final document found for this pitch.");
      return;
    }
    setSelectedPitch(pitch);
    setIsDialogOpen(true);
  };

  // ----- NEW: Check localStorage for a "finalDoc" from the questionnaire's final step -----
  useEffect(() => {
    const finalDoc = localStorage.getItem("finalDoc");
    if (finalDoc) {
      // We'll add a new pitch (or you could merge into an existing pitch).
      const newPitch: Pitch = {
        id: pitches.length + 1,
        role: "APS Final Pitch",
        company: "N/A",
        date: new Date().toISOString().split("T")[0],
        status: "Completed",
        insights: "",
        document: finalDoc,
      };
      setPitches((prev) => [...prev, newPitch]);

      // Once consumed, remove from localStorage
      localStorage.removeItem("finalDoc");
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 bg-gradient-to-b from-gray-50 to-white p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Section with Welcome Message */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div className="space-y-1">
                  <h1 className="text-4xl font-bold text-gray-900">
                    Welcome Back
                    {user?.email ? `, ${user.email.split('@')[0]}` : ''}!
                  </h1>
                  <p className="text-gray-600">
                    View and manage your pitches below
                  </p>
                </div>
              </div>
              <Button
                onClick={() => navigate("/questionnaire")}
                size="lg"
                className="bg-[#4F67FF] hover:bg-[#4F67FF]/90 text-white font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                <Plus className="mr-2 h-5 w-5" /> Create New Pitch
              </Button>
            </div>

            {/* Pitches Table */}
            <Card className="p-6 shadow-md">
              <ScrollArea className="h-[400px] w-full rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Role</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                      <TableHead>Export</TableHead>
                      <TableHead>AI Insights</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pitches.map((pitch) => (
                      <TableRow key={pitch.id}>
                        <TableCell className="font-medium text-gray-900">
                          {pitch.role}
                        </TableCell>
                        <TableCell>{pitch.company}</TableCell>
                        <TableCell>
                          {new Date(pitch.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {pitch.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewPitch(pitch)}
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleGenerateInsights(pitch)}
                            disabled={loading === pitch.id}
                          >
                            <Sparkles className="h-4 w-4 mr-2" />
                            {loading === pitch.id
                              ? "Generating..."
                              : "Generate"}
                          </Button>
                          {pitch.insights && (
                            <div className="mt-2 text-sm text-gray-600">
                              {pitch.insights}
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </Card>
          </div>

          {/* Document Preview Dialog */}
          {selectedPitch && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedPitch.role} Document</DialogTitle>
                  <DialogDescription>
                    Preview of your final pitch document
                  </DialogDescription>
                </DialogHeader>
                <div className="my-4 p-3 border rounded-md bg-white max-h-[50vh] overflow-y-auto">
                  {selectedPitch.document ? (
                    /* Render as HTML so the user sees formatted text */
                    <div
                      className="prose text-sm leading-6"
                      dangerouslySetInnerHTML={{
                        __html: selectedPitch.document,
                      }}
                    />
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No document content found.
                    </p>
                  )}
                </div>
                <DialogFooter>
                  <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;