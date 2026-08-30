import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats',
  labels: { singular: 'Характеристики', plural: 'Характеристики' },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 2,
      maxRows: 4,
      fields: [
        { name: 'value', label: 'Цифра', type: 'text', required: true },
        { name: 'unit', label: 'Одиниця (курсив)', type: 'text' },
        { name: 'label', type: 'text', required: true },
        { name: 'note', type: 'text' },
      ],
    },
  ],
}
