import type { GlobalConfig } from 'payload'

export const BusinessDirectorySettings: GlobalConfig = {
  slug: 'businessdirectorysettings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'BusinessDirectorySettings',
    }
  ],
}
