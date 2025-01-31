import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  id: string
  title: string
  image: string
  price: number
  status: "Live" | "Not submitted"
  enrolled?: number
  earned?: number
  rating?: number
  lastEdited?: string
}

export function CourseCard({ id, title, image, price, status, enrolled, earned, rating, lastEdited }: CourseCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 rounded-lg border p-4 bg-white">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={160}
        height={90}
        className="rounded-lg object-cover w-full sm:w-40"
      />
      <div className="flex-1 space-y-2 w-full">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">€{price.toFixed(2)}</p>
            {lastEdited && <p className="text-sm text-gray-500">Edited on {lastEdited}</p>}
          </div>
          <Badge variant={status === "Live" ? "default" : "secondary"} className="ml-auto">
            {status}
          </Badge>
        </div>
        {enrolled && earned && rating && (
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium">{enrolled}</span>
              <span className="text-gray-500 ml-1">Enrolled</span>
            </div>
            <div>
              <span className="font-medium">€{earned.toFixed(2)}</span>
              <span className="text-gray-500 ml-1">Earned</span>
            </div>
            <div>
              <span className="font-medium">{rating.toFixed(2)}</span>
              <span className="text-gray-500 ml-1">Rating</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
        <Button variant="outline" asChild className="flex-1 sm:flex-initial">
          <Link href={`/course/${id}`}>{status === "Live" ? "Go to course" : "Resume course creation"}</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

