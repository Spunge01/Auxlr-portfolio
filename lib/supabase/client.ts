"use client"

import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/database.types"

// Create a single supabase client for the entire client-side application
let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

function createBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

export function getSupabaseBrowserClient() {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient()
  }
  return supabaseClient
}
