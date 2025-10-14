"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-border shadow-md">
      <nav className="container flex items-center justify-between py-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
        >
          <span className="text-2xl md:text-3xl font-serif font-bold text-primary">The King Group</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-3 py-2"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-3 bg-accent text-accent-foreground text-base font-semibold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-md focus:ring-4 focus:ring-accent/50"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-3 text-foreground hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container py-6 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-foreground hover:text-primary hover:bg-secondary transition-colors py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-accent text-accent-foreground text-base font-semibold rounded-lg hover:bg-accent/90 transition-colors text-center shadow-md focus:ring-4 focus:ring-accent/50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
