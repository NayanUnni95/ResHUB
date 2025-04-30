'use client'
import React from 'react'
import { Link } from 'next-view-transitions'

export const CategoryLink = ({ id, name, redirect, emoji }: Category) => {
  return (
    <Link
      href={`/${redirect}`}
      className="flex items-center gap-1 md:gap-3 group bg-background p-2 rounded-md text-sm md:text-[15px] leading-normal text-light-900 dark:text-[#bdbdbd] transition-colors    bg-light-700/50 dark:bg-neutral-500/30"
    >
      <span>{emoji ?? '🤔'}</span>
      <span className={'text-black dark:text-yellow-300 category'}>{name}</span>
    </Link>
  )
}

type Category = {
  id: Number
  name: String
  redirect: String
  emoji: String
}

type ListCategoryProps = {
  data: Category[] | undefined
}
const ListCategory = ({ data }: ListCategoryProps) => {
  const listDemoData = [
    { id: 1, name: 'CSE', redirect: '/', emoji: '🧑🏼‍💻' },
    { id: 2, name: 'CE', redirect: '/', emoji: '👷🏻' },
    { id: 3, name: 'MEC', redirect: '/', emoji: '👨🏻‍🔧' },
  ]
  return (
    <div>
      {listDemoData?.map((category, index) => {
        return (
          <CategoryLink
            key={index}
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
