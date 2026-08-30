import React from 'react'

export const Footer = () => (
  <footer className="bg-ink text-[#d8d4c8] px-12 pt-[60px] pb-[30px]">
    <div className="max-w-[1240px] mx-auto">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 pb-7">
        <div className="text-sm leading-[1.9] text-[#d8d4c8]/75">
          вул. Лесі Українки, 31Г, Кам&apos;янець-Подільський<br />Щодня 8:00 — 22:00
        </div>
        <div className="text-center">
          <div className="font-display text-[32px] uppercase tracking-[0.2em] text-paper">Розмарин</div>
          <div className="kicker mt-1.5 text-[#d8d4c8]/60">Бізнес-центр · з 2008 року</div>
        </div>
        <div className="text-right text-sm leading-[1.9] text-[#d8d4c8]/75">
          <a href="tel:+380631234444" className="link-underline text-[#d8d4c8] hover:text-paper">063 12 34 444</a><br />
          <a href="mailto:info@rozmaryn.com" className="link-underline text-[#d8d4c8] hover:text-paper">info@rozmaryn.com</a>
        </div>
      </div>
      <hr className="border-0 border-t border-[#d8d4c8]/25 mb-5" />
      <div className="flex justify-between text-[13px] text-[#d8d4c8]/60">
        <span>© {new Date().getFullYear()} БЦ «Розмарин». Усі права захищено.</span>
        <span>Політика конфіденційності</span>
      </div>
    </div>
  </footer>
)
