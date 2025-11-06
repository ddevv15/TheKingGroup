import "./globals.css"
import FeedbackButton from "@/components/feedback-button"
import ClientErrorBoundary from "@/components/client-error-boundary"

export const metadata = {
  title: "The King Group - Global Agri-Export Excellence",
  description:
    "Leading global exporter of rice, cashew, cotton, oilseeds, spices, tiles, pharma, and supermarket products to Africa, Middle East, Europe, and Americas.",
  generator: "Next.js",
  keywords: [
    "agricultural exports",
    "rice exporter",
    "cashew nuts",
    "cotton exporter",
    "global trade",
    "agri-export",
    "commodity trading",
  ],
  authors: [{ name: "The King Group" }],
  creator: "The King Group",
  publisher: "The King Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thekinggroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The King Group - Global Agri-Export Excellence",
    description:
      "Leading global exporter of rice, cashew, cotton, oilseeds, spices, tiles, pharma, and supermarket products to Africa, Middle East, Europe, and Americas.",
    url: "/",
    siteName: "The King Group",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "verification_token_here",
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1e3a5f" />
      </head>
      <body suppressHydrationWarning>
        <ClientErrorBoundary>
          {children}
          <FeedbackButton />
        </ClientErrorBoundary>
      </body>
    </html>
  )
}
