import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Медіафайл', plural: 'Медіа' },
  upload: true,
  admin: {
    group: 'Медіа',
    description: 'Фото та зображення. Завантажені сюди файли можна вибрати в полях "Фото" будь-якого блоку (Hero, About, Gallery тощо).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Альтернативний текст (для SEO/доступності)',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      label: 'Підпис',
      type: 'text',
    },
  ],
}

