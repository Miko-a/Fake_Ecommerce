"use client"

import React from "react"

export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "rounded-xl bg-[var(--primary)] px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-[var(--primary-hover)] disabled:opacity-50 " +
        className
      }
    >
      {children}
    </button>
  )
}
