import process from 'node:process'

import { PrismaClient } from '../.generated/prisma/client'
import { adapter as createAdapter } from './adapter'
import type { Env } from './env'

async function main() {
  const env = process.env as Env
  const adapter = await createAdapter(env)
  const prisma = new PrismaClient({ adapter })

  // await prisma.user.create({
  //   data: {},
  // })

  const users = await prisma.user.findMany()
  console.dir(users, { depth: null })

  console.log('Done')
}

main()
