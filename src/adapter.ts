import { PrismaLibSQL } from '@prisma/adapter-libsql'
import type { Env } from './env'

export const adapter = async (env: Env) => {
  return new PrismaLibSQL({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
    intMode: 'bigint',
  })
}
