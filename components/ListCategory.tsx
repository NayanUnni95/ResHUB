'use client'
import React from 'react'
import { Link } from 'next-view-transitions'

export const CategoryLink = ({ id, name, redirect, emoji }: Category) => {
  return (
    <Link
      href={`/${redirect}`}
      className="flex items-center gap-1 md:gap-3 group bg-background p-2 md:mb-2 rounded-md text-sm md:text-[15px] leading-normal text-light-900 dark:text-[#bdbdbd] transition-colors hover:bg-light-600/40 dark:hover:bg-neutral-600/20"
    >
      <span>{emoji ?? '🔖'}</span>
      <span className={'text-black category'}>{name}</span>
    </Link>
  )
}

type Category = {
  id: Number
  name: String
  redirect: String
  emoji: String | null
}

type ListCategoryProps = {
  data: Category[] | undefined
}
const ListCategory = ({ data }: ListCategoryProps) => {
  const listDemoData = [
    { id: 1, name: 'CSE', redirect: '/', emoji: '🧑🏼‍💻' },
    { id: 2, name: 'CE', redirect: '/', emoji: '👷🏻' },
    { id: 3, name: 'MEC', redirect: '/', emoji: '👨🏻‍🔧' },
    { id: 4, name: 'EEE', redirect: '/', emoji: null },
  ]
  return (
    <div className="md:block flex items-center">
      {listDemoData?.map((category) => {
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
