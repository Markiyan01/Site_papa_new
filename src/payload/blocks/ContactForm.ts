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
    {
      name: 'mapAddress',
      label: 'Адреса для карти (Адреса на сайті, точка на мапі й маршрут)',
      type: 'text',
      defaultValue: "м. Кам'янець-Подільський, Хмельницька обл., вул. Лесі Українки, 31Г",
    },
  ],
}

