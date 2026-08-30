import type { CollectionConfig } from 'payload'

export const Offices: CollectionConfig = {
  slug: 'offices',
  labels: { singular: 'Офіс', plural: 'Офіси' },
  admin: {
    useAsTitle: 'officeNumber',
    group: 'Каталог',
    description:
      'Приміщення в оренду. Саме ці записи показуються в таблиці "Вільні приміщення" на сайті (блок officesTable з увімкненим "лише вільні" бере тільки status = Вільний).',
    defaultColumns: ['officeNumber', 'floor', 'area', 'status', 'price'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'officeNumber',
      label: 'Номер офісу',
      type: 'text',
      required: true,
    },
    {
      name: 'floor',
      label: 'Поверх',
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

