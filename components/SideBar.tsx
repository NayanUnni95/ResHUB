'use client'
import React from 'react'
import OptionHeader from './OptionHeader'
import ListCategory from './ListCategory'

const SideBar = () => {
  const listDemoData = [
    { id: 1, name: 'CSE', redirect: '/cse', emoji: '🧑🏼‍💻' },
    { id: 2, name: 'CE', redirect: '/ce', emoji: '👷🏻' },
    { id: 3, name: 'ME', redirect: '/me', emoji: '👨🏻‍🔧' },
    { id: 4, name: 'EEE', redirect: '/eee', emoji: null },
  ]
  const initialData = [
    {
      id: 1,
      name: 'Discover',
      redirect: '/',
      emoji: '🔎',
    },
  ]
  return (
    <aside className="w-full md:fixed md:h-full md:w-56 overflow-y-auto scrollbar-hide md:mb-8 no-scrollbar py-5 pl-5">
      <nav className="md:mb-20">
        <div className="flex space-y-1 overflow-y-auto md:flex-col md:overflow-y-visible pt-0 px-0.5 md:px-0 no-scrollbar">
          <OptionHeader title="Explore" />
          <ListCategory data={initialData} />
          <OptionHeader title="Category" />
          <ListCategory data={listDemoData} />
          <OptionHeader title="Community" />
          <ListCategory data={listDemoData} />
          <OptionHeader title="Media Resources" />
          <ListCategory data={listDemoData} />
          <OptionHeader title="AI Tools" />
          <ListCategory data={listDemoData} />
          <OptionHeader title="Open Source Projects" />
          <ListCategory data={listDemoData} />
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
