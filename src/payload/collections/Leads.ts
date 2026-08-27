import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
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

