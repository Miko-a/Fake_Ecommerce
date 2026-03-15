"use client"

import { useCategories } from "@/hooks/useCategories"
// import type { Category } from "@/types/product"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function toLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default function CategoriesPage() {
  const { data } = useCategories() as { data: string[] | undefined }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        Categories
      </h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        {data?.map((c) => (
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
    </div>
  )
}
