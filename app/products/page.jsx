"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Package, CheckCircle, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedSpecs, setExpandedSpecs] = useState({})

  const products = [
    {
      id: "rice",
      name: "Rice",
      category: "Grains",
      description: "Premium Basmati and non-Basmati rice varieties sourced from the finest paddy fields",
      image: "/rice.jpg",
      origin: ["India", "Thailand", "Vietnam"],
      destinations: ["West Africa", "Middle East", "Europe", "SouthEast Asia", "South Asia"],
      varieties: ["Basmati 1121", "Sella Rice", "Jasmine Rice", "Parboiled Rice", "Brown Rice"],
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
      description: "Grade A cashew nuts processed to international standards",
      image: "/cashew.jpg",
      origin: ["India", "Vietnam"],
      destinations: ["Middle East", "Europe", "SouthEast Asia"],
      varieties: ["W180", "W210", "W240", "W320", "Splits", "Pieces"],
      specifications: [
        "Moisture: 5% maximum",
        "Broken: Grade specific",
        "Color: Natural white/pale ivory",
        "Packaging: Vacuum sealed",
      ],
    },
    {
      id: "cotton",
      name: "Cotton",
      category: "Fibers",
      description: "High-quality raw cotton and cotton products for textile manufacturing",
      image: "/cotton-bales-in-warehouse.jpg",
      origin: ["India"],
      destinations: ["West Africa", "Middle East", "SouthEast Asia"],
      varieties: ["Long Staple Cotton", "Medium Staple", "Short Staple", "Organic Cotton"],
      specifications: [
        "Staple length: 28-34mm",
        "Micronaire: 3.5-4.9",
        "Strength: 26-30 g/tex",
        "Moisture: 7.5% maximum",
      ],
    },
    {
      id: "oilseeds",
      name: "Oilseeds",
      category: "Seeds",
      description: "Premium quality sesame, sunflower, and groundnut seeds",
      image: "/oilseeds.jpg",
      origin: ["India", "Vietnam"],
      destinations: ["Middle East", "Europe", "West Africa"],
      varieties: ["Sesame Seeds", "Sunflower Seeds", "Groundnut", "Mustard Seeds"],
      specifications: ["Oil content: Variety specific", "Purity: 99% minimum", "Moisture: 6-8%", "Free from aflatoxin"],
    },
    {
      id: "spices",
      name: "Spices",
      category: "Spices",
      description: "Authentic Indian spices and seasonings with rich aroma and flavor",
      image: "/spices.jpg",
      origin: ["India"],
      destinations: ["Middle East", "Europe", "West Africa", "SouthEast Asia", "South Asia"],
      varieties: ["Turmeric", "Cumin", "Coriander", "Black Pepper", "Cardamom", "Chili"],
      specifications: ["Moisture: 10-12%", "Purity: 98% minimum", "No artificial colors", "Steam sterilized available"],
    },
    {
      id: "tiles",
      name: "Tiles",
      category: "Building Materials",
      description: "Ceramic and porcelain tiles for residential and commercial applications",
      image: "/tiles.jpg",
      origin: ["India"],
      destinations: ["West Africa", "Middle East", "SouthEast Asia"],
      varieties: ["Floor Tiles", "Wall Tiles", "Vitrified Tiles", "Porcelain Tiles"],
      specifications: [
        "Sizes: 300x300mm to 800x800mm",
        "Thickness: 8-12mm",
        "Water absorption: <0.5%",
        "Slip resistance: R9-R11",
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
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-[400px] overflow-hidden">
                    {/* Product Image */}
                    <div className="relative h-full">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-2xl font-serif font-bold mb-3">{product.name}</h3>
                      <p className="text-sm text-muted mb-5 leading-relaxed h-[3rem] overflow-hidden">{product.description}</p>

                      {/* Origin & Destinations */}
                      <div className="mb-5 space-y-2.5">
                        <div className="flex items-start gap-2">
                          <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                          <div>
                            <p className="text-xs font-semibold text-foreground">Origin</p>
                            <p className="text-xs text-muted">{product.origin.join(", ")}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Package size={16} className="mt-1 flex-shrink-0 text-primary" />
                          <div>
                            <p className="text-xs font-semibold text-foreground">Export To</p>
                            <p className="text-xs text-muted">{product.destinations.join(", ")}</p>
                          </div>
                        </div>
                      </div>

                      {/* Varieties */}
                      <div className="mb-5 h-[3.5rem]">
                        <p className="text-xs font-semibold mb-2">Available Varieties</p>
                        <div className="flex flex-wrap gap-1">
                          {product.varieties.slice(0, 4).map((variety) => (
                            <span key={variety} className="text-xs px-2 py-1 bg-secondary rounded">
                              {variety}
                            </span>
                          ))}
                          {product.varieties.length > 4 && (
                            <span className="text-xs px-2 py-1 bg-secondary rounded">
                              +{product.varieties.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto pt-2">
                        <a
                          href="/contact"
                          className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                        >
                          Request Quote
                          <ArrowRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Specifications */}
                  <div className="border-t border-border relative z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedSpecs((prev) => ({ ...prev, [product.id]: !prev[product.id] }))
                      }}
                      className="w-full px-6 py-4 cursor-pointer hover:bg-secondary/50 transition-colors font-medium text-sm text-left flex items-center justify-between"
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
                          className="fixed inset-0 z-40"
                          onClick={() => setExpandedSpecs((prev) => ({ ...prev, [product.id]: false }))}
                        />
                        {/* Specifications Panel */}
                        <div className="absolute top-full left-0 right-0 bg-white border-t-2 border-primary shadow-xl z-50 mt-1 rounded-b-lg overflow-hidden">
                          <div className="px-6 py-6 bg-secondary/30">
                            <ul className="space-y-2">
                              {product.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
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
