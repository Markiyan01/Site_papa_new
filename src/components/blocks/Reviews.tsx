import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const ReviewsBlockComponent = async ({ block }: { block: any }) => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'reviews', limit: 6 })
  if (!docs.length) return null

  const featured = docs.find((r: any) => r.featured) || docs[0]
  const rest = docs.filter((r: any) => r.id !== featured.id).slice(0, 2)

  return (
    <section id="reviews" className="bg-green text-[#eae6dc] px-12 py-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4 mb-11">
          <span className="font-display text-[22px] text-[#eae6dc]/70">V</span>
          <span className="kicker text-[#eae6dc]/70">{block.title || 'Відгуки'}</span>
          <span className="flex-1 h-px bg-[#eae6dc]/25" />
        </div>

        <div className="grid grid-cols-[1.25fr_1fr] gap-16 items-start">
          <div className="border-l border-[#eae6dc]/30 pl-9">
            <div className="font-display text-[72px] leading-[0.5] text-[#eae6dc]/45">&ldquo;</div>
            <p className="font-display text-[38px] leading-[1.35] text-paper mt-[26px] mb-7">{(featured as any).text}</p>
            <div className="text-[15px] tracking-[0.06em] text-[#f3f0e8]">{(featured as any).author}</div>
            <div className="text-[13px] text-[#eae6dc]/70 mt-1">{(featured as any).role}</div>
          </div>

          <div>
            {rest.map((r: any) => (
              <div key={r.id} className="py-[26px] border-t border-[#eae6dc]/25">
                <p className="text-[17px] leading-[1.75] text-[#f3f0e8] mb-4">{r.text}</p>
                <div className="font-display text-[22px] text-paper">{r.author}</div>
                <div className="text-[13px] text-[#eae6dc]/70 mt-0.5">{r.role}</div>
              </div>
            ))}
            <div className="border-t border-[#eae6dc]/25" />
          </div>
        </div>
      </div>
    </section>
  )
}
