import React from 'react'

export const StatsBlockComponent = ({ block }: { block: any }) => (
  <section id="facts" className="scroll-mt-[130px] px-12 pb-[104px]">
    <div className="max-w-[1240px] mx-auto">
      <div className="dbl" />
      <div className="grid grid-cols-4">
        {(block.stats || []).map((s: any, i: number) => (
          <div key={i} className="py-[52px] px-7 border-r border-line last:border-r-0">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-[70px] leading-none text-green">{s.value}</span>
              <span className="font-display italic text-[22px] text-[#a9a495]">{s.unit}</span>
            </div>
            <div className="kicker mt-4">{s.label}</div>
            <div className="text-sm text-muted mt-2">{s.note}</div>
          </div>
        ))}
      </div>
      <div className="dbl" />
    </div>
  </section>
)
