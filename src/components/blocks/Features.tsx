import React from 'react'

export const FeaturesBlockComponent = ({ block }: { block: any }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {block.title && (
          <h2 className="text-3xl md:text-4xl font-serif text-graphite mb-16 text-center">
            {block.title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {block.features?.map((feature: any, index: number) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center text-rosemary mb-6 shadow-sm border border-gray-100">
                {/* SVG Icon Placeholder */}
                {feature.icon ? (
                  <span className={feature.icon}></span>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-medium text-graphite mb-3">{feature.title}</h3>
              {feature.description && (
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

