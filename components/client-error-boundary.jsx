"use client"

import { ErrorBoundary } from "./error-boundary"

export default function ClientErrorBoundary({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}

