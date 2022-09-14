import { trpc } from '../utils/trpc'

interface Query {
  content_type: string
}
export const useContent = (query: Query) => {
  return trpc.useQuery(['content.getAllContent', { query, preview: false }])
}
