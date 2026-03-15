"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageContent />
    </Suspense>
  )
}

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") ?? undefined
  const { data, isLoading } = useProducts(category)

  if (isLoading)
    return <ProductsPageSkeleton />

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        {category ? "Products / " + category : "Products"}
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

function ProductsPageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        Products
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
