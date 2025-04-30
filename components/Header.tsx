'use client'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
import { SendIcon } from 'lucide-react'
import { Icon } from './Icons'
import ModeToggle from './ModeToggle'

const navbar = () => {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="hidden sm:flex items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
            aria-label="Link to home page"
          >
            {/* Logo Component */}
            <span className="hidden md:block text-sm md:text-base">KTUHub</span>
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <a
              href="https://github.com/NayanUnni95/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub repository"
            >
              <Button size="3" variant="solid" color="gray" highContrast>
                <Icon name="github" />
              </Button>
            </a>
            <Link href="https://github.com/NayanUnni95/">
              <Button size="3" variant="soft" color="green">
                <SendIcon className="size-4 mr-1x" />
                Contribute
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default navbar
