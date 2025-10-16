"use client"

import { useMemo, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase"

export default function SupabaseHealthCheckPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const maskedAnonKey = useMemo(() => {
    if (!supabaseAnonKey) return ""
    const prefix = supabaseAnonKey.slice(0, 6)
    const suffix = supabaseAnonKey.slice(-4)
    return `${prefix}...${suffix}`
  }, [supabaseAnonKey])

  const [isSelecting, setIsSelecting] = useState(false)
  const [selectResult, setSelectResult] = useState(null)

  const [isInserting, setIsInserting] = useState(false)
  const [insertResult, setInsertResult] = useState(null)

  const handleTestSelect = async () => {
    setIsSelecting(true)
    setSelectResult(null)
    try {
      const supabase = getSupabaseBrowserClient()
      const { data, error } = await supabase.from("feedback").select("id").limit(1)
      if (error) throw error
      setSelectResult({ ok: true, count: Array.isArray(data) ? data.length : 0 })
    } catch (err) {
      setSelectResult({ ok: false, message: err?.message || String(err) })
    } finally {
      setIsSelecting(false)
    }
  }

  const handleTestInsert = async () => {
    setIsInserting(true)
    setInsertResult(null)
    try {
      const supabase = getSupabaseBrowserClient()
      const { error } = await supabase.from("feedback").insert([
        {
          name: "Health Check",
          email: null,
          feedback_type: "general",
          message: "Supabase connectivity check",
          page_url: typeof window !== "undefined" ? window.location.href : null,
        },
      ])
      if (error) throw error
      setInsertResult({ ok: true })
    } catch (err) {
      setInsertResult({ ok: false, message: err?.message || String(err) })
    } finally {
      setIsInserting(false)
    }
  }

  return (
    <div id="supabase-debug-root" className="container mx-auto px-6 py-10">
      <div id="supabase-debug-header" className="mb-8">
        <h1 className="text-3xl font-bold">Supabase Health Check</h1>
        <p className="text-muted">Use this page to verify your Supabase integration.</p>
      </div>

      <div id="supabase-debug-env-section" className="mb-8 space-y-2">
        <h2 className="text-xl font-semibold">Environment</h2>
        <div id="supabase-debug-env-url" className="text-sm">
          <span className="font-medium">NEXT_PUBLIC_SUPABASE_URL:</span> {supabaseUrl ? "Present" : "Missing"}
        </div>
        <div id="supabase-debug-env-anon" className="text-sm">
          <span className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY:</span> {supabaseAnonKey ? `Present (${maskedAnonKey})` : "Missing"}
        </div>
      </div>

      <div id="supabase-debug-actions" className="mb-8 flex flex-col gap-4">
        <button
          id="supabase-debug-test-select-btn"
          onClick={handleTestSelect}
          disabled={isSelecting}
          className="inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {isSelecting ? "Running select test..." : "Run SELECT test (feedback)"}
        </button>

        <div id="supabase-debug-select-result" className="text-sm">
          {selectResult && selectResult.ok && <span className="text-green-600">OK: SELECT succeeded</span>}
          {selectResult && !selectResult.ok && (
            <span className="text-red-600">Error: {selectResult.message}</span>
          )}
        </div>

        <button
          id="supabase-debug-test-insert-btn"
          onClick={handleTestInsert}
          disabled={isInserting}
          className="inline-flex w-fit items-center rounded-md bg-secondary px-4 py-2 border border-border hover:bg-secondary/80 disabled:opacity-60"
        >
          {isInserting ? "Running insert test..." : "Run INSERT test (feedback)"}
        </button>

        <div id="supabase-debug-insert-result" className="text-sm">
          {insertResult && insertResult.ok && <span className="text-green-600">OK: INSERT succeeded</span>}
          {insertResult && !insertResult.ok && (
            <span className="text-red-600">Error: {insertResult.message}</span>
          )}
        </div>
      </div>

      <div id="supabase-debug-notes" className="text-xs text-muted">
        Note: If SELECT or INSERT fails, check your Supabase URL/key and RLS policies for the `feedback` table.
      </div>
    </div>
  )
}


