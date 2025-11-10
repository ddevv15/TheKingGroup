import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Package, ArrowLeft } from "lucide-react"

export default function ProductNotFound() {
  return (
    <>
      <Header />
      <main className="pt-28 min-h-screen">
        <section className="py-20 bg-white">
          <div className="container max-w-2xl text-center">
            <div className="mb-8">
              <Package size={64} className="mx-auto text-muted mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Product Not Found</h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <ArrowLeft size={18} />
              Back to Products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

