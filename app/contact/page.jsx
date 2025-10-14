"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    productInterest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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
        message: "",
      })
    }, 1500)
  }

  const offices = [
    {
      name: "Headquarters",
      location: "Mumbai, India",
      address: "123 Export Plaza, Andheri East, Mumbai 400069, India",
      phone: "+91 22 1234 5678",
      email: "india@thekinggroup.com",
    },
    {
      name: "Vietnam Office",
      location: "Ho Chi Minh City, Vietnam",
      address: "456 Nguyen Hue Boulevard, District 1, Ho Chi Minh City, Vietnam",
      phone: "+84 28 1234 5678",
      email: "vietnam@thekinggroup.com",
    },
    {
      name: "Thailand Office",
      location: "Bangkok, Thailand",
      address: "789 Sukhumvit Road, Khlong Toei, Bangkok 10110, Thailand",
      phone: "+66 2 123 4567",
      email: "thailand@thekinggroup.com",
    },
    {
      name: "UAE Office",
      location: "Dubai, UAE",
      address: "321 Sheikh Zayed Road, Dubai, United Arab Emirates",
      phone: "+971 4 123 4567",
      email: "uae@thekinggroup.com",
    },
  ]

  const products = [
    "Rice",
    "Cashew Nuts",
    "Cotton",
    "Oilseeds",
    "Spices",
    "Tiles",
    "Pharmaceutical Products",
    "Supermarket Products",
    "Other",
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
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
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-secondary p-8 rounded-lg">
                  <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
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
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a product</option>
                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
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
                        className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your requirements, quantity needed, destination country, etc."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800 text-sm">
                          Thank you for your message! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Email</p>
                        <a
                          href="mailto:info@thekinggroup.com"
                          className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          info@thekinggroup.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={20} className="mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Phone</p>
                        <a
                          href="tel:+912212345678"
                          className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          +91 22 1234 5678
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

                <div className="bg-accent text-accent-foreground p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
                  <p className="text-sm mb-4 leading-relaxed">
                    Need a detailed quote for bulk orders? Our sales team will provide competitive pricing and delivery
                    timelines.
                  </p>
                  <a href="mailto:sales@thekinggroup.com" className="text-sm font-medium underline hover:no-underline">
                    sales@thekinggroup.com
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Schedule a visit to our facilities or meet our team at one of our global offices. Contact us to
                    arrange an appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Offices</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Connect with our teams across the globe</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office) => (
                <div key={office.name} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{office.name}</h3>
                      <p className="text-sm text-muted">{office.location}</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-9">
                    <p className="text-sm text-muted">{office.address}</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-sm text-primary hover:text-accent transition-colors"
                      >
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-primary hover:text-accent transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted">Quick answers to common inquiries</p>
            </div>
            <div className="space-y-6">
              <details className="bg-secondary p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer">What is your minimum order quantity?</summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Minimum order quantities vary by product. For rice and grains, we typically require a minimum of one
                  20-foot container. For spices and specialty products, smaller quantities may be available. Contact us
                  for specific MOQ details.
                </p>
              </details>
              <details className="bg-secondary p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer">What are your payment terms?</summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  We offer flexible payment terms including Letter of Credit (LC), Telegraphic Transfer (TT), and other
                  arrangements based on order value and customer relationship. Terms are discussed during quotation.
                </p>
              </details>
              <details className="bg-secondary p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer">How long does shipping take?</summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Shipping times depend on destination and product. Typically, sea freight to Africa takes 3-4 weeks,
                  Middle East 2-3 weeks, Europe 4-5 weeks, and Americas 5-6 weeks. Air freight options are available for
                  urgent orders.
                </p>
              </details>
              <details className="bg-secondary p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer">Do you provide samples?</summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Yes, we provide samples for quality evaluation. Sample costs and shipping charges apply, which may be
                  adjusted against future orders. Contact us to request samples with your specific requirements.
                </p>
              </details>
              <details className="bg-secondary p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer">What certifications do your products have?</summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
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
