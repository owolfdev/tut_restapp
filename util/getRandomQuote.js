import { createClient } from "@supabase/supabase-js";
const { NEXT_PUBLIC_SUPA_URL, NEXT_PUBLIC_SUPA_KEY } = process.env;

const supabase = createClient(NEXT_PUBLIC_SUPA_URL, NEXT_PUBLIC_SUPA_KEY);

export async function getRandomQuote() {
  const rows = await supabase.from("quotes").select("quote");
  const length = rows.data.length;
  const maxIndex = length - 1;
  const randomIndex = Math.round(Math.random() * maxIndex);
  const row = rows.data[randomIndex];
  return {
    row,
  };
}
