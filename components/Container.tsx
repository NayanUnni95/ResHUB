import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return <main className="ml-0 md:ml-60">{children}</main>
}

export default Container
