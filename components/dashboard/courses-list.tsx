"use client"

import { useState, useMemo } from "react"
import { Search, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

const SortArrows = () => (
  <div className="flex flex-col ml-1">
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%2030-gfJAdGvNHpqF7y37o3QiTCYygfAFhe.svg"
      alt="Up arrow"
      className="w-2 h-2"
    />
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrow-oWjfkIODRkgTkeToJ0nauB9CdqClLS.svg"
      alt="Down arrow"
      className="w-2 h-2"
    />
  </div>
)

const courses = [
  {
    id: "1",
    title: "Explore the best sustainability practices for individuals",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20725-QvmQvNvEKLD2ptCsfgGarxdbydqf3F.png",
    price: 20.99,
    status: "Live" as const,
    enrolled: 42,
    earned: 1143.0,
    rating: 4.54,
    lastEdited: "Dec 12, 2024",
  },
  {
    id: "2",
    title: "Best sustainability practices for your business",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zVIT9HT8ZprXtWPiwZPvZUtCEPK9VZ.png",
    price: 0,
    status: "Not submitted" as const,
    lastEdited: "Dec 1, 2024",
  },
]

export function CoursesList() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("newest")

  const filteredAndSortedCourses = useMemo(() => {
    return courses
      .filter((course) => course.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        switch (sort) {
          case "newest":
            return new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
          case "oldest":
            return new Date(a.lastEdited).getTime() - new Date(b.lastEdited).getTime()
          case "price-asc":
            return a.price - b.price
          case "price-desc":
            return b.price - a.price
          default:
            return 0
        }
      })
  }, [search, sort])

  const StatusIcon = ({ status }: { status: "Live" | "Not submitted" }) => (
    <div className="flex items-center gap-2">
      <img
        src={
          status === "Live"
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/submitted-zsD21XCYQxBWbX5wgZKwb2fPVxxZWL.svg"
            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/not%20submited-JPyWsagHgxYDZt00Z9IN1zJl7hyjh6.svg"
        }
        alt={status}
        className="w-6 h-6"
      />
      <span>{status}</span>
    </div>
  )

  return (
    <div className="space-y-6 font-rubik">
      <div className="bg-white rounded-[39px] flex items-center justify-between p-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search anything"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 border-0 focus:ring-0 rounded-[39px]"
          />
        </div>
        <div className="flex items-center whitespace-nowrap px-4">
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="border-0 focus:ring-0 flex items-center gap-2">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-[1px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-[#f6f6f6]">
              <th className="text-left py-4 px-6">
                <button className="text-sm font-medium flex items-center" style={{ color: "#88888873" }}>
                  Name &nbsp;<SortArrows />
                </button>
              </th>
              <th className="text-left py-4 px-6">
                <button className="text-sm font-medium flex items-center" style={{ color: "#88888873" }}>
                  Status &nbsp;<SortArrows />
                </button>
              </th>
              <th className="text-left py-4 px-6">
                <button className="text-sm font-medium flex items-center" style={{ color: "#88888873" }}>
                  Enrolled &nbsp;<SortArrows />
                </button>
              </th>
              <th className="text-left py-4 px-6">
                <button className="text-sm font-medium flex items-center" style={{ color: "#88888873" }}>
                  Earned &nbsp;<SortArrows />
                </button>
              </th>
              <th className="text-left py-4 px-6">
                <button className="text-sm font-medium flex items-center" style={{ color: "#88888873" }}>
                  Rating &nbsp;<SortArrows />
                </button>
              </th>
              <th className="text-right py-4 px-6" style={{ color: "#88888873" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedCourses.map((course) => (
              <tr key={course.id} className="border-b last:border-0" style={{ height: "125px" }}>
                <td className="py-4 px-4">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={146}
                      height={105}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium text-sm mb-2">{course.title}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/price-for6W9uP6ohO7OPpLsKfb4XS8HJAY9.svg"
                            alt="Price"
                            className="w-4 h-4"
                          />
                          €{course.price.toFixed(2)}
                        </div>
                        <div className="flex items-center gap-1">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/last%20edited-jjrWJeBpqvaVM6C1SA6TALx3G9aQHM.svg"
                            alt="Last edited"
                            className="w-4 h-4"
                          />
                          {course.lastEdited}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <StatusIcon status={course.status} />
                </td>
                <td className="py-4 px-6">
                  <span className="font-semibold">{course.enrolled || "-"}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-semibold">{course.earned ? `€${course.earned.toFixed(2)}` : "-"}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-semibold">{course.rating || "-"}</span>
                </td>
                <td className="py-4 px-6 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        {course.status === "Live" ? "Go to course" : "Resume course creation"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

