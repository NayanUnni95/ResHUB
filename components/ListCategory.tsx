'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { Category, ListCategoryProps } from '@/types'

export const CategoryLink = ({ name, redirect, emoji }: Category) => {
  const router = useRouter()

  const normalizedRedirect = redirect.startsWith('/')
    ? redirect
    : `${redirect.replace(/^\/+/, '')}`

  const handleNavigate = () => {
    try {
      router.push(normalizedRedirect)
    } catch (e) {
      console.error('Error while navigate: ', e)
    }
  }
  return (
    <div
      onClick={handleNavigate}
      className="flex items-center gap-1 md:gap-3 group bg-black/5 p-2 md:mb-2 rounded-md text-sm md:text-[15px] leading-normal text-light-900 dark:text-[#bdbdbd] transition-colors hover:bg-light-600/40 dark:hover:bg-neutral-600/20"
    >
      <span>{emoji ?? '🔖'}</span>
      <span className={'text-[var(--text-title)] category'}>{name}</span>
    </div>
  )
}

const ListCategory = ({ data }: ListCategoryProps) => {
  return (
    <div className="md:block flex items-center">
      {data?.map((category) => {
        return (
          <CategoryLink
            key={category.id}
            id={category.id}
            name={category.name}
            redirect={category.redirect}
            emoji={category.emoji}
          />
        )
      })}
    </div>
  )
}

export default ListCategory
