import React from 'react'
import { ContactFormClient } from './ContactFormClient'

export const ContactFormBlockComponent = ({ block }: { block: any }) => (
  <section id="contacts" className="px-12 py-[104px]">
    <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-[72px]">
      <div>
        <div className="flex items-center gap-4">
          <span className="font-display text-[22px] text-green">VI</span>
          <span className="kicker">Контакти</span>
        </div>
        <h2 className="text-[46px] mt-[22px] mb-[30px]">Завітайте до нас</h2>
        <div className="text-base text-ink-soft">
          {[
            ['Адреса', 'вул. Лесі Українки, 31Г'],
            ['Телефон', '063 12 34 444'],
            ['Режим', 'Щодня, 8:00 — 22:00'],
            ['Паркінг', '50 місць на власній території'],
          ].map(([k, v], i, arr) => (
            <div
              key={k}
              className={`grid grid-cols-[150px_1fr] border-t border-line py-[15px] ${i === arr.length - 1 ? 'border-b' : ''}`}
            >
              <span className="kicker self-center">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
        <div className="frame mt-7 bg-sand h-[250px] flex items-end p-5">
          <div className="flex justify-between w-full items-center gap-4">
            <span className="text-sm text-muted italic">Карта · вул. Лесі Українки, 31Г</span>
            <a href="https://maps.google.com" className="text-[11px] uppercase tracking-[0.18em]">Маршрут →</a>
          </div>
        </div>
      </div>

      <ContactFormClient block={block} />
    </div>
  </section>
)
