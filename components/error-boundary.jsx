"use client"

import { Component } from "react"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === "production") {
      console.error("Error caught by boundary:", error, errorInfo)
      // TODO: Send to error tracking service (e.g., Sentry, LogRocket)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          id="error-boundary-container"
          className="min-h-screen flex items-center justify-center bg-secondary p-6"
        >
          <div
            id="error-boundary-content"
            className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Something went wrong</h1>
            <p className="text-muted mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem
              persists.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null })
                window.location.href = "/"
              }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </button>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-muted">Error Details (Dev Only)</summary>
                <pre className="mt-2 text-xs bg-secondary p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

