// "use client"

// import { useLayoutEffect, useRef, useState } from "react"
// import { gsap } from "gsap"
// import Link from "next/link"
// import { ArrowUpRight } from "lucide-react"

// const CardNav = ({
//   logo,
//   logoAlt = "Logo",
//   items,
//   className = "",
//   ease = "power3.out",
//   baseColor = "#fff",
//   menuColor,
//   buttonBgColor,
//   buttonTextColor,
//   buttonHref = "/contact",
// }) => {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
//   const [isExpanded, setIsExpanded] = useState(false)
//   const navRef = useRef(null)
//   const cardsRef = useRef([])
//   const tlRef = useRef(null)

//   const calculateHeight = () => {
//     const navEl = navRef.current
//     if (!navEl) return 260

//     if (typeof window === "undefined") return 260
//     const isMobile = window.matchMedia("(max-width: 768px)").matches
//     if (isMobile) {
//       const contentEl = navEl.querySelector(".card-nav-content")
//       if (contentEl) {
//         const wasVisible = contentEl.style.visibility
//         const wasPointerEvents = contentEl.style.pointerEvents
//         const wasPosition = contentEl.style.position
//         const wasHeight = contentEl.style.height

//         contentEl.style.visibility = "visible"
//         contentEl.style.pointerEvents = "auto"
//         contentEl.style.position = "static"
//         contentEl.style.height = "auto"

//         contentEl.offsetHeight

//         const topBar = 60
//         const padding = 16
//         const contentHeight = contentEl.scrollHeight

//         contentEl.style.visibility = wasVisible
//         contentEl.style.pointerEvents = wasPointerEvents
//         contentEl.style.position = wasPosition
//         contentEl.style.height = wasHeight

//         return topBar + contentHeight + padding
//       }
//     }
//     return 260
//   }

//   const createTimeline = () => {
//     const navEl = navRef.current
//     if (!navEl) return null

//     // GPU-accelerated initial states
//     gsap.set(navEl, { height: 60, overflow: "hidden", force3D: true })
//     gsap.set(cardsRef.current, { 
//       y: 50, 
//       opacity: 0,
//       force3D: true,
//       transformOrigin: "center center"
//     })

//     const tl = gsap.timeline({ paused: true })

//     tl.to(navEl, {
//       height: calculateHeight,
//       duration: 0.4,
//       ease,
//       force3D: true,
//     })

//     tl.to(cardsRef.current, { 
//       y: 0, 
//       opacity: 1, 
//       duration: 0.4, 
//       ease, 
//       stagger: 0.08,
//       force3D: true,
//     }, "-=0.1")

//     return tl
//   }

//   useLayoutEffect(() => {
//     const tl = createTimeline()
//     tlRef.current = tl

//     return () => {
//       tl?.kill()
//       tlRef.current = null
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [ease, items])

//   useLayoutEffect(() => {
//     if (typeof window === "undefined") return

//     const handleResize = () => {
//       if (!tlRef.current) return

//       if (isExpanded) {
//         const newHeight = calculateHeight()
//         gsap.set(navRef.current, { height: newHeight })

//         tlRef.current.kill()
//         const newTl = createTimeline()
//         if (newTl) {
//           newTl.progress(1)
//           tlRef.current = newTl
//         }
//       } else {
//         tlRef.current.kill()
//         const newTl = createTimeline()
//         if (newTl) {
//           tlRef.current = newTl
//         }
//       }
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isExpanded])

//   const toggleMenu = () => {
//     const tl = tlRef.current
//     if (!tl) return
//     if (!isExpanded) {
//       setIsHamburgerOpen(true)
//       setIsExpanded(true)
//       tl.play(0)
//     } else {
//       setIsHamburgerOpen(false)
//       tl.eventCallback("onReverseComplete", () => setIsExpanded(false))
//       tl.reverse()
//     }
//   }

//   const setCardRef = (i) => (el) => {
//     if (el) cardsRef.current[i] = el
//   }

//   return (
//     <div
//       className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
//     >
//       <nav
//         ref={navRef}
//         className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-xl shadow-lg relative overflow-hidden will-change-[height]`}
//         style={{ backgroundColor: baseColor }}
//       >
//         <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
//           <div
//             className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
//             onClick={toggleMenu}
//             role="button"
//             aria-label={isExpanded ? "Close menu" : "Open menu"}
//             tabIndex={0}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" || e.key === " ") {
//                 e.preventDefault()
//                 toggleMenu()
//               }
//             }}
//             style={{ color: menuColor || "#000" }}
//           >
//             <div
//               className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                 isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
//               } group-hover:opacity-75`}
//             />
//             <div
//               className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                 isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
//               } group-hover:opacity-75`}
//             />
//           </div>

//           <Link
//             href="/"
//             className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-md"
//             onClick={(e) => {
//               // Remove focus after click to prevent focus ring from persisting
//               if (typeof document !== "undefined") {
//                 setTimeout(() => {
//                   if (document.activeElement === e.currentTarget) {
//                     e.currentTarget.blur()
//                   }
//                 }, 0)
//               }
//             }}
//           >
//             {logo ? (
//               <img src={logo || "/placeholder.svg"} alt={logoAlt} className="logo h-[28px]" />
//             ) : (
//               <span id="navbar-brand-the-king-group" className="text-xl font-bold" style={{ color: menuColor || "#000", fontFamily: 'DM Serif Display, Georgia, serif' }}>
//                 {logoAlt}
//               </span>
//             )}
//           </Link>

