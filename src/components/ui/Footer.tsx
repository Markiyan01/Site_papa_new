import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-graphite text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white text-rosemary flex items-center justify-center rounded-sm font-serif text-xl">
                R
              </div>
              <span className="font-serif text-2xl text-white tracking-wide">Розмарин</span>
            </Link>
            <p className="text-gray-400 font-light max-w-sm mb-6">
              Сучасний бізнес-центр еко-мінімалістичного дизайну, що поєднує комфорт та природу для вашого бізнесу.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rosemary hover:text-white transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rosemary hover:text-white transition-all">IN</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Навігація</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Головна</Link></li>
              <li><Link href="/businesses" className="text-gray-400 hover:text-white transition-colors">Каталог</Link></li>
              <li><Link href="/offices" className="text-gray-400 hover:text-white transition-colors">Оренда офісів</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Про БЦ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Контакти</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <span className="mt-1">📍</span>
                <span>вул. Василя Липківського, 45<br/>Київ, Україна</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+380441234567" className="hover:text-white transition-colors">+380 (44) 123-45-67</a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:info@rozmaryn.com" className="hover:text-white transition-colors">info@rozmaryn.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} БЦ Розмарин. Усі права захищено.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Політика конфіденційності</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Умови використання</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

