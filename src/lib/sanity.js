import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'gc58riml',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-01-01',
})