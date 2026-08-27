import type { CollectionConfig } from 'payload'

export const Offices: CollectionConfig = {
  slug: 'offices',
  admin: {
    useAsTitle: 'officeNumber',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'officeNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'floor',
      type: 'number',
      required: true,
    },
    {
      name: 'area',
      label: 'Площа (м²)',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      label: 'Ціна',
      type: 'text',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Вільний', value: 'available' },
        { label: 'Орендований', value: 'rented' },
        { label: 'Ремонт', value: 'repair' },
      ],
      defaultValue: 'available',
      required: true,
    },
    {
      name: 'layoutType',
      label: 'Тип планування',
      type: 'select',
      options: [
        { label: 'Кабінет', value: 'cabinet' },
        { label: 'Open space', value: 'openspace' },
        { label: 'Склад', value: 'warehouse' },
      ],
    },
    {
      name: 'tenant',
      label: 'Орендар (привʼязка до бізнесу)',
      type: 'relationship',
      relationTo: 'businesses',
      admin: {
        condition: (data) => data.status === 'rented',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}

