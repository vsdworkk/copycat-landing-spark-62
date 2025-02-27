// src/utils/auth.ts

import { supabase } from "@/integrations/supabase/client";

/**
 * Checks if an email exists in the `profilesnew` table by querying the `emails` column.
 */
export const checkEmailExists = async (email: string) => {
  const { data, error } = await supabase
    .from("profilesnew")
    .select("email")
    .eq("email", email.toLowerCase())
    .limit(1);

  if (error) throw error;

  return {
    exists: data && data.length > 0,
    email: email.toLowerCase(),
  };
};