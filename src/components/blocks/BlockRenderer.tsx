import React from 'react'
import { HeroBlockComponent } from './Hero'
import { FeaturesBlockComponent } from './Features'
import { BusinessGridBlockComponent } from './BusinessGrid'
import { OfficesGridBlockComponent } from './OfficesGrid'
import { RichTextBlockComponent } from './RichText'
import { ContactFormBlockComponent } from './ContactForm'

const componentMap: Record<string, React.FC<{ block: any }>> = {
  hero: HeroBlockComponent,
  features: FeaturesBlockComponent,
  businessGrid: BusinessGridBlockComponent,
  officesGrid: OfficesGridBlockComponent,
  richText: RichTextBlockComponent,
  contactForm: ContactFormBlockComponent,
  // Other blocks will be added here
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
