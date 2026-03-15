"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useProduct } from "@/hooks/useProduct"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data } = useProduct(id as string)
  const { addItem } = useCart()

  if (!data) {
    return (
      <div className="mx-auto max-w-6xl">
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

  return (
    <div className="mx-auto max-w-6xl">
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
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              {data.title}
            </h1>
            <p className="mt-4 text-[var(--muted)]">{data.description}</p>
            <p className="mt-6 text-3xl font-bold text-[var(--primary)]">
              ${data.price}
            </p>
            <div className="mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
