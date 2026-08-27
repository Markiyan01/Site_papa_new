import type { Block } from 'payload'

export const OfficesGridBlock: Block = {
  slug: 'officesGrid',
  labels: {
    singular: 'Каталог Офісів (Вільні площі)',
    plural: 'Каталоги Офісів',
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок секції',
      type: 'text',
      defaultValue: 'Вільні площі для оренди',
    },
    {
      name: 'showOnlyAvailable',
      label: 'Показувати тільки вільні',
      type: 'checkbox',
      defaultValue: true,
    }
  ],
}

