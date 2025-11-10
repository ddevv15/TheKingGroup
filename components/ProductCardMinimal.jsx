import Link from "next/link"
import Image from "next/image"

export default function ProductCardMinimal({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-200 gpu-lift-hover"
      aria-label={`${product.name} details`}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Product Name */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </div>
    </Link>
  )
}

