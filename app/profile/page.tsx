"use client"

import Link from "next/link"

const profile = {
  name: "Saya adalah user",
  email: "saya@example.com",
  phone: "+62 812-3456-7890",
  address: "Ayabarus, Indonesia",
}

export default function ProfilePage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4 text-white">Profile</h1>

      <div className="border rounded-lg p-5 bg-white/5 backdrop-blur-sm">
        <div className="space-y-3 text-white">
          <div>
            <p className="text-sm opacity-70">Name</p>
            <p className="font-medium">{profile.name}</p>
          </div>

          <div>
            <p className="text-sm opacity-70">Email</p>
            <p className="font-medium">{profile.email}</p>
          </div>

          <div>
            <p className="text-sm opacity-70">Phone</p>
            <p className="font-medium">{profile.phone}</p>
          </div>

          <div>
            <p className="text-sm opacity-70">Address</p>
            <p className="font-medium">{profile.address}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <Link
          href="/products"
          className="px-4 py-2 rounded-md bg-(--secondary) text-black text-sm font-medium"
        >
          Browse Products
        </Link>

        <Link
          href="/cart"
          className="px-4 py-2 rounded-md border text-white text-sm font-medium"
        >
          View Cart
        </Link>
      </div>
    </div>
  )
}