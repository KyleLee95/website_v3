// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import { contentRouter } from './content'
import { exampleRouter } from './example'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('content.', contentRouter)

// export type definition of API
export type AppRouter = typeof appRouter
