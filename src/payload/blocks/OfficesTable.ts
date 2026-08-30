import type { Block } from 'payload'

export const OfficesTableBlock: Block = {
  slug: 'officesTable',
  labels: { singular: 'Таблиця офісів', plural: 'Таблиці офісів' },
  fields: [
    { name: 'title', type: 'text', defaultValue: 'Вільні приміщення' },
    { name: 'showOnlyAvailable', type: 'checkbox', defaultValue: true },
  ],
}
