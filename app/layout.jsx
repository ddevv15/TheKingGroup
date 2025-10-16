import "./globals.css"
import FeedbackButton from "@/components/feedback-button"

export const metadata = {
  title: "The King Group - Global Agri-Export Excellence",
  description:
    "Leading global exporter of rice, cashew, cotton, oilseeds, spices, tiles, pharma, and supermarket products to Africa, Middle East, Europe, and Americas.",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <FeedbackButton />
      </body>
    </html>
  )
}
