import fs from 'fs'
let cfg = fs.readFileSync('src/payload.config.ts', 'utf8')
cfg = cfg.replace(/'\.\/collections\//g, "'./payload/collections/")
cfg = cfg.replace(/'\.\/globals\//g, "'./payload/globals/")
fs.writeFileSync('src/payload.config.ts', cfg)

