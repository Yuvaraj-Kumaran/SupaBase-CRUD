import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!apiUrl || !apiKey) {
    throw new Error("Supabase environment variables are missing.");
}

export const supabase = createClient(apiUrl, apiKey);


