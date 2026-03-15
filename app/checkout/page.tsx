"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CheckoutPage() {
  const { items } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Checkout
        </h1>
        <p className="mt-4 text-[var(--muted)]">Your cart is empty.</p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        Checkout
      </h1>

      <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Order summary
        </h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[var(--card-hover)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-[var(--foreground)]">
                  {item.title}
                </p>
                <p className="text-sm text-[var(--muted)]">
                  {item.quantity} × ${item.price}
                </p>
              </div>
              <p className="font-semibold text-[var(--primary)]">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="text-lg font-bold text-[var(--foreground)]">
            Total
          </span>
          <span className="text-xl font-bold text-[var(--primary)]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
          <ShoppingBag className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
          Checkout coming soon
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Payment and shipping will be available in a future update.
        </p>
        <Link
          href="/cart"
          className="mt-6 inline-block rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card-hover)]"
        >
          Back to cart
        </Link>
      </div>
    </div>
  )
}
