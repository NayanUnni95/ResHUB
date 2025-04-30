'use client'
import React from 'react'

interface TitleProps {
  title: String
}

const OptionHeader = ({ title }: TitleProps) => {
  return (
    <div className="hidden md:flex h-9 items-center px-2">
      <span className="font-normal text-light-800 dark:text-gray-400 text-md">
        {title}
      </span>
    </div>
  )
}

export default OptionHeader
