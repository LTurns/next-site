// lib/sanity.js

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'b6e027vh',
    dataset: 'production',
    apiVersion: '2025-06-29',
    useCdn: true, // Use true for caching on Sanity's edge                 // Set to `false` if you want to fetch the freshest data (not cached)
})
