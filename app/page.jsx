"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Globe, Leaf, ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const products = [
    {
      name: "Rice",
      description: "Premium Basmati and non-Basmati varieties",
      image: "/rice.jpg",
    },
    {
      name: "Cashew",
      description: "Grade A cashew nuts from Vietnam and India",
      image: "/cashew.jpg",
    },
    {
      name: "Cotton",
      description: "High-quality raw cotton and cotton products",
      image: "/cotton-bales-in-warehouse.jpg",
    },
    {
      name: "Oilseeds",
      description: "Sesame, sunflower, and groundnut seeds",
      image: "/oilseeds.jpg",
    },
    {
      name: "Spices",
      description: "Authentic Indian spices and seasonings",
      image: "/spices.jpg",
    },
    {
      name: "Tiles",
      description: "Ceramic and porcelain tiles for all applications",
      image: "/tiles.jpg",
    },
    {
      name: "Pharma",
      description: "Quality pharmaceutical ingredients and products",
      image: "/pharmaceutical-products-clean.jpg",
    },
    {
      name: "Supermarket Products",
      description: "FMCG and consumer goods for retail",
      image: "/supermarket-products-shelf.jpg",
    },
    {
      name: "Edible Oil",
      description: "FMCG and consumer goods for retail",
      image: "/edibleoil.jpg",
    },
    {
      name: "Castor Oil",
      description: "FMCG and consumer goods for retail",
      image: "/castoroil.jpg",
    },
    {
      name: "Pulses",
      description: "FMCG and consumer goods for retail",
      image: "/pulses.jpg",
    },
  ]

  const regions = [
    { name: "West Africa", countries: "15+ Countries", image: "/africa.png" },
    { name: "Middle East", countries: "8+ Countries" },
    { name: "Europe", countries: "12+ Countries" },
    { name: "SouthEast Asia", countries: "6+ Countries" },
    { name: "South Asia", countries: "6+ Countries" },
  ]

  const values = [
    {
      icon: null,
      image: "/quality.png",
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage of the supply chain",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Established presence across 40+ countries worldwide",
    },
    {
      icon: Leaf,
      title: "Diverse Range",
      description: "Committed to environmentally responsible practices",
    },
    {
      icon: null,
      image: "/delivery.png",
      title: "Reliable Supply",
      description: "Consistent delivery and competitive pricing",
    },
  ]

  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [productsPerPage, setProductsPerPage] = useState(4)
  const maxIndex = Math.max(0, Math.ceil(products.length / productsPerPage) - 1)

  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(1) // Mobile: 1 product
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(2) // Tablet: 2 products
      } else {
        setProductsPerPage(4) // Desktop: 4 products
      }
    }

    updateProductsPerPage()
    window.addEventListener("resize", updateProductsPerPage)
    return () => window.removeEventListener("resize", updateProductsPerPage)
  }, [])

  const visibleProducts = products.slice(
    currentProductIndex * productsPerPage,
    currentProductIndex * productsPerPage + productsPerPage,
  )

  const handlePrevious = () => {
    setCurrentProductIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentProductIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0 gpu-accelerated"
          >
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
          <div className="relative z-20 container text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-balance leading-tight">
              Global Excellence in Agri-Export
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto text-balance leading-relaxed">
              Connecting quality agricultural products from Asia to markets across Africa, Middle East, Europe, and the
              Americas
            </p>
            <a
              href="/products"
              className="inline-block px-10 py-5 bg-accent text-accent-foreground text-lg font-semibold rounded-lg shadow-xl focus:ring-4 focus:ring-accent/50 gpu-scale-hover"
            >
              Explore Our Products
            </a>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl text-center px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-balance leading-tight">
              Bridging Continents Through Quality
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              The King Group stands as a trusted partner in global agri-export, delivering premium products sourced from
              the finest regions of India, Vietnam, and West Africa. With decades of expertise and an unwavering
              commitment to quality, we serve distributors, manufacturers, and retailers across four continents.
            </p>
          </div>
        </section>

        {/* Products Carousel */}
        <section className="py-24 bg-secondary">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Products</h2>
              <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                A diverse portfolio of premium agricultural and consumer products
              </p>
            </div>
            <div className="relative px-4 sm:px-8 md:px-16 lg:px-20">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                disabled={currentProductIndex === 0}
                className={`absolute left-0 sm:left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-200 gpu-accelerated ${
                  currentProductIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110"
                }`}
                aria-label="Previous products"
              >
                <ChevronLeft
                  size={20}
                  className={`sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-200 ${currentProductIndex === 0 ? "text-muted" : "text-primary"}`}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentProductIndex >= maxIndex}
                className={`absolute right-0 sm:right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-200 gpu-accelerated ${
                  currentProductIndex >= maxIndex
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110"
                }`}
                aria-label="Next products"
              >
                <ChevronRight
                  size={20}
                  className={`sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-200 ${currentProductIndex >= maxIndex ? "text-muted" : "text-primary"}`}
                />
              </button>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-6 sm:px-8 md:px-4 lg:px-6">
                {visibleProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border gpu-lift-hover hover:shadow-2xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 gpu-accelerated"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{product.name}</h3>
                      <p className="text-base text-muted mb-5 leading-relaxed">{product.description}</p>
                      <a
                        href="/products"
                        className="inline-flex items-center text-base font-semibold text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
                      >
                        Learn More
                        <ArrowRight 
                          size={18} 
                          className="ml-2 transition-transform duration-200 group-hover:translate-x-1 gpu-accelerated"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`h-2 rounded-full transition-all duration-200 gpu-accelerated ${
                      index === currentProductIndex ? "bg-primary w-8" : "bg-muted w-2 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach & Why Choose Combined Section */}
        <section className="relative py-24 overflow-hidden">
          <img
            src="/white_tiles.jpg"
            alt="White tiles background"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover z-0 gpu-accelerated"
          />
          <div className="relative z-10 container px-6">
            {/* Global Reach Section */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Global Reach</h2>
                <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                  Serving markets across four continents with reliable supply chains
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {regions.slice(0, 4).map((region) => (
                  <div
                    key={region.name}
                    className="text-center p-10 bg-secondary rounded-xl shadow-md border border-border transition-shadow duration-300 hover:shadow-xl gpu-accelerated"
                  >
                    {region.image ? (
                      <img
                        src={region.image || "/placeholder.svg"}
                        alt={region.name}
                        loading="lazy"
                        decoding="async"
                        className="mx-auto mb-6 w-20 h-20 object-contain gpu-accelerated"
                      />
                    ) : (
                      <Globe size={56} className="mx-auto mb-6 text-primary" />
                    )}
                    <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{region.name}</h3>
                    <p className="text-lg text-muted font-medium">{region.countries}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="/global-presence"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg shadow-lg focus:ring-4 focus:ring-primary/50 gpu-scale-hover"
                >
                  View Full Map
                  <ArrowRight size={20} className="ml-3" />
                </a>
              </div>
            </div>

            {/* Why Choose The King Group Section */}
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Choose The King Group</h2>
                <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                  Built on trust, quality, and sustainable practices
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {values.map((value) => {
                  const Icon = value.icon
                  return (
                    <div key={value.title} className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 shadow-lg gpu-accelerated">
                        {value.image ? (
                          <img
                            src={value.image || "/placeholder.svg"}
                            alt={value.title}
                            loading="lazy"
                            decoding="async"
                            className="w-10 h-10 object-contain gpu-accelerated"
                          />
                        ) : (
                          <Icon size={36} className="text-accent-foreground" />
                        )}
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{value.title}</h3>
                      <p className="text-base text-muted leading-relaxed">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <img
            src="/tiles_background.jpg"
            alt="Tiles background"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover z-0 gpu-accelerated"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-10 gpu-accelerated" />
          <div className="relative z-20 container max-w-4xl text-center px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-balance text-white">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of satisfied clients worldwide who trust The King Group for their sourcing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-accent text-accent-foreground text-lg font-semibold rounded-lg shadow-lg focus:ring-4 focus:ring-accent/50 gpu-scale-hover"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="px-10 py-5 bg-white text-foreground text-lg font-semibold rounded-lg border-2 border-white shadow-md focus:ring-4 focus:ring-white/50 gpu-scale-hover"
              >
                View Products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
