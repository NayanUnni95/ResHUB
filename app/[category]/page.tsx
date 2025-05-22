'use client'
import React from 'react'
import Category from '@/components/Category'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <>
      <Hero
        title="CSE"
        description="computer science and engineering related resources."
      />
      <Category />
    </>
  )
}

export default page
