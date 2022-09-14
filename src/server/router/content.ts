import { createRouter } from './context'
import { z } from 'zod'
import contentful from '../lib/contentful'
export const contentRouter = createRouter().query('getAllContent', {
  input: z.object({
    preview: z.boolean(),
    query: z.object({ content_type: z.string() })
  }),
  async resolve({ input }) {
    const { preview, query } = input

    //get gross raw JSON from contentful servers
    const rawData = await contentful.client({ preview }).getEntries(query)
    //remove unused fields and make more usable for clientside
    const data = contentful.client().parseEntries(rawData)

    return data
  }
})
