import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Content Manager', value: 'content_manager' },
        { label: 'Business Manager', value: 'business_manager' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: ['editor'],
    },
  ],
}

