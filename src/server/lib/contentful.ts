import { createClient } from 'contentful'
import { env } from '../../env/server.mjs'

/**
 the use of the ! here is TS specific and tells the editor compiler that I, as the developer, am certain that at runtime
 these environment variables will not be null or undefined. Otherwise, the compiler will throw an error saying that it's possibly undefined
 */

const client = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN
})

const previewClient = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com'
})

const contentful = {
  client({ preview = false } = {}) {
    if (preview) {
      return previewClient
    }

    return client
  }
}

export default contentful
