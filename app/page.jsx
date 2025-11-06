import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Globe, Leaf, TrendingUp } from "lucide-react"

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
    }
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
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/hero_bg.MP4" type="video/mp4" />
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
              className="inline-block px-10 py-5 bg-accent text-accent-foreground text-lg font-semibold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-xl focus:ring-4 focus:ring-accent/50"
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
              the finest regions of India, Vietnam, and West Africa. With decades of expertise and an unwavering commitment
              to quality, we serve distributors, manufacturers, and retailers across four continents.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-secondary">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Products</h2>
              <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                A diverse portfolio of premium agricultural and consumer products
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{product.name}</h3>
                    <p className="text-base text-muted mb-5 leading-relaxed">{product.description}</p>
                    <a
                      href="/products"
                      className="inline-flex items-center text-base font-semibold text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
                    >
                      Learn More
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach & Why Choose Combined Section */}
        <section className="relative py-24 overflow-hidden">
          <img
            src="/white_tiles.jpg"
            alt="White tiles background"
            className="absolute inset-0 w-full h-full object-cover z-0"
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
                    className="text-center p-10 bg-secondary rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border"
                  >
                    {region.image ? (
                      <img
                        src={region.image}
                        alt={region.name}
                        className="mx-auto mb-6 w-20 h-20 object-contain"
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
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg focus:ring-4 focus:ring-primary/50"
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
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 shadow-lg">
                        {value.image ? (
                          <img
                            src={value.image}
                            alt={value.title}
                            className="w-10 h-10 object-contain"
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
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-10" />
          <div className="relative z-20 container max-w-4xl text-center px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-balance text-white">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of satisfied clients worldwide who trust The King Group for their sourcing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-accent text-accent-foreground text-lg font-semibold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg focus:ring-4 focus:ring-accent/50"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="px-10 py-5 bg-white text-foreground text-lg font-semibold rounded-lg border-2 border-white hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-md focus:ring-4 focus:ring-white/50"
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
