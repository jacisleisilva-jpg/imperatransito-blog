import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'gc58riml', // Troque pelo seu ID de 8 dígitos do Sanity
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-06-21',
})