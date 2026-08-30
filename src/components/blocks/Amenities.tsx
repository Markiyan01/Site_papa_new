import React from 'react'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

export const AmenitiesBlockComponent = ({ block }: { block: any }) => (
  <section className="bg-sand px-12 py-[100px]">
    <div className="max-w-[1240px] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-[72px] items-start">
      <div className="sticky top-[130px]">
        <div className="flex items-center gap-4">
          <span className="font-display text-[22px] text-green">II</span>
          <span className="kicker">{block.kicker || 'Інфраструктура'}</span>
        </div>
        <h2 className="text-[46px] leading-[1.12] mt-6 mb-5">
          {block.heading}
          {block.headingItalic && (
            <>
              <br />
              <span className="italic font-normal">{block.headingItalic}</span>
            </>
          )}
        </h2>
        <p className="text-base leading-[1.85] text-muted">{block.description}</p>
      </div>

      <div>
        {(block.items || []).map((item: any, i: number) => (
          <div key={i} className="grid grid-cols-[64px_1fr] gap-6 py-[26px] border-t border-line items-baseline">
            <span className="font-display text-[26px] text-green">{ROMAN[i]}</span>
            <div>
              <h3 className="text-[28px] mb-2">{item.title}</h3>
              <p className="text-[15px] leading-[1.8] text-muted">{item.text}</p>
            </div>
          </div>
        ))}
        <div className="border-t border-line" />
      </div>
    </div>
  </section>
)
