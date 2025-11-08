"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, Award, Globe, Leaf } from "lucide-react"
import Link from "next/link"

export default function ProductsOverviewPage() {
  const productCategories = [
    {
      id: "rice",
      name: "Rice & Grains",
      description: "Premium quality rice varieties including Basmati, Parboiled, and Long Grain rice from India, Vietnam, and Thailand",
      image: "/rice.jpg",
      highlights: ["Multiple varieties", "Export quality", "Certified origins"],
    },
    {
      id: "cashew",
      name: "Cashew & Nuts",
      description: "Raw Cashew Nuts (RCN) from Africa and processed Cashew Kernels from India & Vietnam with multiple grades",
      image: "/cashew.jpg",
      highlights: ["CEPC / AFI standards", "Multiple grades (W180-W500)", "Vacuum Flaxi/Tin packaging"],
    },
    {
      id: "cotton",
      name: "Cotton & Textiles",
      description: "Quality raw cotton, cotton seeds, and cottonseed oil from India and Africa",
      image: "/cotton-bales-in-warehouse.jpg",
      highlights: ["Raw Cotton", "Cotton Seeds", "Cottonseed Oil"],
    },
    {
      id: "oilseeds",
      name: "Oilseeds",
      description: "Peanut/Groundnut, Sesame Seeds, Cottonseed and related products from India, Myanmar, and Africa",
      image: "/oilseeds.jpg",
      highlights: ["Best Quality", "As per Requirements", "Multiple varieties"],
    },
    {
      id: "spices",
      name: "Spices",
      description: "Indian Red Dry Chilly, Cumin, Black Pepper, Cinnamon, and Star Aniseed from India and Asia",
      image: "/spices.jpg",
      highlights: ["Best Quality", "Affordable Price", "As per Buyer's Requirement"],
    },
    {
      id: "tiles",
      name: "Tiles",
      description: "Premium tiles from Morbi, India exported worldwide",
      image: "/tiles.jpg",
      highlights: ["Good Quality", "Wide range of Designs", "Competitive Price"],
    },
    {
      id: "pharma",
      name: "Pharmaceutical",
      description: "Quality pharmaceutical ingredients and finished products",
      image: "/pharmaceutical-products-clean.jpg",
      highlights: ["WHO-GMP certified", "Full documentation", "Regulatory compliant"],
    },
    {
      id: "supermarket",
      name: "Supermarket Products",
      description: "Fast-moving consumer goods and packaged food products",
      image: "/supermarket-products-shelf.jpg",
      highlights: ["Branded & private label", "Long shelf life", "Halal certified"],
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          </div>
          <div className="relative container text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
                Premium Products for Global Markets
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed text-balance">
                From agricultural commodities to consumer goods, we deliver quality products that meet international
                standards across 40+ countries
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground text-lg font-semibold rounded-md hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
                >
                  View Product Catalog
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-md hover:bg-white/20 transition-all border border-white/20"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Product Portfolio</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Eight diverse product categories serving multiple industries and markets worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category) => (
                <div
                  key={category.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 mb-4">
                      {category.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products#${category.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose Our Products</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Quality, compliance, and reliability at every step of the supply chain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-lg bg-secondary/50">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">International Standards</h3>
                <p className="text-sm text-muted leading-relaxed">
                  ISO 9001, HACCP, and industry-specific certifications ensure product quality and safety
                </p>
              </div>

              <div className="text-center p-8 rounded-lg bg-secondary/50">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Sourcing</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Direct relationships with producers across Asia ensure competitive pricing and consistent supply
                </p>
              </div>

              <div className="text-center p-8 rounded-lg bg-secondary/50">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Committed to environmental responsibility and ethical sourcing throughout our supply chain
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold font-serif mb-2 text-accent">8</div>
                <div className="text-sm md:text-base text-white/80">Product Categories</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold font-serif mb-2 text-accent">40+</div>
                <div className="text-sm md:text-base text-white/80">Export Countries</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold font-serif mb-2 text-accent">50K+</div>
                <div className="text-sm md:text-base text-white/80">Tons Annually</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold font-serif mb-2 text-accent">260+</div>
                <div className="text-sm md:text-base text-white/80">Distribution Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Explore Our Products?</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Browse our complete product catalog or contact our team for custom sourcing solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                Browse Full Catalog
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-foreground text-lg font-semibold rounded-md hover:bg-white/90 transition-all border border-border shadow-sm"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
