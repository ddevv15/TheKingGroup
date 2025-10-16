import Header from "@/components/header"
import Footer from "@/components/footer"
import { Globe, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function GlobalPresencePage() {
  const regions = [
    {
      name: "Africa",
      countries: [
        "Nigeria",
        "Kenya",
        "South Africa",
        "Ghana",
        "Tanzania",
        "Uganda",
        "Ethiopia",
        "Mozambique",
        "Senegal",
        "Ivory Coast",
        "Cameroon",
        "Angola",
        "Zimbabwe",
        "Zambia",
        "Rwanda",
      ],
      description:
        "Our largest export market, serving diverse needs from staple foods to building materials across 15+ countries.",
      stats: { partners: "120+", volume: "45%", growth: "+18%" },
    },
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Jordan", "Iraq"],
      description:
        "Premium products for discerning markets with focus on quality rice, spices, and pharmaceutical products.",
      stats: { partners: "65+", volume: "30%", growth: "+22%" },
    },
    {
      name: "Europe",
      countries: [
        "United Kingdom",
        "Germany",
        "France",
        "Netherlands",
        "Belgium",
        "Italy",
        "Spain",
        "Poland",
        "Portugal",
        "Greece",
        "Romania",
        "Czech Republic",
      ],
      description:
        "Specialty products including organic spices, premium cashews, and certified pharmaceutical ingredients.",
      stats: { partners: "45+", volume: "15%", growth: "+12%" },
    },
    {
      name: "Americas",
      countries: ["USA", "Canada", "Brazil", "Mexico", "Argentina", "Chile"],
      description: "Growing market for authentic Indian spices, specialty rice varieties, and nutraceuticals.",
      stats: { partners: "30+", volume: "10%", growth: "+25%" },
    },
  ]

  const offices = [
    {
      name: "Headquarters",
      location: "Mumbai, India",
      address: "123 Export Plaza, Andheri East, Mumbai 400069, India",
      phone: "+91 22 1234 5678",
      email: "india@thekinggroup.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM IST, Sat: 9:00 AM - 1:00 PM IST",
      type: "Headquarters",
      description:
        "Our global headquarters and primary operations center, managing exports across all product categories.",
    },
    {
      name: "Vietnam Office",
      location: "Ho Chi Minh City, Vietnam",
      address: "456 Nguyen Hue Boulevard, District 1, Ho Chi Minh City, Vietnam",
      phone: "+84 28 1234 5678",
      email: "vietnam@thekinggroup.com",
      hours: "Mon - Fri: 8:30 AM - 5:30 PM ICT",
      type: "Regional Office",
      description: "Regional hub for Southeast Asian operations, specializing in rice and cashew procurement.",
    },
    {
      name: "Thailand Office",
      location: "Bangkok, Thailand",
      address: "789 Sukhumvit Road, Khlong Toei, Bangkok 10110, Thailand",
      phone: "+66 2 123 4567",
      email: "thailand@thekinggroup.com",
      hours: "Mon - Fri: 8:30 AM - 5:30 PM ICT",
      type: "Regional Office",
      description: "Strategic location for logistics coordination and quality control in Southeast Asia.",
    },
    {
      name: "UAE Office",
      location: "Dubai, UAE",
      address: "321 Sheikh Zayed Road, Dubai, United Arab Emirates",
      phone: "+971 4 123 4567",
      email: "uae@thekinggroup.com",
      hours: "Sun - Thu: 9:00 AM - 6:00 PM GST",
      type: "Regional Office",
      description: "Gateway to Middle East and African markets, handling distribution and client relations.",
    },
    {
      name: "Nigeria Office",
      location: "Lagos, Nigeria",
      address: "Victoria Island, Lagos, Nigeria",
      phone: "+234 1 234 5678",
      email: "nigeria@thekinggroup.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM WAT",
      type: "Representative Office",
      description: "Supporting our largest African market with local presence and customer service.",
    },
    {
      name: "Kenya Office",
      location: "Nairobi, Kenya",
      address: "Westlands, Nairobi, Kenya",
      phone: "+254 20 123 4567",
      email: "kenya@thekinggroup.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM EAT",
      type: "Representative Office",
      description: "East African hub for distribution and market development.",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/placeholder.svg?height=600&width=1200" alt="World map" className="w-full h-full object-cover" />
          </div>
          <div className="relative container text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Global Presence</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance leading-relaxed">
              Connecting 40+ countries across four continents with quality products and reliable service
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-primary mb-2">40+</div>
                <p className="text-muted">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-primary mb-2">260+</div>
                <p className="text-muted">Active Partners</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-primary mb-2">6</div>
                <p className="text-muted">Global Offices</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-primary mb-2">50K+</div>
                <p className="text-muted">Tons Exported Annually</p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Breakdown */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Markets</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Strategic presence across key regions worldwide</p>
            </div>
            <div className="space-y-8">
              {regions.map((region) => (
                <div key={region.name} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe size={32} className="text-primary" />
                        <h3 className="text-3xl font-serif font-bold">{region.name}</h3>
                      </div>
                      <p className="text-muted mb-6 leading-relaxed">{region.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country) => (
                          <span key={country} className="px-3 py-1 bg-secondary text-sm rounded-full">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">{region.stats.partners}</div>
                        <div className="text-sm text-muted">Business Partners</div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">{region.stats.volume}</div>
                        <div className="text-sm text-muted">Export Volume</div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-accent">{region.stats.growth}</div>
                        <div className="text-sm text-muted">YoY Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Offices</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Visit us at any of our strategically located offices around the world
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="bg-secondary p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-1">{office.name}</h3>
                      <p className="text-sm text-accent font-medium">{office.type}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-6">{office.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Address</p>
                        <p className="text-sm text-muted">{office.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Phone</p>
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="text-sm text-primary hover:text-accent transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Email</p>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm text-primary hover:text-accent transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">Business Hours</p>
                        <p className="text-sm text-muted">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expand Your Business With Us</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Join our global network of partners and access quality products with reliable supply chains
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground text-lg font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
