import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
    perspective: ["localhost", "-d"].find(item =>
        process.env.NEXT_PUBLIC_HOSTNAME?.includes(item)
    )
        ? "previewDrafts"
        : "published" // Devel will show drafts > published items
});
