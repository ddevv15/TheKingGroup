"use client"

import { useState } from "react"
import { Mail, Linkedin } from "lucide-react"
import Header from "@/components/header"

export default function LeadershipPage() {
  const boardMembers = [
    {
      name: "Vicky Patel",
      title: "Chairman & Founder",
      image: "/professional-indian-businessman-chairman.jpg",
      bio: "Founded The King Group in 2008 with a vision to connect global markets with quality agricultural products. Under his leadership, the company has grown from a regional trader to a global agri-export powerhouse.",
      linkedin: "https://www.linkedin.com/in/vicky-patel-8999506b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "info@thekinggroup.in",
    },
    {
      name: "Priya Sharma",
      title: "Chief Executive Officer",
      image: "/professional-indian-businesswoman-ceo.jpg",
      bio: "Brings over 20 years of experience in international trade and supply chain management. Leads the company's strategic expansion into new markets and product categories.",
      linkedin: "#",
      email: "priya.sharma@thekinggroup.com",
    },
    {
      name: "Michael Chen",
      title: "Chief Financial Officer",
      image: "/professional-asian-businessman-cfo.jpg",
      bio: "Former investment banker with expertise in emerging markets. Oversees financial strategy, risk management, and investor relations for The King Group's global operations.",
      linkedin: "#",
      email: "michael.chen@thekinggroup.com",
    },
    {
      name: "Yashrajsinh Zala",
      title: "Chief Marketing Officer",
      image: "/yashraj.jpeg",
      bio: "Multi-disciplinary entrepreneur passionate about global commerce, market strategy, and value creation. Leading growth in import-export while fostering strong international partnerships.",
      linkedin: "https://www.linkedin.com/in/yashrajsinh-zala-83469831a/",
      email: "cmo@thekinggroup.in",
    },
  ]

  const executiveTeam = [
    {
      name: "Amit Patel",
      title: "Chief Operating Officer",
      image: "/professional-indian-businessman-operations.jpg",
      bio: "Manages day-to-day operations across all product categories and regions. Expert in logistics optimization and quality assurance.",
      linkedin: "#",
      email: "amit.patel@thekinggroup.com",
    },
    {
      name: "David Martinez",
      title: "Head of Supply Chain",
      image: "/professional-hispanic-businessman-supply-chain.jpg",
      bio: "Oversees procurement, warehousing, and distribution networks across 40+ countries. Specializes in agricultural commodity trading.",
      linkedin: "#",
      email: "david.martinez@thekinggroup.com",
    },
    {
      name: "Fatima Al-Rashid",
      title: "Regional Director - Middle East & Africa",
      image: "/professional-middle-eastern-businesswoman-director.jpg",
      bio: "Leads operations in the Middle East and African markets. Expert in regional trade regulations and market development.",
      linkedin: "#",
      email: "fatima.alrashid@thekinggroup.com",
    },
    {
      name: "James Thompson",
      title: "Regional Director - Europe & Americas",
      image: "/professional-caucasian-businessman-director.jpg",
      bio: "Manages European and American operations with focus on market expansion and strategic partnerships.",
      linkedin: "#",
      email: "james.thompson@thekinggroup.com",
    },
    {
      name: "Dr. Ananya Reddy",
      title: "Head of Quality Assurance",
      image: "/professional-indian-businesswoman-scientist-qualit.jpg",
      bio: "PhD in Food Science. Ensures compliance with international quality standards and manages certification processes.",
      linkedin: "#",
      email: "ananya.reddy@thekinggroup.com",
    },
    {
      name: "Robert Kim",
      title: "Head of Business Development",
      image: "/professional-asian-businessman-business-developmen.jpg",
      bio: "Identifies new market opportunities and strategic partnerships. Former consultant with expertise in emerging markets.",
      linkedin: "#",
      email: "robert.kim@thekinggroup.com",
    },
  ]

  return (
    <div className="min-h-screen pt-28">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Board & Leadership</h1>
            <p className="text-xl text-white/90 leading-relaxed text-pretty">
              Meet the visionary leaders driving The King Group's mission to connect global markets with quality
              agricultural products.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Board of Directors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our board brings decades of combined experience in agriculture, finance, and international trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <LeaderCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Executive Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our executive team leads operations across all regions and product categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <LeaderCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Leadership Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Our leadership team is committed to sustainable growth, ethical business practices, and creating value for
              all stakeholders. We believe in transparency, innovation, and building long-term partnerships that benefit
              communities worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-xl shadow-md border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground text-pretty">
                  We conduct business with the highest ethical standards and transparency.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground text-pretty">
                  We embrace new technologies and methods to improve efficiency and sustainability.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Partnership</h3>
                <p className="text-muted-foreground text-pretty">
                  We build lasting relationships with suppliers, customers, and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LeaderCard({ member }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-accent mb-3">{member.title}</p>
        <p
          className={`text-sm text-muted-foreground leading-relaxed mb-4 text-pretty ${!isExpanded && "line-clamp-3"}`}
        >
          {member.bio}
        </p>
        {member.bio.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors mb-4"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
        <div className="flex gap-3 pt-3 border-t border-border">
          <a
            href={`mailto:${member.email}`}
            className="p-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="w-4 h-4 text-foreground" />
          </a>
          <a
            href={member.linkedin}
            className="p-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="w-4 h-4 text-foreground" />
          </a>
        </div>
      </div>
    </div>
  )
}
