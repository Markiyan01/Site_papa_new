import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export const ResidentsGridBlockComponent = async ({ block }: { block: any }) => {
  const payload = await getPayload({ config })
  const { docs: businesses } = await payload.find({
    collection: 'businesses',
    limit: block.limit || 12,
    depth: 1,
  })

  return (
    <section id="residents" className="bg-sand px-12 py-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-end justify-between gap-10 mb-11">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-display text-[22px] text-green">IV</span>
              <span className="kicker">Резиденти</span>
            </div>
            <h2 className="text-[46px] mt-[22px]">{block.title || 'Компанії центру'}</h2>
          </div>
          {block.note && <span className="text-sm text-muted italic">{block.note}</span>}
        </div>

        {businesses.length === 0 ? (
          <p className="text-muted">Бізнесів ще не додано.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {businesses.map((b: any) => (
              <Link
                key={b.id}
                href={`/businesses/${b.slug}`}
                className="frame bg-paper px-7 py-[30px] flex flex-col gap-3 min-h-[230px] hover:border-green transition-colors"
              >
                <div className="flex justify-between items-baseline gap-3">
                  <span className="kicker text-green">{b.categories?.[0]?.title || 'Резидент'}</span>
                  <span className="font-display text-xl text-[#c1bba9]">{b.officeNumber}</span>
                </div>
                <h3 className="text-[28px] leading-[1.15]">{b.title}</h3>
                <p className="text-[15px] leading-[1.75] text-muted flex-1">{b.shortDescription}</p>
                <div className="border-t border-line-soft pt-3 text-xs tracking-[0.1em] text-kicker flex justify-between">
                  <span>Поверх {b.floor}</span>
                  <span>{b.workingHours}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
