"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Courses", href: "/dashboard/courses" },
  { name: "Services", href: "/dashboard/services" },
  { name: "Resources", href: "/dashboard/resources" },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-4 relative z-10">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "px-4 py-2 text-sm transition-colors rounded-full",
            pathname === item.href || item.name === "Courses"
              ? "bg-[#EEF9F5] text-vyra-500 font-medium border border-vyra-500"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

