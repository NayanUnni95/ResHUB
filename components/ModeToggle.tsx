'use client'
import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DropdownMenu, IconButton } from '@radix-ui/themes'

const ModeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="soft" size="3" color="gold" highContrast>
          <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft" color="indigo">
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ModeToggle