//           <Link
//             href={buttonHref}
//             className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 h-full font-medium cursor-pointer transition-all duration-300 items-center hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//             style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
//           >
//             Get Started
//           </Link>
//         </div>

//         <div
//           className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
//             isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
//           } md:flex-row md:items-end md:gap-[12px]`}
//           aria-hidden={!isExpanded}
//         >
//           {(items || []).slice(0, 3).map((item, idx) => (
//             <div
//               key={`${item.label}-${idx}`}
//               className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
//               ref={setCardRef(idx)}
//               style={{ backgroundColor: item.bgColor, color: item.textColor }}
//             >
//               <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
//                 {item.label}
//               </div>
//               <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
//                 {item.links?.map((lnk, i) => (
//                   <Link
//                     key={`${lnk.label}-${i}`}
//                     className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm"
//                     href={lnk.href}
//                     aria-label={lnk.ariaLabel}
//                   >
//                     <ArrowUpRight className="nav-card-link-icon shrink-0 w-4 h-4" aria-hidden="true" />
//                     {lnk.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default CardNav


"use client"

import { useLayoutEffect, useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const CardNav = ({
  logo,
  logoAlt = "Logo",
  items = [],
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
  buttonHref = "/contact",
}) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const navRef = useRef(null)
  const dropdownRefs = useRef({})
  const closeTimeoutRef = useRef(null)

  // Build menu items from props
  const menuItems = {
    about: {
      label: "About",
      items: items.find((item) => item.label === "Company")?.links || [
        { label: "About Us", href: "/about" },
        { label: "Board & Leadership", href: "/leadership" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Global Presence", href: "/global-presence" },
      ],
    },
    products: {
      label: "Products",
      items: items.find((item) => item.label === "Products")?.links || [
        { label: "Products Overview", href: "/products/overview" },
        { label: "Product Catalog", href: "/products" },
      ],
    },
    contact: {
      label: "Contact",
      items: items.find((item) => item.label === "Connect")?.links || [
        { label: "Contact Us", href: "/contact" },
      ],
    },
  }

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  const handleMouseEnter = (key) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(key)
  }

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow cursor movement
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  // Animate dropdown with GSAP
  useLayoutEffect(() => {
    if (openDropdown && dropdownRefs.current[openDropdown]) {
      const dropdown = dropdownRefs.current[openDropdown]
      gsap.fromTo(
        dropdown.querySelectorAll(".dropdown-item"),
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease, force3D: true },
      )
    }
  }, [openDropdown, ease])

  return (
    <div
      className={`card-nav-container fixed left-0 right-0 top-0 z-[99] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav w-full bg-transparent md:bg-transparent ${
          isHamburgerOpen ? "backdrop-blur-md bg-white/90" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left */}
          <Link
            href="/"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-md"
          >
            {logo ? (
                <img src={logo || "/placeholder.svg"} alt={logoAlt} className="h-7 md:h-8" />
              ) : (
              <span
                id="navbar-brand-the-king-group"
                className="text-xl md:text-2xl font-bold"
                style={{ color: "#ffffff", fontFamily: "DM Serif Display, Georgia, serif" }}
              >
                {logoAlt}
              </span>
            )}
          </Link>

            {/* Navigation Menu - Center */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {Object.entries(menuItems).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  data-dropdown={key}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 pointer-events-auto"
                    style={{ color: "#ffffff" }}
                  >
                    {menu.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === key && (
                    <div
                      ref={(el) => {
                        if (el) dropdownRefs.current[key] = el
                      }}
                      className="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-xl border border-gray-100 bg-white overflow-hidden pointer-events-auto"
                      style={{ zIndex: 1000 }}
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="dropdown-item block px-4 py-3 text-sm transition-colors hover:bg-primary/10 hover:text-primary first:pt-4 last:pb-4 cursor-pointer"
                          style={{ color: menuColor || "#1e3a5f" }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Get Started Button - Right */}
          <Link
            href={buttonHref}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary gpu-scale-hover"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg z-50"
              onClick={(e) => {
                e.stopPropagation()
                setIsHamburgerOpen((prev) => !prev)
              }}
              aria-label={isHamburgerOpen ? "Close menu" : "Open menu"}
              aria-expanded={isHamburgerOpen}
              style={{ color: menuColor || "#1e3a5f" }}
            >
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isHamburgerOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isHamburgerOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isHamburgerOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
              </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isHamburgerOpen ? "max-h-[600px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="py-4 space-y-1 border-t border-gray-200/50">
              {Object.entries(menuItems).map(([key, menu]) => (
                <div key={key} className="space-y-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown(key)
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors hover:bg-white/30"
                    style={{ color: "#ffffff" }}
                  >
                    {menu.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === key && (
                    <div className="pl-4 space-y-1">
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-white/30"
                          style={{ color: menuColor || "#1e3a5f" }}
                          onClick={() => {
                            setOpenDropdown(null)
                            setIsHamburgerOpen(false)
                          }}
                        >
                          {item.label}
                  </Link>
                ))}
              </div>
                  )}
                </div>
              ))}
              <Link
                href={buttonHref}
                className="block mt-4 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-200"
                style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                onClick={() => setIsHamburgerOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default CardNav
