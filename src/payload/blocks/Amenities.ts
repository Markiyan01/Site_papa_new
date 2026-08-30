import type { Block } from 'payload'

export const AmenitiesBlock: Block = {
  slug: 'amenities',
  labels: { singular: 'Інфраструктура', plural: 'Інфраструктура' },
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Інфраструктура' },
    { name: 'heading', type: 'text', required: true },
    { name: 'headingItalic', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}
