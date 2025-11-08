"use client"

import { useEffect, useRef } from "react"
import type { Office } from "@/data/offices"
import styles from "./office-tooltip.module.css"

interface OfficeTooltipProps {
  office: Office
  containerWidth: number
  containerHeight: number
  onClose: () => void
  isMobile?: boolean
}

export default function OfficeTooltip({
  office,
  containerWidth,
  containerHeight,
  onClose,
  isMobile = false,
}: OfficeTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile && tooltipRef.current) {
      const focusableElements = tooltipRef.current.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])')
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      tooltipRef.current.addEventListener("keydown", handleKeyDown)
      firstElement?.focus()

      return () => tooltipRef.current?.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobile])

  const TOOLTIP_WIDTH = isMobile ? containerWidth * 0.9 : 280
  const TOOLTIP_HEIGHT = isMobile ? 400 : 300
  const PADDING = 16

  const markerX = (office.lng / 100) * containerWidth

  let tooltipX = markerX
  let shouldOpenLeft = false

  if (!isMobile) {
    shouldOpenLeft = markerX > containerWidth * 0.6 // If past 60% of width, open left

    if (shouldOpenLeft) {
      // Position on left side of marker
      tooltipX = Math.max(PADDING, markerX - TOOLTIP_WIDTH - 12)
    } else {
      // Center on marker
      tooltipX = Math.max(TOOLTIP_WIDTH / 2 + PADDING, Math.min(markerX, containerWidth - TOOLTIP_WIDTH / 2 - PADDING))
    }
  }

  const baseTooltipY = (office.lat / 100) * containerHeight - 100
  const isNearTop = baseTooltipY < 50
  let tooltipY = isNearTop && !isMobile ? (office.lat / 100) * containerHeight + 50 : baseTooltipY

  // Constrain vertical to prevent bottom overflow
  tooltipY = Math.max(PADDING, Math.min(tooltipY, containerHeight - TOOLTIP_HEIGHT - PADDING))

  return (
    <div
      ref={tooltipRef}
      className={`${styles.tooltip} ${isMobile ? styles.tooltipMobile : ""} ${
        isNearTop && !isMobile ? styles.tooltipBelow : styles.tooltipAbove
      } ${shouldOpenLeft && !isMobile ? styles.tooltipLeft : ""}`}
      style={{
        left: isMobile ? "50%" : `${tooltipX}px`,
        top: isMobile ? "auto" : `${tooltipY}px`,
        bottom: isMobile ? "0" : "auto",
        transform: isMobile ? "translateX(-50%)" : "translateX(-50%)",
      }}
      role="tooltip"
      aria-label={`${office.name} office details`}
    >
      {!isMobile && <div className={styles.arrow} aria-hidden="true" />}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{office.name}</h3>
          <div className={styles.headerActions}>
            <span className={styles.badge}>{office.badge}</span>
            <button className={styles.closeButton} onClick={onClose} aria-label="Close office details" type="button">
              ×
            </button>
          </div>
        </div>

        <p className={styles.location}>
          {office.city}, {office.country}
        </p>

        <div className={styles.stats} role="region" aria-label="Office statistics">
          <div className={styles.stat}>
            <div className={styles.statLabel}>Partners</div>
            <div className={styles.statValue}>{office.partners}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Volume</div>
            <div className={styles.statValue}>{office.volume}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Growth</div>
            <div className={styles.statValue}>{office.growth}</div>
          </div>
        </div>

        <p className={styles.description}>{office.description}</p>

        <div className={styles.footer}>
          <span className={styles.region}>{office.region}</span>
          <a href="#" className={styles.link} aria-label={`View details for ${office.name}`}>
            View Details →
          </a>
        </div>
      </div>
    </div>
  )
}
