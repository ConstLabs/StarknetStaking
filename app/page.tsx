'use client'
import { Navbar } from '@/components/navbar'
import { StakeForm } from '@/components/form'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <StakeForm />
      </main>
    </div>
  )
}
