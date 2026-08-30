import React from 'react'

export const AboutBlockComponent = ({ block }: { block: any }) => (
  <section id="about" className="scroll-mt-[130px] px-12 py-[104px]">
    <div className="max-w-[1240px] mx-auto grid grid-cols-[0.85fr_1.15fr] gap-[72px] items-start">
      <div>
        <div className="frame p-[9px] bg-white">
          <div
            className="h-[520px] bg-cover bg-[center_30%]"
            style={{ backgroundImage: `url(${block.image?.url || ''})` }}
          />
        </div>
        <div className="kicker mt-3 text-right">{block.caption || "Фасад · вул. Лесі Українки, 31Г, Кам'янець-Подільський"}</div>
      </div>

      <div className="pt-3">
        <div className="flex items-center gap-4">
          <span className="font-display text-[22px] text-green">I</span>
          <span className="kicker">{block.kicker || 'Про центр'}</span>
          <span className="flex-1 h-px bg-line" />
        </div>
        <h2 className="text-[52px] leading-[1.1] mt-[26px] mb-7">
          {block.heading}
          {block.headingItalic && (
            <>
              <br />
              <span className="italic font-normal">{block.headingItalic}</span>
            </>
          )}
        </h2>
        <p className="dropcap text-lg leading-[1.9] text-ink-soft mb-5">{block.lead}</p>
        <p className="text-base leading-[1.9] text-muted mb-8">{block.body}</p>

        <div className="grid grid-cols-3 border-t border-b border-line">
          {(block.facts || []).map((f: any, i: number) => (
            <div key={i} className="py-[18px] px-5 first:pl-0 last:pr-0 border-r border-line last:border-r-0">
              <div className="kicker text-[10px]">{f.label}</div>
              <div className="text-[15px] mt-1.5">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
