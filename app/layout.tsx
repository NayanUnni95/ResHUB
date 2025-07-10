import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { ThemeProvider } from '@/components/ThemeProvider'
import Container from '@/components/Container'
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  title: 'ResHUB',
  description:
    'A resource hub for ResHUB students and Tech enthusiasts to find - Syllabus, Subject_Study_Materials, YT_video_links, Community_Details, Open_Source_Projects, AI_Tools, More...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div>
            <SideBar />
            <Container>
              {children}
              <Footer />
            </Container>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
