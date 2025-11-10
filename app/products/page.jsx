"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCardMinimal from "@/components/ProductCardMinimal"
import { Package, CheckCircle, MapPin } from "lucide-react"
import { getAllProducts, getCategories, getProductsByCategory } from "@/data/products"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const categories = getCategories()
  const filteredProducts = getProductsByCategory(selectedCategory)

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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCardMinimal key={product.id} product={product} />
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
