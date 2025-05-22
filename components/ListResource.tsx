'use client'
import React from 'react'
import img from '@/assets/images/Picture-Placeholder.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, PinIcon } from 'lucide-react'

type ResourceItemProps = {
  id: string
  title: string
  url: string
  summary: string
  image: string | null
  order: number
  placeholder: string | null
}

const ResourceItem = ({
  id,
  title,
  url,
  summary,
  image,
  order,
  placeholder,
}: ResourceItemProps) => {
  return (
    <div className="rounded-lg shadow-sm border transition-colors duration-300 ease-in-out resource-item grid grid-rows-subgrid row-span-2 gap-5 p-3  border-orange-500/30 bg-orange-400/30 hover:bg-orange-600/30 dark:border-orange-200/40 dark:bg-orange-200/5 dark:hover:bg-orange-400/5">
      <div className="flex flex-col gap-3">
        <div className="relative w-full h-[160px] rounded-md overflow-hidden border">
          <Image
            loading={order < 4 ? 'eager' : 'lazy'}
            src={image == null ? img : image}
            fill
            alt={`Picture of ${title}`}
            className="object-cover"
            decoding="async"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base md:text-lg font-semibold text-balance">
            {title}
          </h2>
          <p className="text-sm text-gray-700 dark:text-link line-clamp-4 text-pretty">
            {summary}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Link
          className="group flex gap-1 items-center text-sm text-blue-700 dark:text-anchor transition-colors duration-300 ease-in-out resource-item hover:underline underline-offset-2"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Go to resource</span>
          <ArrowUpRight className="size-4 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
        </Link>
        <div className="relative">
          <div className="cursor-pointer">
            <PinIcon
              className={
                'size-[22px] mr-2 hover:scale-110 text-light-800 dark:text-[#FFC107]'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const ListResource = () => {
  const data = [
    {
      id: 'sem1',
      title: 'Semester 1',
      url: 'sem1',
      summary: 'cse semester1 all resources',
      image: null,
      order: 1,
      placeholder: 'Sem1',
    },
    {
      id: 'sem2',
      title: 'Semester 2',
      url: 'sem2',
      summary: 'cse semester2 all resources',
      image: null,
      order: 1,
      placeholder: 'Sem2',
    },
    {
      id: 'sem3',
      title: 'Semester 3',
      url: 'sem3',
      summary: 'cse semester3 all resources',
      image: null,
      order: 2,
      placeholder: 'Sem3',
    },
    {
      id: 'sem4',
      title: 'Semester 4',
      url: 'sem4',
      summary: 'cse semester4 all resources',
      image: null,
      order: 2,
      placeholder: 'Sem4',
    },
    {
      id: 'sem5',
      title: 'Semester 5',
      url: 'sem5',
      summary: 'cse semester5 all resources',
      image: null,
      order: 3,
      placeholder: 'Sem5',
    },
    {
      id: 'sem6',
      title: 'Semester 6',
      url: 'sem6',
      summary: 'cse semester6 all resources',
      image: null,
      order: 3,
      placeholder: 'Sem6',
    },
    {
      id: 'sem7',
      title: 'Semester 7',
      url: 'sem7',
      summary: 'cse semester7 all resources',
      image: null,
      order: 4,
      placeholder: 'Sem7',
    },
    {
      id: 'sem8',
      title: 'Semester 8',
      url: 'sem8',
      summary: 'cse semester8 all resources',
      image: null,
      order: 4,
      placeholder: 'Sem8',
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
      {data.map(({ id, title, url, summary, image, placeholder }, index) => {
        return (
          <ResourceItem
            order={index}
            key={id}
            title={title}
            url={url}
            summary={summary}
            image={image}
            placeholder={placeholder}
            id={id}
          />
        )
      })}
    </div>
  )
}

export default ListResource
