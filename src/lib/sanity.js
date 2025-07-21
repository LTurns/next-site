// lib/sanity.js

import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "b6e027vh",
    dataset: "production",
    apiVersion: "2025-07-21",
    useCdn: true,
});
