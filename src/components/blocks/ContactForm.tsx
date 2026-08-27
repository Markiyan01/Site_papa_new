import React from 'react'
import { ContactFormClient } from './ContactFormClient'

export const ContactFormBlockComponent = ({ block }: { block: any }) => {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactFormClient block={block} />
      </div>
    </section>
  )
}

