'use client'
import React from 'react'
import OptionHeader from './OptionHeader'
import ListCategory from './ListCategory'

const SideBar = () => {
  return (
    <aside className="w-full md:fixed md:h-full md:w-56 overflow-y-auto scrollbar-hide mb-8 md:mb-0">
      <nav className="md:mb-32 md:pb-2">
        <div className="flex space-y-1 overflow-y-auto md:flex-col md:overflow-y-visible pt-0 px-0.5 md:px-0">
          <OptionHeader title="Category" />
          <ListCategory data={[]} />
          <OptionHeader title="Community" />
          <ListCategory data={[]} />
          <OptionHeader title="Media Resources" />
          <ListCategory data={[]} />
          <OptionHeader title="AI Tools" />
          <ListCategory data={[]} />
          <OptionHeader title="Open Source Projects" />
          <ListCategory data={[]} />
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
