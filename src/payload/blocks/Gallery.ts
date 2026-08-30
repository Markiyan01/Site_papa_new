import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  labels: { singular: 'Галерея', plural: 'Галереї' },
  fields: [
    { name: 'quote', type: 'textarea' },
    { name: 'caption', type: 'text' },
    {
      name: 'images',
      type: 'array',
      minRows: 2,
      maxRows: 2,
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },
  ],
}
