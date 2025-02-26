// src/integrations/supabase/client.ts

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// UPDATE these with your Supabase project info:
const SUPABASE_URL = "https://vkrjlbafqhhihtplmlqn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcmpsYmFmcWhoaWh0cGxtbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2ODY2MzAsImV4cCI6MjA1MjI2MjYzMH0.YGucuL0oQ-CexC6XK_8WVlKAEQoZc-kzp-rlVyK4Xh4";

// Create the typed Supabase client:
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);