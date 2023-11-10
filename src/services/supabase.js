// installing supabase:
// npm install --save @supabase/supabase-js

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jhtdrdpwjinmueevrebv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodGRyZHB3amlubXVlZXZyZWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NjA3MTUsImV4cCI6MjAxMDQzNjcxNX0.WpP49j8RVOBHfrO18k2W4kY01iry7Ww9Zta83Ld9DTQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
