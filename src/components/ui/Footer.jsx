import React from 'react'
import Link from 'next/link'
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <section className='mt-14 mb-6'>
      <div className="border-t border-primary flex flex-col">
        <div className='py-3'>
            <h1 className='text-center text-3xl text-primary'>FOODIE</h1>
        </div>
        <div className='flex space-x-4 items-center justify-center text-lg'>
            <Link href='/'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Plates</Link>
            <Link href='/'>Reserve</Link> 
        </div>
        <div className='flex items-center justify-center text-3xl py-2 space-x-3 text-red'>
            <CiFacebook />
            <CiInstagram />
            <FaWhatsapp />
        </div>
      </div>
    </section>
   
  )
}
