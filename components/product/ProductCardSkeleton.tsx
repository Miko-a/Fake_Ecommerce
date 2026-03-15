"use client"

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
      <div className="aspect-square animate-pulse rounded-xl bg-[var(--card-hover)]" />
      <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-[var(--card-hover)]" />
      <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-[var(--card-hover)]" />
    </div>
  )
}
