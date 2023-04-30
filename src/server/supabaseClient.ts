import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zjiploxydrjwjnbstxib.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaXBsb3h5ZHJqd2puYnN0eGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2OTY5OTUsImV4cCI6MTk5ODI3Mjk5NX0.Y-CrpQTLFYmx_yo5qi9yYArCPgWd80CIlbg-a6G3eBU"
);
