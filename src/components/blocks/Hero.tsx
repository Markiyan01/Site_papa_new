import React from 'react'

type Fact = { value: string; label: string }

export const HeroBlockComponent = ({ block }: { block: any }) => {
  const facts: Fact[] = block.facts?.length
    ? block.facts
    : [
        { value: '5', label: 'Поверхів' },
        { value: '100', label: 'Офісів' },
        { value: '50', label: 'Паркомісць' },
      ]

  return (
    <section className="px-12 pt-14 relative">
      <div className="max-w-[1240px] mx-auto relative">
        <div className="absolute -left-3.5 top-20 [writing-mode:vertical-rl] rotate-180 text-[11px] uppercase tracking-[0.32em] text-[#a9a495]">
          {block.rail || "Лесі Українки 31Г, Кам'янець-Подільський — від 18 до 120 м²"}
        </div>

        <div className="frame p-[9px] bg-white">
          <div
            className="relative h-[620px] bg-cover bg-[center_42%]"
            style={{ backgroundImage: `url(${block.backgroundImage?.url || ''})` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(35,36,31,0.62)_0%,rgba(35,36,31,0.28)_55%,rgba(35,36,31,0.1)_100%)]" />
            <div className="relative h-full flex flex-col justify-center px-[68px] max-w-[760px]">
              <div className="kicker text-paper/80">{block.kicker || 'Оренда офісів у центрі міста'}</div>
              <h1 className="text-[78px] leading-[1.02] mt-[22px] text-paper">
                {block.heading}
                {block.headingItalic && (
                  <>
                    <br />
                    <span className="italic font-normal">{block.headingItalic}</span>
                  </>
                )}
              </h1>
              <div className="w-24 h-px bg-paper/55 my-7" />
              {block.subheading && (
                <p className="text-[17px] leading-[1.8] text-paper/90 mb-[34px] max-w-[460px]">{block.subheading}</p>
              )}
              <div className="flex gap-3.5 items-center">
                <a
                  href={block.ctaLink || '#lead'}
                  className="btn-lift px-[34px] py-4 bg-paper text-ink text-xs uppercase tracking-[0.2em] hover:bg-green hover:text-paper"
                >
                  {block.ctaText || 'Залишити заявку'}
                </a>
                <a
                  href="#offices"
                  className="btn-lift px-[30px] py-4 border border-paper/50 text-paper text-xs uppercase tracking-[0.2em] hover:bg-paper/10 hover:border-paper hover:text-paper"
                >
                  Вільні офіси
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="frame bg-paper -mt-14 ml-auto w-[min(660px,92%)] px-2 py-[26px] grid grid-cols-3 relative z-[2]">
          {facts.map((f, i) => (
            <div key={i} className="text-center px-[18px] border-r border-line-soft last:border-r-0">
              <div className="font-display text-[40px] leading-none text-green">{f.value}</div>
              <div className="kicker mt-2 text-[10px]">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
