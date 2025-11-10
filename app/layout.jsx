import "./globals.css";
import Script from "next/script";
import FeedbackButton from "@/components/feedback-button";
import ClientErrorBoundary from "@/components/client-error-boundary";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://thekinggroup.com"
  ),
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MRRGD2QP');
          `}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6202592FZL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6202592FZL');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1e3a5f" />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRRGD2QP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientErrorBoundary>
          {children}
          <FeedbackButton />
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
