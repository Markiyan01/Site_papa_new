import React from 'react'

export const RichTextBlockComponent = ({ block }: { block: any }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:font-serif prose-a:text-rosemary prose-a:no-underline hover:prose-a:underline">
        {/* Render lexical content or raw HTML if converted */}
        {block.content && (
          <div className="text-gray-700">
            {typeof block.content === 'object' ? (
              <p>Rich Text content requires a Lexical renderer setup. Placeholder.</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: block.content }} />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

