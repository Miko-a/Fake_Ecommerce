import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl">
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:p-12">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
          Welcome
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Welcome to AlproShop
        </h1>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          Discover quality products with simple, fast checkout. Browse our catalog and find what you need.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-hover)]"
        >
          Browse Products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
