// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://thgfmmndhlubbupcdvse.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2ZtbW5kaGx1YmJ1cGNkdnNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjY1MzcsImV4cCI6MjA1MjM0MjUzN30.8Tbw7LBfqX3CGHsYt0NafC_zk5bVUKlLVcjNsF6--u4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);