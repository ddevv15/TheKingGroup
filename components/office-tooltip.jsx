"use client"

import { useEffect, useRef } from "react"

export default function OfficeTooltip({
  office,
  containerWidth,
  containerHeight,
  onClose,
  isMobile = false,
  isTablet = false,
}) {
  const tooltipRef = useRef(null)

  useEffect(() => {
    // Lock body scroll when mobile modal is open
    if (isMobile && typeof window !== 'undefined' && typeof document !== 'undefined') {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isMobile])

  useEffect(() => {
    if ((isMobile || isTablet) && tooltipRef.current) {
      const focusableElements = tooltipRef.current.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])')
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
        if (e.key === "Escape") {
          onClose()
        }
      }

      tooltipRef.current.addEventListener("keydown", handleKeyDown)
      firstElement?.focus()

      return () => tooltipRef.current?.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobile, isTablet, onClose])

  // Responsive tooltip dimensions
  const TOOLTIP_WIDTH = isMobile 
    ? containerWidth * 0.9 
    : isTablet 
      ? Math.min(containerWidth * 0.75, 500) 
      : 320
  const TOOLTIP_HEIGHT = isMobile ? 400 : isTablet ? 350 : 300
  const PADDING = 16

  const markerX = (office.lng / 100) * containerWidth

  let tooltipX = markerX
  let shouldOpenLeft = false

  // Desktop: Smart positioning (left/right/center based on marker position)
  if (!isMobile && !isTablet) {
    shouldOpenLeft = markerX > containerWidth * 0.6

    if (shouldOpenLeft) {
      tooltipX = Math.max(PADDING, markerX - TOOLTIP_WIDTH - 12)
    } else {
      tooltipX = Math.max(TOOLTIP_WIDTH / 2 + PADDING, Math.min(markerX, containerWidth - TOOLTIP_WIDTH / 2 - PADDING))
    }
  }

  // Vertical positioning
  const baseTooltipY = (office.lat / 100) * containerHeight - 100
  const isNearTop = baseTooltipY < 50
  let tooltipY = isNearTop && !isMobile && !isTablet 
    ? (office.lat / 100) * containerHeight + 50 
    : baseTooltipY

  tooltipY = Math.max(PADDING, Math.min(tooltipY, containerHeight - TOOLTIP_HEIGHT - PADDING))

  // Determine if tooltip should be modal (mobile/tablet) or floating (desktop)
  const isModal = isMobile || isTablet

  return (
    <>
      {/* Mobile: Centered modal popup from bottom */}
      {isMobile ? (
        <div
          ref={tooltipRef}
          className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl border-t border-gray-200 animate-in slide-in-from-bottom duration-300 ease-out"
          style={{
            maxHeight: '85vh',
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${office.name} office details`}
        >
          {/* Handle bar for mobile */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" aria-hidden="true" />
          </div>
          
          <div className="px-5 pb-6 max-h-[calc(85vh-2rem)] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 pr-2">{office.name}</h3>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full whitespace-nowrap">
                  {office.badge}
                </span>
                <button
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
                  onClick={onClose}
                  aria-label="Close office details"
                  type="button"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Location */}
            <p className="text-base text-gray-600 mb-5">
              {office.city}, {office.country}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5" role="region" aria-label="Office statistics">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 mb-1.5">Partners</div>
                <div className="text-lg font-bold text-gray-900">{office.partners}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 mb-1.5">Volume</div>
                <div className="text-lg font-bold text-gray-900">{office.volume}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 mb-1.5">Growth</div>
                <div className="text-lg font-bold text-primary">{office.growth}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {office.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-500">{office.region}</span>
              <a
                href="/global-presence"
                className="text-base font-semibold text-primary hover:text-accent transition-colors touch-manipulation"
                aria-label={`View details for ${office.name}`}
              >
                View Details →
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Tablet/Desktop: Floating tooltip */
        <div
          ref={tooltipRef}
          className={`
            absolute z-50 bg-white rounded-lg shadow-xl border border-gray-200
            ${isTablet ? 'left-1/2 -translate-x-1/2 bottom-8 w-11/12 max-w-lg' : ''}
            animate-in fade-in ${isTablet ? 'slide-in-from-bottom-4' : ''} duration-200
          `}
          style={{
            left: isTablet ? '50%' : `${tooltipX}px`,
            top: isTablet ? 'auto' : `${tooltipY}px`,
            bottom: isTablet ? '2rem' : 'auto',
            width: !isTablet ? `${TOOLTIP_WIDTH}px` : undefined,
            transform: isTablet ? 'translateX(-50%)' : 'translateX(-50%)',
            maxHeight: isTablet ? '80vh' : 'none',
          }}
          role="tooltip"
          aria-label={`${office.name} office details`}
        >
          <div className={`${isTablet ? 'p-5' : 'p-6'} ${isTablet ? 'max-h-[70vh] overflow-y-auto' : ''}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900 pr-2">{office.name}</h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full whitespace-nowrap">
                  {office.badge}
                </span>
                <button
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={onClose}
                  aria-label="Close office details"
                  type="button"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Location */}
            <p className="text-sm text-gray-600 mb-4">
              {office.city}, {office.country}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4" role="region" aria-label="Office statistics">
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 mb-1">Partners</div>
                <div className="text-base font-bold text-gray-900">{office.partners}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 mb-1">Volume</div>
                <div className="text-base font-bold text-gray-900">{office.volume}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 mb-1">Growth</div>
                <div className="text-base font-bold text-primary">{office.growth}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {office.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs font-medium text-gray-500">{office.region}</span>
              <a
                href="/global-presence"
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
                aria-label={`View details for ${office.name}`}
              >
                View Details →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

