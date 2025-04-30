'use client'
import React from 'react'

const SearchForm = () => {
  return (
    <form className="flex w-full items-center px-2 py-1">
      <div className="relative w-full">
        <input
          type="text"
          autoComplete="off"
          spellCheck="true"
          aria-label="Search"
          className="block h-10 w-full p-2 border-none bg-transparent border 
          border-input focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 
          whitespace-nowrap overflow-hidden placeholder:text-neutral-500 focus-within:placeholder:text-neutral-300dark:placeholder:text-neutral-300 
          dark:focus-within:placeholder:text-neutral-500dark:focus-within:text-white dark:text-neutral-400 focus-within:text-black text-neutral-900"
          placeholder="Search Resource"
        />
      </div>
      <div className="flex justify-end mx-1">
        <div className="flex gap-1">
          <kbd className="bg-light-600 dark:bg-neutral-700 text-light-900 dark:text-white rounded-sm px-2 py-1 text-xs">
            S
          </kbd>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
