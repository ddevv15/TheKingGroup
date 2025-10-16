"use client"

import CardNav from "./card-nav"

export default function Header() {
  const items = [
    {
      label: "Company",
      bgColor: "#1e3a5f",
      textColor: "#fff",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "Learn about The King Group" },
        { label: "Board & Leadership", href: "/leadership", ariaLabel: "Meet our leadership team" },
        { label: "Sustainability", href: "/sustainability", ariaLabel: "Our sustainability initiatives" },
        { label: "Global Presence", href: "/global-presence", ariaLabel: "Our global reach" },
      ],
    },
    {
      label: "Products",
      bgColor: "#2a4a70",
      textColor: "#fff",
      links: [
        { label: "Products Overview", href: "/products/overview", ariaLabel: "Overview of all products" },
        { label: "Product Catalog", href: "/products", ariaLabel: "Browse full product catalog" },
      ],
    },
    {
      label: "Connect",
      bgColor: "#d4af37",
      textColor: "#000",
      links: [{ label: "Contact Us", href: "/contact", ariaLabel: "Get in touch" }],
    },
  ]

  return (
    <CardNav
      logoAlt="The King Group"
      items={items}
      baseColor="#ffffff"
      menuColor="#1e3a5f"
      buttonBgColor="#d4af37"
      buttonTextColor="#000000"
      buttonHref="/contact"
      ease="power3.out"
    />
  )
}
