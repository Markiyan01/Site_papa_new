import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: {
    singular: 'Блок Переваг',
    plural: 'Блоки Переваг',
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
    },
    {
      name: 'features',
      label: 'Переваги',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Назва',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Опис',
          type: 'textarea',
        },
        {
          name: 'icon',
          label: 'Іконка (SVG або клас)',
          type: 'text',
        }
      ]
    }
  ],
}

