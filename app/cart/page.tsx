"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

export default function CartPage() {
  const { items, removeItem } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">Cart</h1>
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
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        Cart
      </h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--card-hover)]">
              <Image
                src={item.image}
                alt={item.title}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-[var(--foreground)]">{item.title}</p>
              <p className="text-sm text-[var(--muted)]">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <p className="font-bold text-[var(--primary)]">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-red-500/10 hover:text-red-600"
                aria-label="Remove"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-row items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <p className="text-lg font-bold text-[var(--foreground)]">
          Total: <span className="text-[var(--primary)]">${total.toFixed(2)}</span>
        </p>
        <button className="rounded-xl bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-hover)]">
          Checkout
        </button>
      </div>
    </div>
  )
}
