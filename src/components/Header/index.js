import React from 'react'
import Logo from '@/images/logo.svg'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="w-28">
          <Logo className="logo-style-1" />
        </div>
        <div className='w-auto'>
          <ul className='flex items-center'>
            <li className=''>
              <Link href='/destinations' className='px-9 text-gray-800'>Destinations</Link>
            </li>
            <li className=''>
              <Link href='/hotels' className='px-9 text-gray-800'>Hotels</Link>
            </li>
            <li className=''>
              <Link href='/flights' className='px-9 text-gray-800'>Flights</Link>
            </li>
            <li className=''>
              <Link href='/bookings' className='px-9 text-gray-800'>Bookings</Link>
            </li>
            <li className=''>
              <Link href='/login' className='px-9 text-gray-800'>Login</Link>
            </li>
            <li className=''>
              <Link href='/sign-up' className='px-5 text-gray-800 py-1 border border-gray-800 rounded-md mx-3'>Sign up</Link>
            </li>
            <li className=''>
              <button href='/destinations' className='px-9 text-gray-800'>
                EN
                <span className='absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2'></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
