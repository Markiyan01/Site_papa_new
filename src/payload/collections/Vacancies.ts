import type { CollectionConfig } from 'payload'

export const Vacancies: CollectionConfig = {
  slug: 'vacancies',
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
    }
  ],
}
