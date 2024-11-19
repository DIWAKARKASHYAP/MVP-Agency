import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL 
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient("https://ldcppuimhaqmiavqkssn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkY3BwdWltaGFxbWlhdnFrc3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMzQ0NjYsImV4cCI6MjA0NzYxMDQ2Nn0.4aTkh_SjReiP7lTY7r8-LoggRxMkeoQ1F6NlXysajcc")