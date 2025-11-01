"use client"

import { createBrowserClient } from "@supabase/ssr"

let supabaseClient = null

/**
 * Validates required environment variables
 * @throws {Error} If required environment variables are missing
 */
function validateEnvVariables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing required Supabase environment variables. Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
    )
  }

  // Basic URL validation
  try {
    new URL(supabaseUrl)
  } catch {
    throw new Error("Invalid NEXT_PUBLIC_SUPABASE_URL format")
  }

  return { supabaseUrl, supabaseAnonKey }
}

/**
 * Gets or creates a Supabase browser client instance
 * @returns {import('@supabase/supabase-js').SupabaseClient}
 * @throws {Error} If environment variables are invalid or missing
 */
export function getSupabaseBrowserClient() {
  if (supabaseClient) {
    return supabaseClient
  }

  const { supabaseUrl, supabaseAnonKey } = validateEnvVariables()
  supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey)

  return supabaseClient
}
