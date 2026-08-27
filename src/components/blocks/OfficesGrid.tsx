import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const OfficesGridBlockComponent = async ({ block }: { block: any }) => {
  const payload = await getPayload({ config })
  
  const where: any = {}
  if (block.showOnlyAvailable) {
    where.status = { equals: 'available' }
  }

  const { docs: offices } = await payload.find({
    collection: 'offices',
    where,
    limit: 20,
    sort: 'floor',
  })

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {block.title && (
            <h2 className="text-3xl md:text-4xl font-serif text-graphite mb-4">
              {block.title}
            </h2>
          )}
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Оберіть ідеальний простір для вашого бізнесу в екологічному та сучасному центрі.
          </p>
        </div>

        {offices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Наразі немає відповідних площ.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office: any) => (
              <div key={office.id} className="bg-paper rounded-lg p-6 border border-gray-100 hover:border-rosemary/30 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-rosemary font-medium mb-1 block">
                      {office.layoutType === 'cabinet' ? 'Кабінет' : office.layoutType === 'openspace' ? 'Open Space' : 'Склад'}
                    </span>
                    <h3 className="text-2xl font-serif text-graphite">Офіс {office.officeNumber}</h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-light text-graphite">{office.area} м²</span>
                    <span className="block text-sm text-gray-500">Поверх {office.floor}</span>
                  </div>
                </div>
                
                {office.price && (
                  <div className="mb-6 py-4 border-y border-gray-200">
                    <span className="text-sm text-gray-500 block mb-1">Вартість</span>
                    <span className="text-lg font-medium text-graphite">{office.price}</span>
                  </div>
                )}
                
                <button className="w-full py-3 bg-white border border-rosemary text-rosemary hover:bg-rosemary hover:text-white transition-colors rounded-sm font-medium">
                  Залишити заявку
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

