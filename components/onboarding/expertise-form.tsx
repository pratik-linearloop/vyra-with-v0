"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const expertiseOptions = [
  "Sustainability Awareness",
  "Energy and Renewables",
  "Biodiversity and Ecosystems",
  "Legislation and Compliance",
  "ESG Reporting",
  "Waste Management",
  "Water Management",
  "Social Sustainability",
  "Financial Sustainability",
  "Climate Change",
  "Circular Economy Principles",
  "Equity, Diversity, and Inclusion",
  "Stakeholder Engagement",
  "Corporate Social Responsibility",
  "Green Finance and Investment",
  "Carbon Accounting",
  "Net Zero Strategies",
  "Leadership in Sustainability",
  "Sector-specific training",
  "Other",
]

export function ExpertiseForm({ onSubmit }: { onSubmit: (expertise: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(selected)
  }

  const toggleOption = (option: string) => {
    setSelected((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 min-h-[calc(100vh-80px)] flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-normal text-gray-500"><span className="text-black">2</span>/2</span>
        <div className="h-2 bg-gray-200 rounded-full flex-1">
          <div className="h-2 bg-vyra-500 rounded-full w-full" />
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What are your areas of expertise?</h1>
        <p className="text-gray-600 mb-2">Your response will help us improve user experience.</p>
        <p className="text-gray-600 mb-6">You can select multiple options</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {expertiseOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleOption(option)}
                className={`flex items-center justify-between p-4 rounded-[39px] border-2 transition-all text-left
                  ${
                    selected.includes(option) ? "border-[3px] border-gradient-to-r from-[#E6FAF4] to-[#E8F9FA] bg-[#EEF9F5]" : "border-gray-200 hover:border-vyra-500"
                  }`}
              >
                <span className="text-sm font-medium">{option}</span>
                {selected.includes(option) && (
                  <div className="bg-vyra-500 rounded-[5px] p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <Button
            type="submit"
            className={`w-full rounded-[39px] bg-vyra-500 hover:bg-vyra-600 text-white
              ${selected.length === 0 ? "opacity-50" : ""}`}
            disabled={selected.length === 0}
          >
            <span className="flex items-center">
              Continue
              <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Button>
        </form>
      </div>
    </div>
  )
}

