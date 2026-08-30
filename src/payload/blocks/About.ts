import type { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'about',
  labels: { singular: 'Про центр', plural: 'Про центр' },
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Про центр' },
    { name: 'heading', type: 'text', required: true },
    { name: 'headingItalic', type: 'text' },
    { name: 'lead', label: 'Вступний абзац (з буквицею)', type: 'textarea', required: true },
    { name: 'body', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'caption', type: 'text' },
    {
      name: 'facts',
      type: 'array',
      maxRows: 3,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
  ],
}
