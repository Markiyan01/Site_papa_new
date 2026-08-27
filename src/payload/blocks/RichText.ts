import type { Block } from 'payload'

export const RichTextBlock: Block = {
  slug: 'richText',
  labels: {
    singular: 'Текстовий Блок',
    plural: 'Текстові Блоки',
  },
  fields: [
    {
      name: 'content',
      label: 'Контент',
      type: 'richText',
      required: true,
    }
  ],
}

