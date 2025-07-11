'use client'

import React from 'react'
import Link from 'next/link'

export const CategoryLink = ({ name, redirect, emoji }: Category) => {
  return (
    <Link
      href={`/${redirect}`}
      className="flex items-center gap-1 md:gap-3 group bg-black/5 p-2 md:mb-2 rounded-md text-sm md:text-[15px] leading-normal text-light-900 dark:text-[#bdbdbd] transition-colors hover:bg-light-600/40 dark:hover:bg-neutral-600/20"
    >
      <span>{emoji ?? '🔖'}</span>
      <span className={'text-black category'}>{name}</span>
    </Link>
  )
}

type Category = {
  id: number
  name: string
  redirect: string
  emoji: string | null
}

type ListCategoryProps = {
  data: Category[] | undefined
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
