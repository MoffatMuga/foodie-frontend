"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import MobileNavbar from './Mobile'

export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Set the initial active link based on the current URL hash
    setActiveLink(window.location.hash);

    // Update the active link whenever the URL hash changes
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    // Listen to the hash change event
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isActive = (hash) => activeLink === hash;
  return (
    <div className='hidden mx-auto md:px-[170px] px-4 text-black text-center md:flex items-center py-4 justify-end w-full  '>


      <div className='space-x-8 text-xl'>
        <Link href='#Home'
          className={isActive('#Home') ? 'text-red underline underline-offset-4 decoration-red' : ''}
        > HOME</Link>
        <Link href='#Plates'
          className={isActive('#Plates') ? 'text-red underline underline-offset-4 decoration-red' : ''}
        > PLATES</Link>
        <Link href='#Reviews'
          className={isActive('#Review') ? 'text-red underline underline-offset-4 decoration-red' : ''}
        > REVIEWS</Link>
        <Link href='#Reserve'
          className={isActive('#Reserve') ? 'text-red underline underline-offset-4 decoration-red' : ''}
        > RESERVE</Link>
      </div>


    </div>
  )
}
