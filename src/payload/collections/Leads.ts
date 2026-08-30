import type { CollectionConfig } from 'payload'
import { Resend } from 'resend'

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: { singular: 'Заявка', plural: 'Заявки' },
  admin: {
    useAsTitle: 'name',
    group: 'Заявки',
    description:
      'Заявки з форми на сайті (блок contactForm → /api/leads). Створювати може будь-хто (публічна форма), переглядати — лише залогінені користувачі.',
    defaultColumns: ['name', 'phone', 'area', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Public can create leads
    read: ({ req: { user } }) => Boolean(user), // Only users can view leads
  },
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'create') {
          try {
            if (!process.env.RESEND_API_KEY) {
              req.payload.logger.warn(`RESEND_API_KEY not set — skipping email for lead ${doc.id}`)
              return
            }

            const areaLabels: Record<string, string> = {
              up_to_30: 'До 30 м²',
              '30_60': '30–60 м²',
              '60_plus': '60+ м²',
            }

            const resend = new Resend(process.env.RESEND_API_KEY)
            await resend.emails.send({
              from: 'Розмарин — заявки <onboarding@resend.dev>',
              to: process.env.LEADS_NOTIFY_EMAIL || 'tsvigunmarkiyan04@gmail.com',
              subject: `Нова заявка з сайту від ${doc.name}`,
              html: `
                <h2>Нова заявка на оренду</h2>
                <p><b>Ім'я:</b> ${doc.name}</p>
                ${doc.phone ? `<p><b>Телефон:</b> ${doc.phone}</p>` : ''}
                ${doc.email ? `<p><b>Email:</b> ${doc.email}</p>` : ''}
                ${doc.area ? `<p><b>Бажана площа:</b> ${areaLabels[doc.area] || doc.area}</p>` : ''}
                ${doc.message ? `<p><b>Коментар:</b> ${doc.message}</p>` : ''}
              `,
            })
            req.payload.logger.info(`Lead notification email sent for lead ${doc.id}`)
          } catch (error) {
            req.payload.logger.error(`Error sending email for lead ${doc.id}: ${error}`)
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      validate: (value: unknown) => {
        if (!value) return 'Вкажіть телефон'
        const normalized = String(value).replace(/[\s\-()]/g, '')
        return /^(\+?380\d{9}|0\d{9})$/.test(normalized) || 'Некоректний номер телефону. Приклад: +380671234567'
      },
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'area',
      label: 'Бажана площа',
      type: 'select',
      options: [
        { label: 'До 30 м²', value: 'up_to_30' },
        { label: '30–60 м²', value: '30_60' },
        { label: '60+ м²', value: '60_plus' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Нова', value: 'new' },
        { label: 'В роботі', value: 'in_progress' },
        { label: 'Відхилена', value: 'rejected' },
        { label: 'Успіх', value: 'success' },
      ],
      defaultValue: 'new',
    },
  ],
}

