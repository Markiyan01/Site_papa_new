import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  labels: {
    singular: 'Контактна Форма',
    plural: 'Контактні Форми',
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
      defaultValue: 'Зв\'язатися з нами',
    },
    {
      name: 'description',
      label: 'Опис',
      type: 'textarea',
    },
  ],
}

