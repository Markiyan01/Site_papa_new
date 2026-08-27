import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero'
import { RichTextBlock } from '../blocks/RichText'
import { BusinessGridBlock } from '../blocks/BusinessGrid'
import { OfficesGridBlock } from '../blocks/OfficesGrid'
import { FeaturesBlock } from '../blocks/Features'
import { ContactFormBlock } from '../blocks/ContactForm'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        RichTextBlock,
        BusinessGridBlock,
        OfficesGridBlock,
        FeaturesBlock,
        ContactFormBlock
      ],
    },
  ],
}

