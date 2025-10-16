"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"
import FeedbackForm from "./feedback-form"

export default function FeedbackButton() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-30 group focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
        aria-label="Send feedback"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Send Feedback
        </span>
      </button>

      {/* Feedback Form */}
      <FeedbackForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
