"use client"

import type React from "react"

import Image from "next/image"
import { useState, useRef, useEffect, useMemo } from "react"
import { offices } from "@/data/offices"
import OfficeMarker from "./OfficeMarker"
import OfficeTooltip from "./OfficeTooltip"
import styles from "./global-reach-map.module.css"

export default function GlobalReachMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const memoizedOffices = useMemo(() => offices, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (mapContainerRef.current) {
        setMapDimensions({
          width: mapContainerRef.current.offsetWidth,
          height: mapContainerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleMarkerClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id)
  }

  const handleMapContainerClick = (e: React.MouseEvent) => {
    if (e.target === mapContainerRef.current) {
      setSelectedId(null)
    }
  }

  const selectedOffice = memoizedOffices.find((o) => o.id === selectedId)

  return (
    <section className={styles.section} aria-label="Global office locations">
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Global Reach</h2>
          <p className={styles.subtitle}>
            Our offices and partnerships span across continents, connecting businesses worldwide with tailored solutions
            and localized expertise.
          </p>
        </div>

        {/* Map Container */}
        <div className={`${styles.mapWrapper} ${isLoading ? styles.loading : ""}`}>
          <div
            className={styles.mapContainer}
            ref={mapContainerRef}
            onClick={handleMapContainerClick}
            role="region"
            aria-label="Interactive world map with office locations"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/worldmap-Nb3JGC4r9tRANgSswSWMyfHd8dtj4H.png"
              alt="World map showing global reach and office locations"
              width={1603}
              height={742}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className={styles.mapImage}
            />
            {/* Overlay container for markers */}
            <div className={styles.overlayContainer}>
              {memoizedOffices.map((office) => (
                <OfficeMarker
                  key={office.id}
                  lat={office.lat}
                  lng={office.lng}
                  isSelected={selectedId === office.id}
                  onClick={() => handleMarkerClick(office.id)}
                  isMobile={isMobile}
                  office={office}
                />
              ))}
            </div>

            {/* Show tooltip when office is selected */}
            {selectedOffice && mapDimensions.width > 0 && (
              <OfficeTooltip
                office={selectedOffice}
                containerWidth={mapDimensions.width}
                containerHeight={mapDimensions.height}
                onClose={() => setSelectedId(null)}
                isMobile={isMobile}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
