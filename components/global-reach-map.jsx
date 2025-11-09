"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { offices } from "@/data/offices"
import OfficeMarker from "./office-marker"
import OfficeTooltip from "./office-tooltip"

export default function GlobalReachMap() {
  const [selectedId, setSelectedId] = useState(null)
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 })
  const [screenSize, setScreenSize] = useState('desktop') // 'mobile', 'tablet', 'desktop'
  const [isLoading, setIsLoading] = useState(true)
  const mapContainerRef = useRef(null)

  const memoizedOffices = useMemo(() => offices, [])

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])
  
  const isMobile = screenSize === 'mobile'
  const isTablet = screenSize === 'tablet'

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
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedId(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleMarkerClick = (id) => {
    setSelectedId(selectedId === id ? null : id)
  }

  const handleMapContainerClick = (e) => {
    // Only close if clicking directly on the container or the world map image (not marker images)
    if (e.target === mapContainerRef.current || (e.target.tagName === 'IMG' && e.target.alt === 'World map showing global reach and office locations')) {
      setSelectedId(null)
    }
  }

  const selectedOffice = memoizedOffices.find((o) => o.id === selectedId)

  return (
    <div className="w-full" aria-label="Global office locations">
      {/* Map Container */}
      <div
        className={`
          relative w-full
          transition-opacity duration-300
          ${isLoading ? 'opacity-70 pointer-events-none' : 'opacity-100'}
        `}
        style={{ aspectRatio: '1603 / 742' }}
      >
        <div
          className="relative w-full h-full"
          ref={mapContainerRef}
          onClick={handleMapContainerClick}
          role="region"
          aria-label="Interactive world map with office locations"
        >
          <img
            src="/worldmap.png"
            alt="World map showing global reach and office locations"
            className="w-full h-full object-contain"
            loading="eager"
            decoding="async"
          />
          
          {/* Overlay container for markers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full pointer-events-auto">
              {memoizedOffices.map((office) => (
                <OfficeMarker
                  key={office.id}
                  lat={office.lat}
                  lng={office.lng}
                  isSelected={selectedId === office.id}
                  onClick={() => handleMarkerClick(office.id)}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  office={office}
                />
              ))}
            </div>
          </div>

          {/* Show tooltip when office is selected */}
          {selectedOffice && mapDimensions.width > 0 && (
            <>
              {/* Backdrop for mobile and tablet */}
              {(isMobile || isTablet) && (
                <div
                  className="fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-200"
                  onClick={() => setSelectedId(null)}
                  aria-hidden="true"
                />
              )}
              <OfficeTooltip
                office={selectedOffice}
                containerWidth={mapDimensions.width}
                containerHeight={mapDimensions.height}
                onClose={() => setSelectedId(null)}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

