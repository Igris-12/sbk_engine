import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vimqdmysutcbdliwxvae.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbXFkbXlzdXRjYmRsaXd4dmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzcxMjgsImV4cCI6MjA3NTE1MzEyOH0.oGmJX7xiW4wHeyytBqXPI5CGL6E9WDEC78WzoQlh2D0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
