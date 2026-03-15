"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FEATURED_COUNT = 6

export function FeaturedProducts() {
  const { data: products, isLoading } = useProducts()

  if (isLoading) {
    return (
      <section>
        <h2 className="mb-6 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
          Featured products
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {Array.from({ length: FEATURED_COUNT }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </section>
    )
  }

  const featured = products?.slice(0, FEATURED_COUNT) ?? []

  if (featured.length === 0) return null

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
          Featured products
        </h2>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] transition hover:underline"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
