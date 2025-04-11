"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function getProjects(category?: string) {
  try {
    const supabase = createServerSupabaseClient()

    let query = supabase.from("projects").select("*")

    if (category && category !== "all") {
      query = query.eq("category", category)
    }

    const { data, error } = await query.order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching projects:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getProjects:", error)
    return []
  }
}
