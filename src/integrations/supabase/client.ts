// src/integrations/supabase/client.ts

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Updated with your new project URL and anon key:
const SUPABASE_URL = "https://mczegdmedsyvumixzoym.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jemVnZG1lZHN5dnVtaXh6b3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Njg1OTgsImV4cCI6MjA1NjE0NDU5OH0.h2eF46n9Jfu1iocs90V0i6hqbWusqWR2kBwkoEQ8wCs";

// Create the typed Supabase client:
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);