import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import React from 'react'

export const Header = async () => {
  const payload = await getPayload({ config })
  
  // Assuming Navigation global has a 'menuItems' field
  // const nav = await payload.findGlobal({ slug: 'navigation' })
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo placeholder */}
          <div className="w-10 h-10 bg-rosemary text-white flex items-center justify-center rounded-sm font-serif text-xl">
            R
          </div>
          <span className="font-serif text-2xl text-rosemary-dark tracking-wide">Розмарин</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-600 hover:text-rosemary transition-colors">Головна</Link>
          <Link href="/businesses" className="text-gray-600 hover:text-rosemary transition-colors">Резиденти</Link>
          <Link href="/offices" className="text-gray-600 hover:text-rosemary transition-colors">Оренда</Link>
          <Link href="/about" className="text-gray-600 hover:text-rosemary transition-colors">Про БЦ</Link>
          <Link href="/contact" className="text-gray-600 hover:text-rosemary transition-colors">Контакти</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="/contact" className="px-5 py-2.5 bg-graphite text-white hover:bg-rosemary transition-colors rounded-sm font-medium text-sm">
            Залишити заявку
          </Link>
        </div>
        
        {/* Mobile menu button placeholder */}
        <button className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

