import type { CollectionConfig } from 'payload'

export const BusinessCategories: CollectionConfig = {
  slug: 'business-categories',
  labels: { singular: 'Категорія бізнесу', plural: 'Категорії бізнесів' },
  admin: {
    useAsTitle: 'title',
    group: 'Каталог',
    description: 'Категорії для фільтрації бізнесів (напр. "Медицина", "ІТ", "Освіта"). Прив’язуються до бізнесу в полі "Категорії".',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'icon',
      type: 'text',
    },
  ],
}

