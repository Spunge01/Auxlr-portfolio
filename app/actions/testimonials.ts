"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function getTestimonials() {
  try {
    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase.from("testimonials").select("*").order("rating", { ascending: false })

    if (error) {
      console.error("Error fetching testimonials:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getTestimonials:", error)
    return []
  }
}
