"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Info, ArrowRight } from "lucide-react"

interface CompanyFormData {
  name: string
  description: string
}

export function CompanyForm({ onNext }: { onNext: (data: CompanyFormData) => void }) {
  const [formData, setFormData] = useState<CompanyFormData>({
    name: "",
    description: "",
  })
  const [error, setError] = useState("")
  const [touched, setTouched] = useState(false)

  const validateName = (name: string) => {
    if (!name) {
      return "Company name is required. Please enter your company name."
    }
    if (name.length < 2) {
      return "Company name must be at least 2 characters"
    }
    return ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validateName(formData.name)
    if (validationError) {
      setError(validationError)
      return
    }
    onNext(formData)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 min-h-[calc(100vh-80px)] flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-normal text-gray-500"><span className="text-black">1</span>/2</span>
        <div className="h-2 bg-gray-200 rounded-full flex-1">
          <div className="h-2 bg-vyra-500 rounded-full w-1/2" />
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Tell us about your company</h1>

        <div className="bg-[#EEF9F5] p-4 rounded-lg flex items-center gap-3 mb-6">
          <Info className="w-5 h-5 text-vyra-500 mt-0.5" />
          <p className="text-sm text-gray-900">This will be displayed to the public, but can be changed at anytime.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="company-name" className="block text-base font-medium text-black mb-2">
              Company name
            </label>
            <Input
              id="company-name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                if (touched) {
                  setError(validateName(e.target.value))
                }
              }}
              onBlur={() => {
                setTouched(true)
                setError(validateName(formData.name))
              }}
              className={`rounded-lg border ${
                error ? "border-red-500" : "border-gray-200 focus:border-vyra-500"
              } focus:ring-0`}
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>

          <div>
            <label htmlFor="company-description" className="block text-base font-medium text-black mb-2 relative">
              <span className="flex items-center justify-between">
                Company description
                <span className={`!text-sm font-normal ${formData.description.length === 500 ? "text-red-500" : "text-gray-500"}`}>
                  {formData.description.length}<span className="text-gray-500"> / 500 max characters</span>
                </span>
              </span>
            </label>
            <div className="relative">
              <Textarea
                id="company-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                maxLength={500}
                rows={6}
                className={`resize-none rounded-lg border ${
                  formData.description.length === 500 ? "border-red-500" : "border-gray-200 focus:border-vyra-500"
                } focus:ring-0`}
              />
            </div>
          </div>

          <Button
            type="submit"
            className={`w-full rounded-[39px] bg-vyra-500 hover:bg-vyra-600 text-white 
              ${!formData.name ? "opacity-50" : ""}`}
            disabled={!formData.name}
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

