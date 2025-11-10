import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProductById, getAllProducts } from "@/data/products"
import { MapPin, Package, CheckCircle, ArrowRight, Home } from "lucide-react"

// Generate static params for all products at build time
export async function generateStaticParams() {
  const products = getAllProducts()
  
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: "Product Not Found | The King Group",
    }
  }

  const description = product.description.length > 160 
    ? product.description.substring(0, 157) + "..." 
    : product.description

  return {
    title: `${product.name} | The King Group`,
    description,
    openGraph: {
      title: `${product.name} | The King Group`,
      description,
      images: [
        {
          url: product.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Breadcrumbs */}
        <section className="py-4 bg-secondary border-b border-border">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home size={16} />
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Hero Content */}
              <div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
                  {product.name}
                </h1>
                <p className="text-lg md:text-xl text-muted leading-relaxed max-w-prose mb-6">
                  {product.description}
                </p>
                <Link
                  href={`/contact?product=${product.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Request Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        

        {/* Varieties Section */}
        {product.varieties && product.varieties.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Available Varieties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.varieties.map((variety, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border/50"
                  >
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{variety}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Specifications Section */}
        {product.specifications && product.specifications.length > 0 && (
          <section className="py-12 md:py-16 bg-secondary">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border/50"
                  >
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Origins & Export Destinations */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Origins */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={24} className="text-primary" />
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">Origin Countries</h2>
                </div>
                <div className="space-y-3">
                  {Array.isArray(product.origin) ? (
                    product.origin.map((origin, index) => (
                      <div
                        key={index}
                        className="p-4 bg-secondary rounded-lg border border-border/50"
                      >
                        <p className="text-foreground">{origin}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 bg-secondary rounded-lg border border-border/50">
                      <p className="text-foreground">{product.origin}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Export Destinations */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Package size={24} className="text-primary" />
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">Export Destinations</h2>
                </div>
                <div className="space-y-3">
                  {Array.isArray(product.destinations) ? (
                    product.destinations.map((destination, index) => (
                      <div
                        key={index}
                        className="p-4 bg-secondary rounded-lg border border-border/50"
                      >
                        <p className="text-foreground">{destination}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 bg-secondary rounded-lg border border-border/50">
                      <p className="text-foreground">{product.destinations}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        {product.certs && product.certs.length > 0 && (
          <section className="py-12 md:py-16 bg-secondary">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Certifications</h2>
              <div className="flex flex-wrap gap-3">
                {product.certs.map((cert, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packaging Section */}
        {product.packaging && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Packaging</h2>
              <div className="max-w-prose">
                {typeof product.packaging === "object" && product.packaging.type && (
                  <div className="p-6 bg-secondary rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">{product.packaging.type}</h3>
                    {product.packaging.description && (
                      <p className="text-muted leading-relaxed">{product.packaging.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Interested in {product.name}?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Contact our team for pricing, samples, and detailed specifications
            </p>
            <Link
              href={`/contact?product=${product.id}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-lg font-semibold rounded-lg hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              Request Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

