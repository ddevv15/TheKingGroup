"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Package, CheckCircle, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedSpecs, setExpandedSpecs] = useState({})
  const [expandedVarieties, setExpandedVarieties] = useState({})
  
  // Handle product ID from query parameter
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const productId = params.get("id")
      if (productId) {
        // Scroll to the product after a short delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(`product-${productId}`)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
            // Highlight the product briefly
            element.classList.add("ring-4", "ring-accent", "ring-offset-4")
            setTimeout(() => {
              element.classList.remove("ring-4", "ring-accent", "ring-offset-4")
            }, 2000)
          }
        }, 100)
      }
    }
  }, [])

  const products = [
    {
      id: "rice",
      name: "Rice",
      category: "Grains",
      description: "Premium quality rice varieties including Basmati, Parboiled, and Long Grain rice from India, Vietnam, and Thailand",
      image: "/rice.jpg",
      origin: ["India", "Vietnam", "Thailand"],
      destinations: ["African Countries", "Saudi Arabia", "Iran", "Iraq", "Malaysia", "Philippines", "Brazil", "Persian Gulf countries"],
      varieties: [
        "IR64 Parboiled & Raw Rice (Long Grain) - Good Quality",
        "IR36 Parboiled & Raw Rice (Long Grain) - Affordable price",
        "Swarna Parboiled & Raw Rice (Medium Grain)",
        "Sona Masoori Rice (Short Grain)",
        "100% Broken Rice (Raw & Parboiled)",
        "1121 Sella Golden Basmati Rice",
        "Pusa Steam Basmati Rice",
      ],
      specifications: [
        "Moisture content: 12-14%",
        "Broken grains: <5%",
        "Purity: 95% minimum",
        "Shelf life: 12-24 months",
      ],
    },
    {
      id: "cashew",
      name: "Cashew Nuts",
      category: "Nuts",
      description: "Raw Cashew Nuts (RCN) and processed Cashew Kernels from Africa, India, and Vietnam to international standards",
      image: "/cashew.jpg",
      origin: ["Raw Cashew Nuts: Ivory Coast, Benin, Ghana, Gambia, Guinea-Bissau, Nigeria, Tanzania, Indonesia, Cambodia", "Cashew Kernels: India, Vietnam"],
      destinations: ["Raw Cashew Nuts: India & Vietnam, Worldwide", "Cashew Kernels: Worldwide"],
      varieties: [
        "White Wholes (WW): W180, W210, W240, W320, W450, W500",
        "Scorched Wholes (SW): SW180, SW210, SW240, SW320, SW450, SW500",
        "Splits",
        "LWP (Long White Pieces)",
        "SWP (Small White Pieces)",
        "BB (Baby Bites)",
        "Dessert Wholes SSW (Scorched wholes seconds)",
        "DW (Dessert wholes)",
      ],
      specifications: [
        "Quality: As per international standards",
        "Standards: CEPC / AFI quality parameters",
        "Packaging: Vacuum Flaxi pack or Tin Pack",
        "RCN: Proper Quality, Packing, Loading, and Price",
      ],
    },
    {
      id: "cotton",
      name: "Cotton",
      category: "Fibers",
      description: "High-quality raw cotton and cotton products for textile manufacturing",
      image: "/cotton-bales-in-warehouse.jpg",
      origin: ["Gujarat, India", "Benin", "Togo", "Burkina Faso", "Other African Countries"],
      destinations: ["China", "Bangladesh", "Vietnam", "Indonesia", "Malaysia", "Many more countries"],
      varieties: ["Raw Cotton", "Cotton Seeds", "Cottonseed Oil"],
      specifications: [
        "Quality Products from renowned Companies",
      ],
    },
    {
      id: "oilseeds",
      name: "Oilseeds",
      category: "Seeds",
      description: "Premium quality sesame, sunflower, and groundnut seeds",
      image: "/oilseeds.jpg",
      origin: ["Gujarat, India", "African Countries", "Myanmar", "Sudan", "Burkina Faso", "Senegal"],
      destinations: ["China", "Vietnam", "Indonesia", "Malaysia", "Russia", "Gulf Countries", "European Countries"],
      varieties: ["Peanut / Groundnut", "Sesame Seed", "Cottonseed", "Cottonseed Meal", "Cottonseed Hulls", "Cottonseed Oil"],
      specifications: ["As per require quality and quantity", "Best Quality", "As per Requirements"],
    },
    {
      id: "spices",
      name: "Spices",
      category: "Spices",
      description: "Authentic Indian spices and seasonings with rich aroma and flavor",
      image: "/spices.jpg",
      origin: ["India", "Gujarat, India", "Vietnam", "Indonesia", "Cambodia", "Sri Lanka", "China"],
      destinations: ["All Over the World", "Asia", "Canada", "Europe", "Sri Lanka", "China", "Philippines", "Bangladesh", "Middle East", "South Korea", "UK", "US", "Latin America"],
      varieties: ["Indian Red Dry Chilly", "Cumin Seed", "Black Pepper", "Cinnamon", "Star Aniseed"],
      specifications: ["As per Buyer's Requirement", "Best Quality and Affordable Price", "Require Quality and Affordable Price"],
    },
    {
      id: "tiles",
      name: "Tiles",
      category: "Building Materials",
      description: "Ceramic and porcelain tiles for residential and commercial applications",
      image: "/tiles.jpg",
      origin: ["Morbi, India"],
      destinations: ["Worldwide"],
      varieties: ["Porcelain tiles", "Ceramic Tiles", "Vitrified Tiles", "Wall tiles", "Outdoor Tiles", "Other varieties"],
      specifications: [
        "Good Quality",
        "Wide range of Designs",
        "Competitive Price",
      ],
    },
    {
      id: "pharma",
      name: "Pharmaceutical Products",
      category: "Healthcare",
      description: "Quality pharmaceutical ingredients and finished products",
      image: "/pharmaceutical-products-clean.jpg",
      origin: ["India"],
      destinations: ["West Africa", "Middle East", "SouthEast Asia"],
      varieties: ["Active Ingredients", "Generic Medicines", "Nutraceuticals", "Medical Supplies"],
      specifications: ["WHO-GMP certified", "Temperature controlled", "Full documentation", "Regulatory compliant"],
    },
    {
      id: "supermarket",
      name: "Supermarket Products",
      category: "FMCG",
      description: "Fast-moving consumer goods and packaged food products",
      image: "/supermarket-products-shelf.jpg",
      origin: ["India", "Thailand"],
      destinations: ["West Africa", "Middle East", "SouthEast Asia"],
      varieties: ["Packaged Foods", "Beverages", "Personal Care", "Household Items"],
      specifications: ["Branded and private label", "Long shelf life", "Export packaging", "Halal certified options"],
    },
    {
      id: "edible-oil",
      name: "Edible Oil",
      category: "FMCG",
      description: "Premium quality edible oils including sunflower, soybean, palm, and groundnut oils",
      image: "/edibleoil.jpg",
      origin: ["India", "Vietnam", "Thailand"],
      destinations: ["West Africa", "Middle East", "SouthEast Asia", "South Asia"],
      varieties: ["Sunflower Oil", "Soybean Oil", "Palm Oil", "Groundnut Oil", "Mustard Oil", "Rice Bran Oil"],
      specifications: [
        "FFA: <0.1%",
        "Peroxide value: <2 meq/kg",
        "Moisture: <0.1%",
        "Packaging: Food grade containers",
      ],
    },
    {
      id: "castor-oil",
      name: "Castor Oil",
      category: "FMCG",
      description: "High-quality castor oil for industrial and pharmaceutical applications",
      image: "/castoroil.jpg",
      origin: ["India"],
      destinations: ["Europe", "Middle East", "SouthEast Asia", "South Asia"],
      varieties: ["Refined Castor Oil", "Cold Pressed", "Pharmaceutical Grade", "Industrial Grade"],
      specifications: [
        "Acid value: <2 mg KOH/g",
        "Saponification value: 176-186",
        "Moisture: <0.5%",
        "Color: Pale yellow to colorless",
      ],
    },
    {
      id: "pulses",
      name: "Pulses",
      category: "Grains",
      description: "Premium quality pulses including lentils, chickpeas, beans, and peas",
      image: "/pulses.jpg",
      origin: ["India", "Canada", "Australia"],
      destinations: ["West Africa", "Middle East", "Europe", "SouthEast Asia", "South Asia"],
      varieties: [
        "Red Lentils",
        "Yellow Lentils",
        "Chickpeas (Kabuli & Desi)",
        "Black Gram",
        "Green Gram",
        "Kidney Beans",
        "Black Beans",
      ],
      specifications: [
        "Moisture: 10-12%",
        "Foreign matter: <1%",
        "Broken: <2%",
        "Protein content: 20-25%",
      ],
    },
  ]

  const categories = ["all", "Grains", "Nuts", "Fibers", "Seeds", "Spices", "Building Materials", "Healthcare", "FMCG"]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Our Products & Services</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance leading-relaxed">
              A comprehensive portfolio of premium agricultural and consumer products for global markets
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-border">
          <div className="container">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category === "all" ? "All Products" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {filteredProducts.map((product) => (
                <div
                  id={`product-${product.id}`}
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow relative scroll-mt-20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[400px] overflow-hidden">
                    {/* Product Image */}
                    <div className="relative h-48 md:h-full">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs md:text-sm font-medium rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Details - Flex Column Layout */}
                    <div className="flex flex-col h-auto md:h-full">
                      {/* Fixed Header Section - Always Visible */}
                      <div className="flex-shrink-0 px-4 md:px-6 pt-4 md:pt-6 pb-3 border-b border-border/30">
                        <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3">{product.name}</h3>
                        
                        {/* Export Info - Always Visible */}
                        <div className="space-y-1.5 md:space-y-2">
                          <div className="flex items-start gap-2">
                            <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-foreground">Origin</p>
                              <p className="text-xs text-muted break-words leading-snug">{product.origin.join(", ")}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Package size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-foreground">Export To</p>
                              <p className="text-xs text-muted break-words leading-snug">{product.destinations.join(", ")}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer - Varieties & CTA */}
                      <div className="flex-shrink-0 bg-white border-t border-border px-4 md:px-6 py-3 md:py-4">
                        {/* Varieties - Compact Display */}
                        <div className="mb-2 md:mb-3">
                          <p className="text-xs font-semibold mb-2">Available Varieties ({product.varieties.length})</p>
                          <div className="flex flex-wrap gap-1">
                            {product.varieties.slice(0, 2).map((variety, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-secondary rounded break-words max-w-full">
                                {variety.length > 30 ? `${variety.substring(0, 27)}...` : variety}
                              </span>
                            ))}
                            {product.varieties.length > 2 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setExpandedVarieties((prev) => ({ ...prev, [product.id]: !prev[product.id] }))
                                }}
                                className="text-xs px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/30 rounded font-semibold transition-colors touch-manipulation"
                              >
                                {expandedVarieties[product.id] ? "Show Less" : `View All (${product.varieties.length})`}
                              </button>
                            )}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-2 border-t border-border/50">
                          <a
                            href="/contact"
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-accent active:text-accent transition-colors touch-manipulation min-h-[44px] py-2"
                          >
                            Request Quote
                            <ArrowRight size={16} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Varieties */}
                  {expandedVarieties[product.id] && (
                    <>
                      {/* Backdrop to close on outside click */}
                      <div
                        className="fixed inset-0 z-40 bg-black/20"
                        onClick={() => setExpandedVarieties((prev) => ({ ...prev, [product.id]: false }))}
                      />
                      {/* Varieties Panel */}
                      <div className="absolute top-full left-0 right-0 bg-white border-y-2 border-primary shadow-xl z-50 mt-0 max-h-[60vh] overflow-y-auto">
                        <div className="px-4 md:px-6 py-4 md:py-6 bg-secondary/30">
                          <h4 className="text-sm font-semibold mb-3 md:mb-4 text-foreground">All Available Varieties</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {product.varieties.map((variety, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2 text-xs md:text-sm bg-white px-3 py-2 rounded"
                              >
                                <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                                <span className="text-muted">{variety}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Expandable Specifications */}
                  <div className="border-t border-border relative z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedSpecs((prev) => ({ ...prev, [product.id]: !prev[product.id] }))
                      }}
                      className="w-full px-4 md:px-6 py-3 md:py-4 cursor-pointer hover:bg-secondary/50 active:bg-secondary/70 transition-colors font-medium text-sm text-left flex items-center justify-between touch-manipulation"
                    >
                      <span>View Specifications</span>
                      <span className={`transform transition-transform duration-200 ${expandedSpecs[product.id] ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>
                    {expandedSpecs[product.id] && (
                      <>
                        {/* Backdrop to close on outside click */}
                        <div
                          className="fixed inset-0 z-40 bg-black/20"
                          onClick={() => setExpandedSpecs((prev) => ({ ...prev, [product.id]: false }))}
                        />
                        {/* Specifications Panel */}
                        <div className="absolute top-full left-0 right-0 bg-white border-t-2 border-primary shadow-xl z-50 mt-1 rounded-b-lg overflow-hidden max-h-[60vh] overflow-y-auto">
                          <div className="px-4 md:px-6 py-4 md:py-6 bg-secondary/30">
                            <ul className="space-y-2">
                              {product.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs md:text-sm">
                                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                                  <span className="text-muted">{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Comprehensive support throughout the supply chain</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sourcing & Procurement</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Direct relationships with farmers and processors ensure quality and competitive pricing
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Rigorous testing and inspection at every stage from source to shipment
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Logistics & Delivery</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Efficient shipping and customs clearance with full tracking and documentation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We offer tailored sourcing, packaging, and logistics solutions to meet your specific requirements
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground text-lg font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
