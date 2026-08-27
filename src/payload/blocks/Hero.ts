import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Блок',
    plural: 'Hero Блоки',
  },
  fields: [
    {
      name: 'heading',
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      label: 'Підзаголовок',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      label: 'Фонове зображення',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ctaText',
      label: 'Текст кнопки',
      type: 'text',
    },
    {
      name: 'ctaLink',
      label: 'Посилання кнопки',
      type: 'text',
    },
  ],
}

