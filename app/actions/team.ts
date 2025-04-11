"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function getTeamMembers() {
  try {
    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: true })

    if (error) {
      console.error("Error fetching team members:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getTeamMembers:", error)
    return []
  }
}
