import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="my-10">
        Developed with 🩵 by{' '}
        <Link className="hover:text-white text-sky-300 hover:underline" href="https://github.com/NayanUnni95/">
          this Guy
        </Link>
      </div>
      {/* <div><button className="p-5 bg-red">.</button></div> */}
    </div>
  )
}

export default Footer
