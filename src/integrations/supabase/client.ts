
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://icgtfegihzcybwvmrhuv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZ3RmZWdpaHpjeWJ3dm1yaHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2ODQ4NjUsImV4cCI6MjA1OTI2MDg2NX0.taCCJDhPb7jMpjtaYhQKikNOBsd3iO8PFPt-phX7hNg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
  global: {
    headers: {
      'x-application-name': 'budgetwise',
    },
  },
});
