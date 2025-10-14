import Header from "@/components/header"
import Footer from "@/components/footer"
import { Globe, MapPin } from "lucide-react"

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
    { city: "Mumbai", country: "India", type: "Headquarters" },
    { city: "Ho Chi Minh City", country: "Vietnam", type: "Regional Office" },
    { city: "Bangkok", country: "Thailand", type: "Regional Office" },
    { city: "Dubai", country: "UAE", type: "Regional Office" },
    { city: "Lagos", country: "Nigeria", type: "Representative Office" },
    { city: "Nairobi", country: "Kenya", type: "Representative Office" },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
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

        {/* Office Locations */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Offices</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Strategic locations to serve you better</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div key={`${office.city}-${office.country}`} className="bg-secondary p-6 rounded-lg">
                  <MapPin size={24} className="text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-1">{office.city}</h3>
                  <p className="text-sm text-muted mb-2">{office.country}</p>
                  <span className="inline-block px-3 py-1 bg-white text-xs font-medium rounded-full">
                    {office.type}
                  </span>
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
