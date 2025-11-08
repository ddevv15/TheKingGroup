"use client"

import { useRef, useEffect } from "react"
import styles from "./office-marker.module.css"

interface OfficeMarkerProps {
  lat: number
  lng: number
  isSelected: boolean
  onClick: () => void
  isMobile?: boolean
  office?: { name: string; city: string; country: string }
}

export default function OfficeMarker({ lat, lng, isSelected, onClick, isMobile = false, office }: OfficeMarkerProps) {
  const markerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      className={`${styles.marker} ${isSelected ? styles.selected : ""} ${isMobile ? styles.markerMobile : ""}`}
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
    />
  )
}
