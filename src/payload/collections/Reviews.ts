import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: { singular: 'Відгук', plural: 'Відгуки' },
  admin: {
    useAsTitle: 'author',
    group: 'Контент',
    description:
      'Відгуки для секції "Відгуки" на сайті. Показуються перші 6; один із featured=true — великий, решта (до 2) — менші картки поруч.',
    defaultColumns: ['author', 'role', 'kind', 'featured'],
  },
  access: { read: () => true },
  fields: [
    { name: 'text', label: 'Текст відгуку', type: 'textarea', required: true },
    { name: 'author', label: 'Автор', type: 'text', required: true },
    { name: 'role', label: 'Компанія / роль', type: 'text' },
    {
      name: 'kind',
      label: 'Тип',
      type: 'select',
      defaultValue: 'tenant',
      options: [
        { label: 'Орендар', value: 'tenant' },
        { label: 'Відвідувач', value: 'visitor' },
      ],
    },
    {
      name: 'featured',
      label: 'Головний відгук (великий)',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
}
