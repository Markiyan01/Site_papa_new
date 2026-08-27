import type { Block } from 'payload'

export const BusinessGridBlock: Block = {
  slug: 'businessGrid',
  labels: {
    singular: 'Каталог Бізнесів',
    plural: 'Каталоги Бізнесів',
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок секції',
      type: 'text',
      defaultValue: 'Каталог орендарів',
    },
    {
      name: 'limit',
      label: 'Кількість на сторінку',
      type: 'number',
      defaultValue: 12,
    },
    {
      name: 'showFilters',
      label: 'Показувати фільтри (категорії, поверх)',
      type: 'checkbox',
      defaultValue: true,
    }
  ],
}

