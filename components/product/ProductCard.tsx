"use client"

import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm transition hover:border-[var(--primary)]/20 hover:shadow-md">
        <div className="flex aspect-square justify-center rounded-xl bg-[var(--card-hover)] p-4">
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 line-clamp-2 text-sm font-medium text-[var(--foreground)]">
          {product.title}
        </h3>
        <p className="mt-2 text-lg font-bold text-[var(--primary)]">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
