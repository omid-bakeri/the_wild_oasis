import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://osbxuuhbjdwzxezghtga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zYnh1dWhiamR3enhlemdodGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MjY0MjgsImV4cCI6MjAxMDIwMjQyOH0.V-ld_PGoo__hqtdYrKa5Zm9HxJDKwMA4ejKlSMBWeRE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
