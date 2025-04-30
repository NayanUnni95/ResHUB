'use client'
import React from 'react'
import OptionHeader from './OptionHeader'
import ListCategory from './ListCategory'

const SideBar = () => {
  return (
    <aside className="w-full md:fixed md:h-full md:w-56 overflow-y-auto scrollbar-hide mb-8 md:mb-0">
      <nav className="md:mb-32 md:pb-2">
        <div className="flex space-y-1 overflow-y-auto md:flex-col md:overflow-y-visible pt-0 px-0.5 md:px-0">
          <div className="flex space-y-1 overflow-y-auto md:flex-col md:overflow-y-visible pt-0 px-0.5 md:px-0">
            <OptionHeader title="category" />
            <ListCategory data={[]} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
