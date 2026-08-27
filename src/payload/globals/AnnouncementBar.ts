import type { GlobalConfig } from 'payload'

export const AnnouncementBar: GlobalConfig = {
  slug: 'announcementbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'AnnouncementBar',
    }
  ],
}
