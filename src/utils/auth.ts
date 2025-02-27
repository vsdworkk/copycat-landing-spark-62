import { supabase } from "@/integrations/supabase/client";

export const checkEmailExists = async (email: string) => {
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('email')
    .eq('email', email.toLowerCase())
    .limit(1);

  if (error) throw error;

  return {
    exists: profiles && profiles.length > 0,
    email: email.toLowerCase()
  };
};