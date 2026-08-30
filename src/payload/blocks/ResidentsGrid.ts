import type { Block } from 'payload'

export const ResidentsGridBlock: Block = {
  slug: 'residentsGrid',
  labels: { singular: 'Резиденти', plural: 'Резиденти' },
  fields: [
    { name: 'title', type: 'text', defaultValue: 'Компанії центру' },
    { name: 'note', type: 'text' },
    { name: 'limit', type: 'number', defaultValue: 12 },
  ],
}
