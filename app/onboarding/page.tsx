"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { CompanyForm } from "@/components/onboarding/company-form"
import { ExpertiseForm } from "@/components/onboarding/expertise-form"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    company: {
      name: "",
      description: "",
    },
    expertise: [] as string[],
  })
  const router = useRouter()

  const handleCompanySubmit = (data: { name: string; description: string }) => {
    setFormData({ ...formData, company: data })
    setStep(2)
  }

  const handleExpertiseSubmit = (expertise: string[]) => {
    setFormData({ ...formData, expertise })
    // Here you would typically send the data to your backend
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white">
        <Link href="#" className="flex items-center text-gray-500 hover:text-gray-700 gap-2 hover:cursor-pointer border border-gray-100 rounded-full p-2 px-4">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Go back</span>
        </Link>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-ngaz4xp7e8I8hRbEYtuHry8cbupNPv.svg"
          alt="Vyra Logo"
          width={72}
          height={30}
          priority
          className="ml-auto"
        />
      </header>

      <main className="container mx-auto py-8">
        {step === 1 ? <CompanyForm onNext={handleCompanySubmit} /> : <ExpertiseForm onSubmit={handleExpertiseSubmit} />}
      </main>
    </div>
  )
}

