import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://memrtorvnhkdjkrxqugn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbXJ0b3J2bmhrZGprcnhxdWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxODY5MjgsImV4cCI6MjAyMzc2MjkyOH0.bnrOel5mj0gysOpTxK9fC5WNRPi30oy3XpajnnCmXL8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
