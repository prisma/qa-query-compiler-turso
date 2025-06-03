import 'dotenv/config'
import { defineConfig } from 'prisma/config'

import { adapter } from './src/adapter'
import type { Env } from './src/env'

export default defineConfig<Env>({
  earlyAccess: true,
  schema: './prisma/schema.prisma',
  migrate: {
    adapter,
  }
})
