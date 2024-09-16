export const getUrlFromId = (ref: string) => {
    const [_file, id, extension] = ref.split("-");
    return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
};
