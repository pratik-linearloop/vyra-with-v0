import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardNav } from "@/components/dashboard/nav"
import { CoursesList } from "@/components/dashboard/courses-list"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />
      <main className="flex-1 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <div className="absolute inset-0 -top-8">
              <div
                className="w-full h-[150px]"
                style={{
                  backgroundImage:
                    "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-b7pQk4EiZR559aaoFwDuWDf3cWMXq2.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-4">
                <Button variant="link" className="text-gray-900 hover:text-vyra-500">
                  How to submit?
                </Button>
                <Button className="rounded-[39px] bg-vyra-500 hover:bg-vyra-600 text-white px-6">Submit</Button>
              </div>
            </div>
          </div>
          <DashboardNav />
          <CoursesList />
        </div>
      </main>
    </div>
  )
}

