import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Головний екран', plural: 'Головні екрани' },
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'Оренда офісів у центрі міста' },
    { name: 'heading', label: 'Заголовок (перший рядок)', type: 'text', required: true },
    { name: 'headingItalic', label: 'Заголовок (курсивний рядок)', type: 'text' },
    { name: 'subheading', type: 'textarea' },
    { name: 'ctaText', type: 'text', defaultValue: 'Залишити заявку' },
    { name: 'ctaLink', type: 'text', defaultValue: '#lead' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'rail', label: 'Вертикальний підпис збоку', type: 'text' },
    {
      name: 'facts',
      label: 'Цифри в картці під фото',
      type: 'array',
      maxRows: 3,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
}
