import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://vrswxoyyoajpyaqcwlav.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc3d4b3l5b2FqcHlhcWN3bGF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNzAxMjEsImV4cCI6MjAyMzc0NjEyMX0.qgPgnnwO39XJa5SKmcnkl9VjzMEBdNSpFFA9o4-ZGko";

export const supabase = createClient(supabaseUrl,supabaseAnonKey)