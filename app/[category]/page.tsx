'use client'
import Category from '@/components/Category'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <main className="ml-0 md:ml-60">
      <Hero
        title="CSE"
        description="computer science and engineering related resources."
      />
      <Category />
    </main>
  )
}

export default page
