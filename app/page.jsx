"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Globe, Leaf, ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const products = [
    {
      id: "rice",
      name: "Rice",
      description: "Premium quality rice varieties including Basmati, Parboiled, and Long Grain rice",
      image: "/rice.jpg",
    },
    {
      id: "cashew",
      name: "Cashew",
      description: "Raw Cashew Nuts (RCN) from Africa and processed Cashew Kernels from India & Vietnam",
      image: "/cashew.jpg",
    },
    {
      id: "cotton",
      name: "Cotton",
      description: "Quality raw cotton, cotton seeds, and cottonseed oil from Gujarat, India and African countries exported to Asia",
      image: "/cotton-bales-in-warehouse.jpg",
    },
    {
      id: "oilseeds",
      name: "Oilseeds",
      description: "Peanut/Groundnut, Sesame Seeds, Cottonseed and related products from India, Myanmar, and Africa exported globally",
      image: "/oilseeds.jpg",
    },
    {
      id: "spices",
      name: "Spices",
      description: "Indian Red Dry Chilly, Cumin, Black Pepper, Cinnamon, and Star Aniseed from India and Asia exported worldwide",
      image: "/spices.jpg",
    },
    {
      id: "tiles",
      name: "Tiles",
      description: "Premium tiles from Morbi, India exported worldwide including Porcelain, Ceramic, Vitrified, Wall, and Outdoor varieties",
      image: "/tiles.jpg",
    },
    {
      id: "pharma",
      name: "Pharma",
      description: "Quality pharmaceutical ingredients and products",
      image: "/pharmaceutical-products-clean.jpg",
    },
    {
      id: "supermarket",
      name: "Supermarket Products",
      description: "FMCG and consumer goods for retail",
      image: "/supermarket-products-shelf.jpg",
    },
    {
      id: "edible-oil",
      name: "Edible Oil",
      description: "FMCG and consumer goods for retail",
      image: "/edibleoil.jpg",
    },
    {
      id: "castor-oil",
      name: "Castor Oil",
      description: "FMCG and consumer goods for retail",
      image: "/castoroil.jpg",
    },
    {
      id: "pulses",
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
      icon: null,
      image: "/diverse.png",
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

  const stats = [
    {
      id: "stat-tons",
      number: "150,000+",
      label: "Metric Tons of Agro-Commodities Traded",
    },
    {
      id: "stat-delivery",
      number: "98%",
      label: "On-Time Delivery Rate",
    },
    {
      id: "stat-countries",
      number: "35+",
      label: "Countries Trust Our Supply Chain",
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
    setCurrentProductIndex((prev) => {
      if (prev > 0) {
        return prev - 1
      } else {
        // Loop to the end
        return maxIndex
      }
    })
  }

  const handleNext = () => {
    setCurrentProductIndex((prev) => {
      if (prev < maxIndex) {
        return prev + 1
      } else {
        // Loop back to the beginning
        return 0
      }
    })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-start justify-center overflow-hidden py-16 md:py-24">
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
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative z-20 container text-center text-white px-4 sm:px-6 max-w-7xl mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 sm:mb-8 text-balance leading-tight px-2">
              Global Excellence in Agri-Export
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-white/95 max-w-3xl mx-auto text-balance leading-relaxed px-2">
            Your trusted international agro-commodity partner across India, West Africa, Europe, and the rest of the world.            </p>
            <a
              href="/products"
              className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-accent text-accent-foreground text-base sm:text-lg font-semibold rounded-lg shadow-xl focus:ring-4 focus:ring-accent/50 gpu-scale-hover mb-8 sm:mb-12 md:mb-16"
            >
              Explore Our Products
            </a>
            {/* Statistics */}
            <div id="hero-stats" className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-2">
              {stats.map((stat) => (
                <div key={stat.id} id={stat.id} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-white/90 leading-snug px-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="container max-w-4xl text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 text-balance leading-tight">
              Bridging Continents Through Quality
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed">
              The King Group stands as a trusted partner in global agri-export, delivering premium products sourced from
              the finest regions of India, Southeast Asia, and West Africa. With decades of expertise and an unwavering
              commitment to quality, we serve distributors, manufacturers, and retailers across six continents.
            </p>
          </div>
        </section>

        {/* Products Carousel */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">Our Products</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed px-2">
                A diverse portfolio of premium agricultural and consumer products
              </p>
            </div>
            <div className="relative px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-0 sm:left-1 md:left-2 lg:-left-4 xl:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-200 gpu-accelerated hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Previous products"
              >
                <ChevronLeft
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-colors duration-200 text-primary"
                />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-1 md:right-2 lg:-right-4 xl:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-200 gpu-accelerated hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Next products"
              >
                <ChevronRight
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-colors duration-200 text-primary"
                />
              </button>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-4 lg:px-6">
                {visibleProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border gpu-lift-hover hover:shadow-2xl"
                  >
                    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 gpu-accelerated"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 sm:mb-3 text-foreground">{product.name}</h3>
                      <p className="text-sm sm:text-base text-muted mb-4 sm:mb-5 leading-relaxed">{product.description}</p>
                      <a
                        href={`/products?id=${product.id}`}
                        className="inline-flex items-center text-sm sm:text-base font-semibold text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 min-h-[44px] touch-manipulation"
                      >
                        Learn More
                        <ArrowRight 
                          size={16}
                          className="sm:w-[18px] sm:h-[18px] ml-2 transition-transform duration-200 group-hover:translate-x-1 gpu-accelerated"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-200 gpu-accelerated touch-manipulation min-w-[44px] ${
                      index === currentProductIndex ? "bg-primary w-8 sm:w-10" : "bg-muted w-2 sm:w-2.5 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach & Why Choose Combined Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <img
            src="/white_tiles.jpg"
            alt="White tiles background"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover z-0 gpu-accelerated"
          />
          <div className="relative z-10 container px-4 sm:px-6">
            {/* Global Reach Section */}
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">Global Reach</h2>
                <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed px-2">
                  Serving markets across four continents with reliable supply chains
                </p>
              </div>
              {/* Map component will be added here */}
              <div className="text-center">
                <a
                  href="/global-presence"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold text-base sm:text-lg rounded-lg shadow-lg focus:ring-4 focus:ring-primary/50 gpu-scale-hover min-h-[44px] touch-manipulation"
                >
                  View Full Map
                  <ArrowRight size={18} className="sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                </a>
              </div>
            </div>

            {/* Why Choose The King Group Section */}
            <div>
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">Why Choose The King Group</h2>
                <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed px-2">
                  Built on trust, quality, and sustainable practices
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                {values.map((value) => {
                  const Icon = value.icon
                  return (
                    <div key={value.title} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full mb-4 sm:mb-6 shadow-lg gpu-accelerated">
                        {value.image ? (
                          <img
                            src={value.image || "/placeholder.svg"}
                            alt={value.title}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain gpu-accelerated"
                          />
                        ) : (
                          <Icon size={28} className="sm:w-9 sm:h-9 text-accent-foreground" />
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4 text-foreground">{value.title}</h3>
                      <p className="text-sm sm:text-base text-muted leading-relaxed px-2">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <img
            src="/tiles_background.jpg"
            alt="Tiles background"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover z-0 gpu-accelerated"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-10 gpu-accelerated" />
          <div className="relative z-20 container max-w-4xl text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 text-balance text-white px-2">
              Ready to Partner With Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
              Join hundreds of satisfied clients worldwide who trust The King Group for their sourcing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
              <a
                href="/contact"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-accent text-accent-foreground text-base sm:text-lg font-semibold rounded-lg shadow-lg focus:ring-4 focus:ring-accent/50 gpu-scale-hover min-h-[44px] flex items-center justify-center touch-manipulation"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-foreground text-base sm:text-lg font-semibold rounded-lg border-2 border-white shadow-md focus:ring-4 focus:ring-white/50 gpu-scale-hover min-h-[44px] flex items-center justify-center touch-manipulation"
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
