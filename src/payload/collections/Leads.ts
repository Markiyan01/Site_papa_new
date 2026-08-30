import type { CollectionConfig } from 'payload'

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
            // Placeholder for Resend integration
            req.payload.logger.info(`Sending email for new lead: ${doc.name} (${doc.email}) via Resend...`)
            
            // Example of Resend integration:
            /*
            const resend = new Resend(process.env.RESEND_API_KEY)
            await resend.emails.send({
              from: 'noreply@rozmaryn.com',
              to: 'sales@rozmaryn.com',
              subject: `Нова заявка з сайту від ${doc.name}`,
              html: `<p>Нова заявка: ${doc.message}</p>`
            })
            */
          } catch (error) {
            req.payload.logger.error(`Error sending email for lead ${doc.id}:`, error)
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

