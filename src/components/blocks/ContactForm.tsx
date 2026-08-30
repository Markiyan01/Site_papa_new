import React from 'react'
import { ContactFormClient } from './ContactFormClient'

const DEFAULT_ADDRESS = "м. Кам'янець-Подільський, Хмельницька обл., вул. Лесі Українки, 31Г"

export const ContactFormBlockComponent = ({ block }: { block: any }) => {
  const address = block.mapAddress || DEFAULT_ADDRESS
  const encoded = encodeURIComponent(address)
  const mapSrc = `https://www.google.com/maps?q=${encoded}&output=embed`
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encoded}`

  return (
    <section id="contacts" className="scroll-mt-[130px] px-12 py-[104px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-[72px]">
        <div>
          <div className="flex items-center gap-4">
            <span className="font-display text-[22px] text-green">VI</span>
            <span className="kicker">Контакти</span>
          </div>
          <h2 className="text-[46px] mt-[22px] mb-[30px]">Завітайте до нас</h2>
          <div className="text-base text-ink-soft">
            {[
              ['Адреса', address],
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
          <div className="frame mt-7 overflow-hidden">
            <iframe
              src={mapSrc}
              title="Карта"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[210px] border-0 grayscale-[15%]"
            />
            <div className="flex justify-between items-center gap-4 border-t border-line px-5 py-3">
              <span className="text-sm text-muted italic truncate">Карта · {address}</span>
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="link-underline text-[11px] uppercase tracking-[0.18em] whitespace-nowrap">
                Маршрут →
              </a>
            </div>
          </div>
        </div>

        <ContactFormClient block={block} />
      </div>
    </section>
  )
}
