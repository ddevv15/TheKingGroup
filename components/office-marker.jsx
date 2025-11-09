"use client"

import { useRef, useEffect } from "react"

export default function OfficeMarker({ lat, lng, isSelected, onClick, isMobile = false, isTablet = false, office }) {
  const markerRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === "Enter" || e.key === " ") && markerRef.current === document.activeElement) {
        e.preventDefault()
        onClick()
      }
    }

    const marker = markerRef.current
    marker?.addEventListener("keydown", handleKeyDown)
    return () => marker?.removeEventListener("keydown", handleKeyDown)
  }, [onClick])

  return (
    <div
      ref={markerRef}
      className={`
        absolute -translate-x-1/2 -translate-y-full cursor-pointer transition-all duration-300
        ${isMobile ? 'w-5 h-5' : isTablet ? 'w-7 h-7' : 'w-6 h-6'}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
      `}
      style={{
        left: `${lng}%`,
        top: `${lat}%`,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={
        office
          ? `${office.name} office in ${office.city}, ${office.country}. ${isSelected ? "Selected" : ""}`
          : "Office marker"
      }
    >
      {/* Location pin icon */}
      <img
        src={isSelected ? '/blueGeo.png' : '/goldGeo.png'}
        alt=""
        className={`
          w-full h-full object-contain transition-all duration-300
          ${isSelected ? 'scale-110' : 'hover:scale-110'}
        `}
        aria-hidden="true"
      />
    </div>
  )
}

