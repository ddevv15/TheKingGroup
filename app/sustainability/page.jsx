import Header from "@/components/header"
import Footer from "@/components/footer"
import { Leaf, Droplet, Recycle, Users, Sun, Heart, CheckCircle } from "lucide-react"

export default function SustainabilityPage() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description:
        "We partner with farmers who practice sustainable agriculture, promoting crop rotation, organic farming, and biodiversity conservation.",
      achievements: [
        "60% of suppliers certified organic",
        "Zero deforestation policy",
        "Fair trade partnerships with 200+ farmers",
      ],
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description:
        "Implementing water-efficient irrigation systems and promoting water conservation practices across our supply chain.",
      achievements: [
        "30% reduction in water usage",
        "Rainwater harvesting at facilities",
        "Drip irrigation support for farmers",
      ],
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description:
        "Comprehensive waste management programs focusing on reduction, reuse, and recycling throughout our operations.",
      achievements: [
        "85% waste recycling rate",
        "Biodegradable packaging options",
        "Zero waste to landfill goal by 2025",
      ],
    },
    {
      icon: Sun,
      title: "Carbon Neutrality",
      description:
        "Committed to reducing our carbon footprint through renewable energy adoption and efficient logistics.",
      achievements: [
        "Carbon neutral operations since 2023",
        "Solar power at 4 facilities",
        "Optimized shipping routes",
      ],
    },
    {
      icon: Users,
      title: "Community Development",
      description:
        "Investing in local communities through education, healthcare, and infrastructure development programs.",
      achievements: [
        "500+ farmers trained annually",
        "Healthcare access for 2,000+ families",
        "Education scholarships for 100+ children",
      ],
    },
    {
      icon: Heart,
      title: "Fair Labor Practices",
      description:
        "Ensuring fair wages, safe working conditions, and respect for workers' rights throughout our supply chain.",
      achievements: ["100% compliance with labor laws", "Living wage guarantee", "Worker safety training programs"],
    },
  ]

  const certifications = [
    { name: "Organic Certification", body: "USDA, EU Organic" },
    { name: "Fair Trade Certified", body: "Fair Trade International" },
    { name: "Rainforest Alliance", body: "Sustainable Agriculture" },
    { name: "ISO 14001", body: "Environmental Management" },
    { name: "Carbon Trust Standard", body: "Carbon Neutrality" },
    { name: "SA8000", body: "Social Accountability" },
  ]

  const goals = [
    { year: "2025", goal: "100% renewable energy at all facilities" },
    { year: "2026", goal: "Zero waste to landfill across operations" },
    { year: "2027", goal: "50% reduction in supply chain emissions" },
    { year: "2030", goal: "100% sustainable sourcing for all products" },
  ]

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative py-32 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/sustainability.jpg?height=600&width=1200"
              alt="Sustainable farming"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-primary/30" />
          <div className="relative container text-center z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Sustainability & Quality</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance leading-relaxed">
              Building a sustainable future through responsible practices and unwavering commitment to quality
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-muted leading-relaxed">
              At The King Group, sustainability is not just a buzzword—it's the foundation of our business. We believe
              that economic success must go hand-in-hand with environmental stewardship and social responsibility. From
              farm to final destination, we implement practices that protect our planet, support communities, and ensure
              the highest quality products for our customers.
            </p>
          </div>
        </section>

        {/* Sustainability Initiatives */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Initiatives</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Comprehensive programs driving positive environmental and social impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative) => {
                const Icon = initiative.icon
                return (
                  <div key={initiative.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{initiative.description}</p>
                    <div className="space-y-2">
                      {initiative.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                          <span className="text-xs text-muted">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Quality Assurance</h2>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  Our commitment to quality begins at the source and continues through every stage of processing,
                  packaging, and delivery. We employ rigorous testing protocols and maintain certifications from leading
                  international bodies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Source Verification</h4>
                      <p className="text-sm text-muted">Direct relationships with certified farmers and processors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Laboratory Testing</h4>
                      <p className="text-sm text-muted">
                        Comprehensive analysis for purity, contamination, and quality parameters
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Traceability</h4>
                      <p className="text-sm text-muted">Full chain of custody from farm to final destination</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold mb-1">Continuous Monitoring</h4>
                      <p className="text-sm text-muted">Regular audits and quality checks throughout the process</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Quality control laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Certifications & Standards</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Recognized by leading international certification bodies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <CheckCircle size={32} className="mx-auto mb-3 text-accent" />
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-primary-foreground/80">{cert.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our 2030 Roadmap</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Ambitious targets for a sustainable future</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {goals.map((goal, index) => (
                <div key={goal.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                    {goal.year}
                  </div>
                  <div className="flex-1 bg-secondary p-6 rounded-lg">
                    <p className="text-lg font-medium">{goal.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Our Sustainability Journey</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Partner with us to build a more sustainable and responsible supply chain
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground text-lg font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
