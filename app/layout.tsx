import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'
import '@radix-ui/themes/styles.css'
import '@/assets/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ktuhub',
  description: 'ktuhub',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          <Header />
          <div className="px-4 py-8 md:px-6 md:py-10 container">
            <SideBar />
          </div>
          {/* {children} */}
        </Theme>
      </body>
    </html>
  )
}
