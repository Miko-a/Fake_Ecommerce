"use client"

import { useCategories } from "@/hooks/useCategories"
import type { Category } from "@/types/product"

export default function CategoriesPage() {
  const { data } = useCategories() as { data: Category[] | undefined }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white">Categories</h1>

      <ul>
        {data?.map((c: Category) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  )
}