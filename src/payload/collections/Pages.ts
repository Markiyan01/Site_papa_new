import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero'
import { AboutBlock } from '../blocks/About'
import { StatsBlock } from '../blocks/Stats'
import { AmenitiesBlock } from '../blocks/Amenities'
import { OfficesTableBlock } from '../blocks/OfficesTable'
import { ResidentsGridBlock } from '../blocks/ResidentsGrid'
import { GalleryBlock } from '../blocks/Gallery'
import { ReviewsBlock } from '../blocks/ReviewsBlock'
import { ContactFormBlock } from '../blocks/ContactForm'
import { RichTextBlock } from '../blocks/RichText'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Сторінка', plural: 'Сторінки' },
  admin: {
    useAsTitle: 'title',
    group: 'Контент',
    description:
      'Сторінки сайту, зібрані з блоків. Головна сторінка має slug "home" — саме її показує "/". Порядок блоків у полі "Блоки сторінки" = порядок секцій на сайті.',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Назва (для адмінки)',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (адреса, напр. "home")',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      label: 'Блоки сторінки',
      type: 'blocks',
      blocks: [
        HeroBlock,
        AboutBlock,
        StatsBlock,
        AmenitiesBlock,
        OfficesTableBlock,
        ResidentsGridBlock,
        GalleryBlock,
        ReviewsBlock,
        ContactFormBlock,
        RichTextBlock,
      ],
    },
  ],
}
