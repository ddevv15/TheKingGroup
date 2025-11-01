"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { getSupabaseBrowserClient } from "@/lib/supabase"

// Input validation constants
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 255
const MAX_MESSAGE_LENGTH = 2000
const MIN_MESSAGE_LENGTH = 10

/**
 * Sanitizes user input to prevent XSS attacks
 * @param {string} input - User input string
 * @returns {string} Sanitized string
 */
function sanitizeInput(input) {
  if (typeof input !== "string") return ""
  // Remove potentially dangerous characters and encode HTML entities
  return input
    .replace(/[<>]/g, "") // Remove < and > characters
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH) // Enforce max length
}

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  if (!email) return true // Email is optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= MAX_EMAIL_LENGTH
}

export default function FeedbackForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [validationErrors, setValidationErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    let sanitizedValue = value

    // Apply length limits based on field type
    if (name === "name") {
      sanitizedValue = value.slice(0, MAX_NAME_LENGTH)
    } else if (name === "email") {
      sanitizedValue = value.slice(0, MAX_EMAIL_LENGTH)
    } else if (name === "message") {
      sanitizedValue = value.slice(0, MAX_MESSAGE_LENGTH)
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }))
    // Clear validation error for this field when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors = {}

    // Validate message (required)
    const sanitizedMessage = sanitizeInput(formData.message)
    if (!sanitizedMessage || sanitizedMessage.length < MIN_MESSAGE_LENGTH) {
      errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters long`
    }

    // Validate email format if provided
    if (formData.email && !isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    // Validate feedback type (should be one of allowed values)
    const allowedTypes = ["general", "bug", "feature", "improvement"]
    if (!allowedTypes.includes(formData.feedbackType)) {
      errors.feedbackType = "Invalid feedback type selected"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validate form before submission
    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      const supabase = getSupabaseBrowserClient()

      // Sanitize all inputs before sending to database
      const sanitizedData = {
        name: sanitizeInput(formData.name) || null,
        email: formData.email ? sanitizeInput(formData.email).toLowerCase() : null,
        feedback_type: formData.feedbackType,
        message: sanitizeInput(formData.message),
        page_url: typeof window !== "undefined" ? window.location.pathname : null, // Use pathname instead of full href for security
      }

      const { error } = await supabase.from("feedback").insert([sanitizedData])

      if (error) throw error

      setSubmitStatus("success")
      setFormData({ name: "", email: "", feedbackType: "general", message: "" })
      setValidationErrors({})

      // Close form after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      // Don't expose internal error details to users
      console.error("Error submitting feedback:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[100] transition-opacity" onClick={onClose} />

      {/* Slide-in Form */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-[101] transform transition-transform duration-300 ease-out overflow-y-auto">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Send Feedback</h2>
              <p className="text-sm text-gray-600 mt-1">Help us improve your experience</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close feedback form"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">Thank you for your feedback!</p>
              <p className="text-green-700 text-sm mt-1">We appreciate you taking the time to help us improve.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Something went wrong</p>
              <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={MAX_NAME_LENGTH}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  validationErrors.name ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Your name"
                aria-invalid={validationErrors.name ? "true" : "false"}
                aria-describedby={validationErrors.name ? "name-error" : undefined}
              />
              {validationErrors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {validationErrors.name}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">{formData.name.length}/{MAX_NAME_LENGTH} characters</p>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={MAX_EMAIL_LENGTH}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  validationErrors.email ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
                aria-invalid={validationErrors.email ? "true" : "false"}
                aria-describedby={validationErrors.email ? "email-error" : undefined}
              />
              {validationErrors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {validationErrors.email}
                </p>
              )}
            </div>

            {/* Feedback Type */}
            <div>
              <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Type <span className="text-red-500">*</span>
              </label>
              <select
                id="feedbackType"
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
              >
                <option value="general">General Feedback</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="improvement">Improvement Suggestion</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                minLength={MIN_MESSAGE_LENGTH}
                maxLength={MAX_MESSAGE_LENGTH}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
                  validationErrors.message ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Tell us what's on your mind..."
                aria-invalid={validationErrors.message ? "true" : "false"}
                aria-describedby={validationErrors.message ? "message-error" : "message-help"}
              />
              {validationErrors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                  {validationErrors.message}
                </p>
              )}
              <p id="message-help" className="text-xs text-gray-500 mt-1">
                {formData.message.length}/{MAX_MESSAGE_LENGTH} characters (minimum {MIN_MESSAGE_LENGTH} characters
                required)
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.message}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
