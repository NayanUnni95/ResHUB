'use client'

import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ModeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <div>
      <button className="flex px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-400/30 text-sky-300 font-medium backdrop-blur-sm shadow-lg">
        {/* <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
        <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
    </div>
  )
}

export default ModeToggle
