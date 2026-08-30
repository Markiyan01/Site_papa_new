import React from 'react'
import { HeroBlockComponent } from './Hero'
import { AboutBlockComponent } from './About'
import { StatsBlockComponent } from './Stats'
import { AmenitiesBlockComponent } from './Amenities'
import { OfficesTableBlockComponent } from './OfficesTable'
import { ResidentsGridBlockComponent } from './ResidentsGrid'
import { GalleryBlockComponent } from './Gallery'
import { ReviewsBlockComponent } from './Reviews'
import { ContactFormBlockComponent } from './ContactForm'
import { RichTextBlockComponent } from './RichText'

const componentMap: Record<string, React.FC<{ block: any }>> = {
  hero: HeroBlockComponent,
  about: AboutBlockComponent,
  stats: StatsBlockComponent,
  amenities: AmenitiesBlockComponent,
  officesTable: OfficesTableBlockComponent as any,
  residentsGrid: ResidentsGridBlockComponent as any,
  gallery: GalleryBlockComponent,
  reviews: ReviewsBlockComponent as any,
  contactForm: ContactFormBlockComponent,
  richText: RichTextBlockComponent,
}

export const BlockRenderer = ({ blocks }: { blocks: any[] }) => {
  if (!blocks || !Array.isArray(blocks)) return null
  return (
    <>
      {blocks.map((block, index) => {
        const Component = componentMap[block.blockType]
        if (!Component) {
          console.warn(`Block ${block.blockType} not found`)
          return null
        }
        return <Component key={index} block={block} />
      })}
    </>
  )
}
