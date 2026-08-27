import React from 'react'

export const HeroBlockComponent = ({ block }: { block: any }) => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image logic here, assuming URL for now */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${block.backgroundImage?.url || ''})` }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-md">
          {block.heading}
        </h1>
        {block.subheading && (
          <p className="text-xl md:text-2xl text-paper mb-10 font-light tracking-wide">
            {block.subheading}
          </p>
        )}
        {block.ctaText && (
          <a 
            href={block.ctaLink || '#'} 
            className="inline-block px-8 py-4 bg-rosemary hover:bg-rosemary-dark text-white font-medium rounded-sm transition-colors shadow-lg"
          >
            {block.ctaText}
          </a>
        )}
      </div>
    </section>
  )
}

