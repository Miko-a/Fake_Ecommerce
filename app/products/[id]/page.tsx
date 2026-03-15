"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"
import { useProduct } from "@/hooks/useProduct"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"

function toLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data } = useProduct(id as string)
  const { addItem } = useCart()

  if (!data) {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 h-4 w-40 animate-pulse rounded bg-[var(--card-hover)]" />
        <div className="grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-xl bg-[var(--card-hover)]" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 animate-pulse rounded bg-[var(--card-hover)]" />
            <div className="h-4 w-full animate-pulse rounded bg-[var(--card-hover)]" />
            <div className="h-4 w-full animate-pulse rounded bg-[var(--card-hover)]" />
          </div>
        </div>
      </div>
    )
  }

  const rating = data.rating?.rate ?? 0
  const ratingCount = data.rating?.count ?? 0

  return (
    <div className="mx-auto max-w-6xl space-y-4">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link
          href="/products"
          className="inline-flex items-center gap-1 rounded-lg px-1.5 py-0.5 transition hover:bg-[var(--card-hover)] hover:text-[var(--foreground)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Products
        </Link>
        <span className="text-[var(--muted)]">/</span>
        <Link
          href={`/products?category=${encodeURIComponent(data.category)}`}
          className="rounded-lg px-1.5 py-0.5 text-[var(--primary)] transition hover:bg-[var(--card-hover)]"
        >
          {toLabel(data.category)}
        </Link>
        <span className="text-[var(--muted)]">/</span>
        <span className="truncate text-[var(--foreground)]">{data.title}</span>
      </nav>

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl bg-[var(--card-hover)] p-8">
            <Image
              src={data.image}
              alt={data.title}
              width={400}
              height={400}
              className="h-80 w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
                <span>{toLabel(data.category)}</span>
              </div>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
                {data.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <div className="inline-flex items-center gap-1 rounded-full bg-[var(--card-hover)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]">
                  <Star className="h-3.5 w-3.5 fill-[var(--primary)] text-[var(--primary)]" />
                  <span>
                    {rating.toFixed(1)}{" "}
                    <span className="text-[var(--muted)]">({ratingCount} reviews)</span>
                  </span>
                </div>
                <span className="text-[var(--muted)]">
                  Ships in 1–3 business days
                </span>
              </div>
              <p className="mt-5 text-[var(--muted)]">{data.description}</p>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold text-[var(--primary)]">
                ${data.price}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  onClick={() =>
                    addItem({
                      id: data.id,
                      title: data.title,
                      price: data.price,
                      image: data.image,
                      quantity: 1,
                    })
                  }
                >
                  Add to Cart
                </Button>
                <Link
                  href="/cart"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card-hover)]"
                >
                  View Cart
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-3 rounded-xl bg-[var(--background)] px-4 py-3 text-xs text-[var(--muted)] sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    Returns
                  </p>
                  <p>30-day hassle-free returns on unused items.</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    Warranty
                  </p>
                  <p>1-year limited warranty for manufacturing defects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
