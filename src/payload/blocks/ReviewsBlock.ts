import type { Block } from 'payload'

export const ReviewsBlock: Block = {
  slug: 'reviews',
  labels: { singular: 'Відгуки', plural: 'Відгуки' },
  fields: [{ name: 'title', type: 'text', defaultValue: 'Відгуки' }],
}
