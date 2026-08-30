import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Налаштування сайту',
  admin: {
    group: 'Система',
    description: 'Загальні налаштування — поки що назва сайту та favicon. Header/Footer з адресою й телефоном наразі захардкоджені в коді компонентів, не тут.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      label: 'Назва сайту',
      type: 'text',
      required: true,
      defaultValue: 'БЦ Розмарин',
    },
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

