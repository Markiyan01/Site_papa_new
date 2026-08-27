import type { CollectionConfig } from 'payload'

export const BusinessCategories: CollectionConfig = {
  slug: 'business-categories',
  admin: {
    useAsTitle: 'title',
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

