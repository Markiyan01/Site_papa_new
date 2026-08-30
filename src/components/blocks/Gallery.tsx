import React from 'react'

export const GalleryBlockComponent = ({ block }: { block: any }) => {
  const [first, second] = block.images || []
  return (
    <section className="px-12 py-[104px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[1.35fr_1fr] gap-10 items-end">
        <div>
          <div className="frame p-[9px] bg-white">
            <div className="h-[480px] bg-cover bg-[center_45%]" style={{ backgroundImage: `url(${first?.image?.url || ''})` }} />
          </div>
          {block.caption && <div className="kicker mt-3">{block.caption}</div>}
        </div>
        <div>
          {block.quote && (
            <blockquote className="font-display text-[34px] leading-[1.35] italic text-green mb-7">{block.quote}</blockquote>
          )}
          <div className="frame p-[9px] bg-white">
            <div className="h-[300px] bg-cover bg-[center_25%]" style={{ backgroundImage: `url(${second?.image?.url || ''})` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
