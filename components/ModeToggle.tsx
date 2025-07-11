'use client'

import React, { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(theme == 'light' ? false : true)

  useEffect(() => setTheme(isDark ? 'dark' : 'light'), [isDark])
  return (
    <div>
      <button className="flex px-4 py-2" onClick={() => setIsDark(!isDark)}>
        {isDark ? (
          <SunIcon className="size-5 transition-all" />
        ) : (
          <MoonIcon className="size-5 transition-all" />
        )}
      </button>
    </div>
  )
}

export default ModeToggle
