import Link from 'next/link'
import React from 'react'

const left = [
  { href: '#about', label: 'Про центр' },
  { href: '#facts', label: 'Цифри' },
  { href: '#offices', label: 'Оренда' },
]
const right = [
  { href: '#residents', label: 'Резиденти' },
  { href: '#reviews', label: 'Відгуки' },
]

export const Header = () => (
  <>
    <div className="bg-green text-[#eae6dc] text-xs uppercase tracking-[0.16em]">
      <div className="max-w-[1240px] mx-auto px-12 py-2.5 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <span className="truncate">вул. Лесі Українки, 31Г, Кам&apos;янець-Подільський</span>
        <span className="text-center whitespace-nowrap">Щодня 8:00 — 22:00</span>
        <a href="tel:+380631234444" className="link-underline text-[#eae6dc] hover:text-white justify-self-end">063 12 34 444</a>
      </div>
    </div>

    <header className="sticky top-0 z-50 bg-paper/95 border-b border-line">
      <div className="max-w-[1240px] mx-auto px-12 py-[18px] grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <nav className="flex gap-[26px] text-xs uppercase tracking-[0.16em]">
          {left.map((i) => (
            <Link key={i.href} href={i.href} className="link-underline text-ink hover:text-green">{i.label}</Link>
          ))}
        </nav>

        <Link href="/" className="text-center">
          <div className="font-display text-[32px] uppercase tracking-[0.2em] leading-none">Розмарин</div>
          <div className="kicker mt-[5px] text-[10px]">Бізнес-центр · з 2008 року</div>
        </Link>

        <nav className="flex gap-[26px] justify-end items-center text-xs uppercase tracking-[0.16em]">
          {right.map((i) => (
            <Link key={i.href} href={i.href} className="link-underline text-ink hover:text-green">{i.label}</Link>
          ))}
          <Link href="#lead" className="btn-lift border border-green px-4 py-[9px] text-green hover:bg-green hover:text-paper">Заявка</Link>
        </nav>
      </div>
    </header>
  </>
)
