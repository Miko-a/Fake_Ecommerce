"use client"

import { useCategories } from "@/hooks/useCategories"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const category_count = 6

function toLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
  }
  
  export function ShopByCategory() {
    const { data: categories, isLoading } = useCategories()
    
    if (isLoading) {
      return (
        <section>
        <h2 className="mb-4 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
          Shop by category
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
            key={i}
            className="h-14 animate-pulse rounded-2xl bg-[var(--card-hover)]"
            />
          ))}
        </div>
      </section>
    )
  }

  const visibleCategories = categories?.slice(0, category_count) ?? []

  if (!categories?.length) return null

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
          Shop by category
        </h2>
        <Link
          href="/categories"
          className="text-sm font-medium text-[var(--primary)] transition hover:underline"
        >
          View all
        </Link>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {visibleCategories.map((c) => (
          <li key={c}>
            <Link
              href={"/products?category=" + encodeURIComponent(c)}
              className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-sm transition hover:border-[var(--primary)]/20 hover:bg-[var(--card-hover)]"
            >
              <span className="font-medium text-[var(--foreground)]">
                {toLabel(c)}
              </span>
              <ChevronRight className="h-5 w-5 text-[var(--muted)]" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
