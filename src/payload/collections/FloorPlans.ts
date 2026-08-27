import type { CollectionConfig } from 'payload'

export const FloorPlans: CollectionConfig = {
  slug: 'floorplans',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    }
  ],
}
