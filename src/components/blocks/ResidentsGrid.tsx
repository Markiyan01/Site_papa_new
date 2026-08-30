import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

const FLOORS = [1, 2, 3, 4, 5]

export const ResidentsGridBlockComponent = async ({ block }: { block: any }) => {
  const payload = await getPayload({ config })
  const { docs: businesses } = await payload.find({
    collection: 'businesses',
    limit: block.limit || 100,
    depth: 1,
    sort: 'floor',
  })

  return (
    <section id="residents" className="scroll-mt-[130px] bg-sand px-12 py-[100px]">
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

        {businesses.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-11 pb-6 border-b border-line-soft">
            {FLOORS.map((floor) => (
              <a key={floor} href={`#residents-floor-${floor}`} className="link-underline kicker text-[10px] hover:text-green">
                {floor} поверх
              </a>
            ))}
          </div>
        )}

        {businesses.length === 0 ? (
          <p className="text-muted">Бізнесів ще не додано.</p>
        ) : (
          FLOORS.map((floor) => {
            const onFloor = businesses.filter((b: any) => b.floor === floor)
            return (
              <div key={floor} id={`residents-floor-${floor}`} className="scroll-mt-[130px] mb-14 last:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-[26px] text-green">{floor}</span>
                  <span className="kicker">{floor} поверх</span>
                  <span className="flex-1 h-px bg-line-soft" />
                </div>

                {onFloor.length === 0 ? (
                  <p className="text-sm text-muted italic">Поки немає резидентів на цьому поверсі.</p>
                ) : (
                  <div className="grid grid-cols-3 gap-6">
                    {onFloor.map((b: any) => (
                      <Link
                        key={b.id}
                        href={`/businesses/${b.slug}`}
                        className="card-lift frame bg-paper text-ink px-7 py-[30px] flex flex-col gap-3 min-h-[230px] hover:border-green"
                      >
                        <div className="flex justify-between items-baseline gap-3">
                          <span className="kicker text-green">{b.categories?.[0]?.title || 'Резидент'}</span>
                          <span className="font-display text-xl text-[#c1bba9]">{b.officeNumber}</span>
                        </div>
                        <h3 className="text-[28px] leading-[1.15]">{b.title}</h3>
                        <p className="text-[15px] leading-[1.75] text-muted flex-1">{b.shortDescription}</p>
                        <div className="border-t border-line-soft pt-3 text-xs tracking-[0.1em] text-kicker">
                          {b.workingHours}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
