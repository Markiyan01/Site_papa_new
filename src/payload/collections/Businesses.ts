import type { CollectionConfig } from 'payload'

export const Businesses: CollectionConfig = {
  slug: 'businesses',
  labels: { singular: 'Бізнес', plural: 'Бізнеси' },
  admin: {
    useAsTitle: 'title',
    group: 'Каталог',
    description:
      'Компанії-резиденти центру. Ці картки показуються в блоці "Компанії центру" (residentsGrid) на сайті та на публічній сторінці /businesses/[slug].',
    defaultColumns: ['title', 'floor', 'officeNumber', 'workingHours'],
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.roles?.includes('admin')) return true
      return {
        manager: {
          equals: user.id,
        },
      }
    },
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'manager',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'business-categories',
      hasMany: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'workingHours',
      type: 'text',
    },
    {
      name: 'floor',
      type: 'number',
    },
    {
      name: 'officeNumber',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
  ],
}

