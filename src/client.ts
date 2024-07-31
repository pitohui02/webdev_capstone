import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zwjftropdormthafmzlp.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3amZ0cm9wZG9ybXRoYWZtemxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4ODI4MDEsImV4cCI6MjAzNzQ1ODgwMX0.tzuo-mdsoOZIsWxTbs7nPcaj-FkYRa1r8B_OyirzwSc";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
