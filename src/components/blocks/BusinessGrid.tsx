import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export const BusinessGridBlockComponent = async ({ block }: { block: any }) => {
  const payload = await getPayload({ config })
  
  const limit = block.limit || 12
  
  // In a real scenario, we'd handle searchParams for filtering,
  // but for the block layout we just fetch the default list
  const { docs: businesses } = await payload.find({
    collection: 'businesses',
    limit,
    // Add sorting or active status filters here
  })

  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          {block.title && (
            <h2 className="text-3xl md:text-4xl font-serif text-graphite">
              {block.title}
            </h2>
          )}
          {block.showFilters && (
            <div className="hidden md:flex gap-4">
              {/* Filter UI Placeholders */}
              <select className="bg-white border border-gray-200 text-sm rounded-sm px-4 py-2 text-graphite focus:outline-none focus:ring-1 focus:ring-rosemary">
                <option>Усі категорії</option>
                <option>Ресторани</option>
                <option>Офіси</option>
              </select>
            </div>
          )}
        </div>

        {businesses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-200">
            <p className="text-gray-500">Бізнесів ще не додано.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {businesses.map((business: any) => (
              <Link key={business.id} href={`/businesses/${business.slug}`} className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  {business.coverImage ? (
                    <img 
                      src={business.coverImage.url} 
                      alt={business.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {business.logo && (
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full p-1 shadow-sm">
                      <img src={business.logo.url} alt="Logo" className="w-full h-full rounded-full object-contain" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-medium text-graphite mb-2 group-hover:text-rosemary transition-colors">
                    {business.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light line-clamp-2 mb-4">
                    {business.shortDescription || 'Опис відсутній'}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {business.floor && (
                      <span className="inline-flex items-center px-2 py-1 bg-paper text-xs text-gray-600 rounded">
                        Поверх {business.floor}
                      </span>
                    )}
                    {business.officeNumber && (
                      <span className="inline-flex items-center px-2 py-1 bg-paper text-xs text-gray-600 rounded">
                        Офіс {business.officeNumber}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

