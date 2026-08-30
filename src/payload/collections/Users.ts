import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Користувач', plural: 'Користувачі' },
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Система',
    description: 'Акаунти для входу в цю адмінку. Роль "Admin" бачить усе; інші ролі — для майбутнього розмежування прав.',
  },
  fields: [
    {
      name: 'name',
      label: "Ім'я",
      type: 'text',
    },
    {
      name: 'roles',
      label: 'Ролі',
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

