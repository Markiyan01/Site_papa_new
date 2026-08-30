import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { BusinessCategories } from './payload/collections/BusinessCategories'
import { Businesses } from './payload/collections/Businesses'
import { Leads } from './payload/collections/Leads'
import { Media } from './payload/collections/Media'
import { Offices } from './payload/collections/Offices'
import { Pages } from './payload/collections/Pages'
import { Reviews } from './payload/collections/Reviews'
import { Users } from './payload/collections/Users'
import { SiteSettings } from './payload/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — Розмарин CMS',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Businesses, BusinessCategories, Offices, Pages, Leads, Reviews],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'secret-key-for-local-dev-only-do-not-use-in-prod',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgres://postgres:postgres@127.0.0.1:5432/rozmaryn',
    },
  }),
})
