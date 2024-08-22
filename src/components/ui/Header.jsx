import React from 'react'
import Link from 'next/link'
import MobileNavbar from './Mobile'

export default function Header() {
  return (
    <div className='hidden mx-auto md:px-[170px] px-4 text-black text-center md:flex items-center py-4 justify-end w-full'>


      <div className='space-x-8 text-xl'>
        <Link href='/'> ABOUT</Link>
        <Link href='/'> FOODS</Link>
        <Link href=''> CHEFS</Link>
        <Link href=''> RESERVE</Link>
      </div>


    </div>
  )
}
