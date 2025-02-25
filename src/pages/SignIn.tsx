import { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AuthError } from "@supabase/supabase-js";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to auth page if no email is provided
  if (!email) {
    return <Navigate to="/auth" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Success - redirect to dashboard
      navigate('/dashboard');
      toast.success("Successfully signed in!");
    } catch (error) {
      console.error('Error:', error);
      let message = "An error occurred while signing in.";
      
      if (error instanceof AuthError) {
        switch (error.message) {
          case "Invalid login credentials":
            message = "Invalid password. Please try again.";
            break;
          case "Email not confirmed":
            message = "Please verify your email before signing in.";
            break;
          default:
            message = error.message;
        }
      }
      
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your password to continue
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              value={email}
              disabled
              className="bg-muted"
            />
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;