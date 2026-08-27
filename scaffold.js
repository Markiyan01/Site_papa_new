import fs from 'fs'
import path from 'path'

const collections = ['Events', 'Promotions', 'Vacancies', 'Reviews', 'Partners', 'Services', 'FloorPlans']
const globals = ['Navigation', 'Footer', 'AnnouncementBar', 'ContactSettings', 'BusinessDirectorySettings']

const collectionDir = path.join(process.cwd(), 'src/payload/collections')
const globalDir = path.join(process.cwd(), 'src/payload/globals')

collections.forEach(name => {
  const code = `import type { CollectionConfig } from 'payload'

export const ${name}: CollectionConfig = {
  slug: '${name.toLowerCase()}',
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
`
  fs.writeFileSync(path.join(collectionDir, `${name}.ts`), code)
})

globals.forEach(name => {
  const code = `import type { GlobalConfig } from 'payload'

export const ${name}: GlobalConfig = {
  slug: '${name.toLowerCase()}',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: '${name}',
    }
  ],
}
`
  fs.writeFileSync(path.join(globalDir, `${name}.ts`), code)
})
