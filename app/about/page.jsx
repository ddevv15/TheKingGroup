import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Users, Target, TrendingUp, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2008", title: "Company Founded", description: "Started as a small rice exporter in Mumbai" },
    { year: "2014", title: "Regional Expansion", description: "Expanded operations to Vietnam and West Africa" },
    { year: "2016", title: "Product Diversification", description: "Added cashew, cotton, and oilseeds to portfolio" },
    { year: "2019", title: "Global Presence", description: "Established supply-chain in 15+ countries" },
    { year: "2025", title: "Strategic Alliances", description: "Accelerated business growth with trusted partnerships and market expansion." },
  ]

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We maintain the highest standards in product selection, processing, and delivery. Every shipment undergoes rigorous quality control.",
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description:
        "We build long-term relationships based on trust, transparency, and mutual growth with our global partners.",
    },
    {
      icon: Target,
      title: "Reliability",
      description:
        "Consistent supply, competitive pricing, and on-time delivery are the cornerstones of our operations.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously improve our processes, adopt new technologies, and explore emerging markets.",
    },
  ]

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "AFI Certified",
    "APEDA Certified",
    "BCI Certified",
    "FSSAI Certified",
    "TEXPROCIL",
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">The King Group</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance leading-relaxed">
            Trusted Agro-Commodity Partner ensuring rigorous quality control and certified agricultural products via a streamlined international supply chain.            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted leading-relaxed">
                  <p>
                  Founded on over a decade of deep experience in the raw cotton trade that began with Komal Amin Exports in Ahmedabad, Gujarat, The King Group evolved from an agro-commodities sourcing specialist into a diversified agri-export and commodity trading consortium. Early mastery of raw cotton sourcing, quality control, and export documentation created the operational backbone for broader commodity exports.
                  </p>
                  <p>
                  Since formalizing operations with The Karunesh Corporation in 2019, the group expanded into rice, cashew, oilseeds, spices, tiles, pharmaceuticals, and FMCG — supplying certified agricultural products to buyers across Africa, the Middle East, Southeast Asia and the Americas. Integrated supply-chain management, vendor partnerships, and rigorous laboratory testing ensure traceability, export-grade packing and on-time delivery for international markets.
                  </p>
                  <p>
                  Today, The King Group is a merchant exporter and purchasing partner that combines Gujarat-rooted sourcing expertise with global logistics capability. Focused on sustainable sourcing, ethical trade, competitive pricing and long-term partnerships, we deliver high-quality, certified agri-products to international buyers while maintaining strict quality assurance and transparent export processes.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="The King Group facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                The King Group delivers certified agricultural products globally via sustainable sourcing, strict quality control and transparent logistics—ensuring traceability, on-time delivery and long lasting partnerships.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                The King Group advances as an emerging partner in global trade by delivering sustainable sourcing and exemplary supply-chain solutions to deliver high-quality agricultural products internationally with integrity and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">The principles that guide every decision we make</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quality Assurance & Certifications */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Quality Assurance</h2>
                <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                  Quality is not just a promise—it's our guarantee. Every product undergoes multiple quality checks from
                  source to destination, ensuring compliance with international standards and customer specifications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1 text-accent" />
                    <p className="text-primary-foreground/90">
                      Rigorous supplier vetting and regular audits of processing facilities
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1 text-accent" />
                    <p className="text-primary-foreground/90">
                      Laboratory testing for purity, moisture content, and contamination
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1 text-accent" />
                    <p className="text-primary-foreground/90">Temperature-controlled storage and transportation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1 text-accent" />
                    <p className="text-primary-foreground/90">Full traceability from farm to final destination</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Certifications & Standards</h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                      <Award size={32} className="mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Key milestones in our growth story</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-2xl font-serif font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Our Success Story</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
            Unlock global supply chain efficiency and consistent product quality.            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground text-lg font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
