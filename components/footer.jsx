import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const productCategories = [
    "Rice",
    "Cashew",
    "Cotton",
    "Oilseeds",
    "Spices",
    "Tiles",
    "Pharma",
    "Supermarket Products",
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Quality Assurance", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ]

  const regions = ["West Africa", "Middle East", "Europe", "SouthEast Asia", "South Asia"]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">The King Group</h3>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Global leader in agri-export, delivering quality products from India, Vietnam, and Thailand to markets
              worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">8, The King House,
                  <br />
                  Surmay Banglows,
                  <br />
                  Vijapur, Gujarat, India.
                  <br />
                  Pin code-382870
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +91 909 904 9384
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@thekinggroup.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@thekinggroup.in
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Export Regions</h5>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span key={region} className="text-xs px-2 py-1 bg-white/10 rounded">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} The King Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
