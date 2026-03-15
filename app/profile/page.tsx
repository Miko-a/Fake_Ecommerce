"use client"

import Link from "next/link"
import { User, Mail, Phone, MapPin, ShoppingBag, LayoutGrid } from "lucide-react"

const profile = {
  name: "Saya adalah user",
  email: "saya@example.com",
  phone: "+62 812-3456-7890",
  address: "Ayabarus, Indonesia",
}

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        Profile
      </h1>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">Name</p>
              <p className="font-medium text-[var(--foreground)]">
                {profile.name}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">Email</p>
              <p className="font-medium text-[var(--foreground)]">
                {profile.email}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">Phone</p>
              <p className="font-medium text-[var(--foreground)]">
                {profile.phone}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary)] text-[var(--primary)]">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">Address</p>
              <p className="font-medium text-[var(--foreground)]">
                {profile.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--primary-hover)]"
        >
          <LayoutGrid className="h-4 w-4" />
          Browse Products
        </Link>
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card-hover)]"
        >
          <ShoppingBag className="h-4 w-4" />
          View Cart
        </Link>
      </div>
    </div>
  )
}
