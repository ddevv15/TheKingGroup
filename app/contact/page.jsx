"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, Clock, Send, Package, FileText, Users } from "lucide-react"
import { getAllProducts } from "@/data/products"

function ContactForm() {
  const searchParams = useSearchParams()
  const products = getAllProducts()
  
  // Get product name from ID in URL params, or use product names list
  const productOptions = products.map((p) => p.name).concat(["Other"])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    productInterest: "",
    inquiryType: "",
    orderVolume: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Preselect product from URL query parameter
  useEffect(() => {
    const productId = searchParams.get("product")
    if (productId) {
      const product = products.find((p) => p.id === productId)
      if (product) {
        setFormData((prev) => ({ ...prev, productInterest: product.name }))
      }
    }
  }, [searchParams, products])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",
        phone: "",
        productInterest: "",
        inquiryType: "",
        orderVolume: "",
        message: "",
      })
    }, 1500)
  }

  const inquiryTypes = [
    "Product Information",
    "Price Quote",
    "Sample Request",
    "Partnership Opportunity",
    "Quality Certification",
    "Shipping & Logistics",
    "General Inquiry",
  ]

  const orderVolumes = [
    "Less than 1 container",
    "1-5 containers",
    "5-10 containers",
    "10-20 containers",
    "20+ containers",
    "Not sure yet",
  ]

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance leading-relaxed">
              Ready to partner with us? Our team is here to answer your questions and discuss your requirements
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-secondary p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-serif font-bold mb-2">Send Us a Message</h2>
                  <p className="text-sm text-muted mb-6">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                          placeholder="Nigeria"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label htmlFor="productInterest" className="block text-sm font-medium mb-2">
                          Product Interest *
                        </label>
                        <select
                          id="productInterest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        >
                          <option value="">Select a product</option>
                          {productOptions.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="orderVolume" className="block text-sm font-medium mb-2">
                          Expected Order Volume
                        </label>
                        <select
                          id="orderVolume"
                          name="orderVolume"
                          value={formData.orderVolume}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        >
                          <option value="">Select volume</option>
                          {orderVolumes.map((volume) => (
                            <option key={volume} value={volume}>
                              {volume}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow"
                        placeholder="Tell us about your requirements, specifications, delivery timeline, or any other details..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800 text-sm font-medium">
                          ✓ Thank you for your message! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">General Inquiries</p>
                        <a
                          href="mailto:info@thekinggroup.in"
                          className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          info@thekinggroup.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={20} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Phone (HQ)</p>
                        <a
                          href="tel:+919099049384"
                          className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          +91 909 904 9384
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Business Hours</p>
                        <p className="text-sm text-primary-foreground/90">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-sm text-primary-foreground/90">Sat: 9:00 AM - 1:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Package size={24} />
                    <h3 className="text-xl font-semibold">Sales & Quotes</h3>
                  </div>
                  <p className="text-sm mb-4 leading-relaxed">
                    Need a detailed quote for bulk orders? Our sales team will provide competitive pricing and delivery
                    timelines.
                  </p>
                  <a href="mailto:cmo@thekinggroup.in" className="text-sm font-medium underline hover:no-underline">
                    cmo@thekinggroup.in
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold">Documentation</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    Request product specifications, certificates, or compliance documents.
                  </p>
                  <a
                    href="mailto:info@thekinggroup.in"
                    className="text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    info@thekinggroup.in
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold">Visit Our Offices</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    Schedule a visit to our facilities or meet our team at one of our global offices.
                  </p>
                  <a href="/global-presence" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    View All Locations →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted">Quick answers to common inquiries</p>
            </div>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>What is your minimum order quantity?</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed pl-0">
                  Minimum order quantities vary by product. For rice and grains, we typically require a minimum of one
                  20-foot container. For spices and specialty products, smaller quantities may be available. Contact us
                  for specific MOQ details.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>What are your payment terms?</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed pl-0">
                  We offer flexible payment terms including Letter of Credit (LC), Telegraphic Transfer (TT), and other
                  arrangements based on order value and customer relationship. Terms are discussed during quotation.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>How long does shipping take?</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed pl-0">
                  Shipping times depend on destination and product. Typically, sea freight to Africa takes 3-4 weeks,
                  Middle East 2-3 weeks, Europe 4-5 weeks, and Americas 5-6 weeks. Air freight options are available for
                  urgent orders.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>Do you provide samples?</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed pl-0">
                  Yes, we provide samples for quality evaluation. Sample costs and shipping charges apply, which may be
                  adjusted against future orders. Contact us to request samples with your specific requirements.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>What certifications do your products have?</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed pl-0">
                  Our products carry various certifications including ISO, HACCP, FSSAI, Organic, Fair Trade, and others
                  depending on the product category. We can provide specific certification documentation upon request.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <main className="pt-28">
            <section className="py-20 bg-white">
              <div className="container">
                <div className="text-center">Loading...</div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      }
    >
      <ContactForm />
    </Suspense>
  )
}
