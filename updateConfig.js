import fs from 'fs'

const collections = ['Events', 'Promotions', 'Vacancies', 'Reviews', 'Partners', 'Services', 'FloorPlans']
const globals = ['Navigation', 'Footer', 'AnnouncementBar', 'ContactSettings', 'BusinessDirectorySettings']

let cfg = fs.readFileSync('src/payload.config.ts', 'utf8')

const imports = [
  ...collections.map(c => `import { ${c} } from './collections/${c}'`),
  ...globals.map(g => `import { ${g} } from './globals/${g}'`)
].join('\n')

cfg = cfg.replace("import { Users } from './collections/Users'", imports + "\nimport { Users } from './collections/Users'")

cfg = cfg.replace(
  'collections: [Users, Media, Businesses, BusinessCategories, Offices, Pages, Leads]',
  'collections: [Users, Media, Businesses, BusinessCategories, Offices, Pages, Leads, ' + collections.join(', ') + ']'
)

cfg = cfg.replace(
  'globals: [SiteSettings]',
  'globals: [SiteSettings, ' + globals.join(', ') + ']'
)

fs.writeFileSync('src/payload.config.ts', cfg)

