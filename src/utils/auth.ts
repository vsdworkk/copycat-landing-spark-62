import { supabase } from "@/integrations/supabase/client";

export const checkEmailExists = async (email: string) => {
  const { data: profilesnew, error } = await supabase
    .from('profilesnew')
    .select('email')
    .eq('email', email.toLowerCase())
    .limit(1);

  if (error) throw error;

  return {
    exists: profilesnew && profilesnew.length > 0,
    email: email.toLowerCase()
  };
};