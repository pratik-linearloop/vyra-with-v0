import "./globals.css"
import { Rubik } from "next/font/google"
import type React from "react"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
})

export const metadata = {
  title: "Vyra - Sustainability Learning Platform",
  description: "Learn and implement sustainable practices for individuals and businesses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="font-rubik">{children}</body>
    </html>
  )
}

