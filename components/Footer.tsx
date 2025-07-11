import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="my-10">
        Developed with 🩵 by{' '}
        <Link className="text-sky-300" href="https://github.com/NayanUnni95/">
          this Guy
        </Link>
      </div>
      {/* <div><button className="p-5 bg-red">.</button></div> */}
    </div>
  )
}

export default Footer
