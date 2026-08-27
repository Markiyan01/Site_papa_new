import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import React from 'react'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const parsedSlug = slug ? slug.join('/') : 'home'
  
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })
  
  const page = result.docs[0]
  
  if (!page) {
    return notFound()
  }

  return (
    <main className="w-full min-h-screen flex flex-col">
      <BlockRenderer blocks={page.layout as any[]} />
    </main>
  )
}

