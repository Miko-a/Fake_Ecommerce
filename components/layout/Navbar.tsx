"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { CircleUser, ShoppingBag, LayoutGrid, ScanQrCode } from "lucide-react"

export function Navbar() {
  const { items } = useCart()

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-[var(--primary)] transition hover:opacity-90"
          >
            <ScanQrCode />
            <span className="">AlproShop</span>
        </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/products"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card-hover)]"
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="hidden sm:inline">Products</span>
          </Link>
          <Link
            href="/categories"
            className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card-hover)]"
          >
            Categories
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Cart</span>
            <span className="min-w-[1.25rem] rounded-full bg-white/20 px-1.5 py-0.5 text-center text-xs font-semibold">
              {items.length}
            </span>
          </Link>
          <Link
            href="/profile"
            className="rounded-lg p-2 text-[var(--foreground)] transition hover:bg-[var(--card-hover)]"
            aria-label="Profile"
          >
            <CircleUser className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
