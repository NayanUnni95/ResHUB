'use client'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
import { SendIcon } from 'lucide-react'
import { Icon } from './Icons'
import ModeToggle from './ModeToggle'
import SearchForm from './SearchForm'

const navbar = () => {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
            aria-label="Link to home page"
          >
            {/* Logo Component */}
            <span className="text-sm md:text-base">ResHUB</span>
          </Link>
          <div
            className="flex flex-col fixed left-1/2 -translate-x-1/2 top-0 z-50 rounded-xl h-[50px] w-[min(450px,calc(100%_-_90px))] 
         bg-gradient-to-br dark:from-stone-800 dark:to-neutral-900 from-stone-50 to-light-400 translate-y-[8px] transition-multiple 
         duration-300 border border-light-600 dark:border-neutral-800/70 focus-within:w-[calc(100%_-_8px)] focus-within:md:w-[600px] 
         focus-within:h-[270px] group"
          >
            <SearchForm />
          </div>
          <div className="hidden md:flex flex items-center gap-2">
            <ModeToggle />
            <Link
              href="https://github.com/NayanUnni95/ResHUB"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub repository"
            >
              <Button size="3" variant="solid" color="gray" highContrast>
                <Icon name="github" />
              </Button>
            </Link>
            <Link href="https://github.com/NayanUnni95/ResHUB">
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
