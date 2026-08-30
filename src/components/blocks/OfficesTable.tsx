import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

const TH = 'text-left py-3.5 px-3 border-t border-b border-ink font-sans font-medium text-[10px] tracking-[0.22em] uppercase text-muted'
const TD = 'py-5 px-3 border-b border-line-soft'

const LAYOUT: Record<string, string> = {
  cabinet: 'Кабінет',
  openspace: 'Open space',
  warehouse: 'Склад',
}

export const OfficesTableBlockComponent = async ({ block }: { block: any }) => {
  const payload = await getPayload({ config })
  const where: any = {}
  if (block.showOnlyAvailable) where.status = { equals: 'available' }

  const { docs: offices } = await payload.find({ collection: 'offices', where, limit: 20, sort: 'floor' })

  return (
    <section id="offices" className="px-12 py-[104px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-end justify-between gap-10 mb-10">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-display text-[22px] text-green">III</span>
              <span className="kicker">Оренда</span>
            </div>
            <h2 className="text-[46px] mt-[22px]">{block.title || 'Вільні приміщення'}</h2>
          </div>
          <span className="text-sm text-muted italic">
            Перелік оновлено {new Date().toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' })}
          </span>
        </div>

        {offices.length === 0 ? (
          <p className="text-muted py-12">Наразі немає відповідних площ.</p>
        ) : (
          <table className="w-full border-collapse text-base">
            <thead>
              <tr>
                <th className={`${TH} pl-0`}>Офіс</th>
                <th className={TH}>Поверх</th>
                <th className={TH}>Площа</th>
                <th className={TH}>Планування</th>
                <th className={TH}>Ціна / міс</th>
                <th className={`${TH} pr-0`} />
              </tr>
            </thead>
            <tbody>
              {offices.map((o: any) => (
                <tr key={o.id}>
                  <td className={`${TD} pl-0 font-display text-[26px]`}>{o.officeNumber}</td>
                  <td className={TD}>{o.floor}</td>
                  <td className={TD}>{o.area} м²</td>
                  <td className={`${TD} text-muted italic`}>{LAYOUT[o.layoutType] || '—'}</td>
                  <td className={TD}>{o.price || 'За запитом'}</td>
                  <td className={`${TD} pr-0 text-right`}>
                    <a href="#lead" className="text-[11px] uppercase tracking-[0.18em]">Огляд →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}
