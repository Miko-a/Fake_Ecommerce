"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { CircleUser } from "lucide-react"

export function Navbar() {
  const { items } = useCart()

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-white
      border-b
      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-4
        "
      >
        <Link
          href="/"
          className="
          text-xl
          font-bold
          text-(--primary)
          "
        >
          AlproShop
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>

          <Link
            href="/cart"
            className="
            bg-(--secondary)
            px-3 py-1
            rounded-md
            "
          >
            Cart ({items.length})
          </Link>

          <Link href="/profile"><CircleUser className="h-5 w-5"/></Link>
        </div>
      </div>
    </nav>
  )
}