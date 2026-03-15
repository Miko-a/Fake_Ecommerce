import Link from "next/link"
import { ArrowRight, Truck, Shield, Sparkles, LayoutGrid } from "lucide-react"
import { ShopByCategory } from "@/components/home/ShopByCategory"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import "./globals.css"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl sm:p-14 md:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[var(--primary)]/5 blur-2xl" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            AlproShop
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Quality products.
            <br />
            <span className="text-[var(--primary)]">Simple checkout.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            Discover what you need with a fast, clutter-free experience. Browse, add to cart, and checkout in minutes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/25 transition hover:bg-[var(--primary-hover)] hover:shadow-[var(--primary)]/30"
            >
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--border)] bg-transparent px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)]/40 hover:bg-[var(--secondary)]/50"
            >
              <LayoutGrid className="h-4 w-4" />
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="mt-14">
        <ShopByCategory />
      </section>

      {/* Featured products */}
      <section className="mt-14">
        <FeaturedProducts />
      </section>

      {/* Feature strip */}
      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Truck,
            title: "Fast delivery",
            text: "Quick shipping so you get your orders when you need them.",
          },
          {
            icon: Shield,
            title: "Secure checkout",
            text: "Safe payments and a smooth, reliable buying experience.",
          },
          {
            icon: Sparkles,
            title: "Curated catalog",
            text: "Quality products organized so you can find things easily.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:border-[var(--primary)]/20 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)] transition group-hover:bg-[var(--primary)]/15">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-[var(--foreground)]">{title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </section>

      {/* CTA band */}
      <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/50 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Ready to shop?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
          Start with categories or jump straight into the full product list.
        </p>
      </section>
    </div>
  )
}
