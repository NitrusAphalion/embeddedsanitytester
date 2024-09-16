import { defineType, defineField } from "sanity";

export const sdkDoc = defineType({
    name: "sdkDoc",
    title: "SDK Document",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "pathName",
            type: "string",
            title: "Path Name"
        }),
        defineField({
            name: "markdown",
            type: "markdown",
            title: "Markdown"
        }),
        defineField({
            name: "sdkDocs",
            type: "array",
            of: [{ type: "reference", to: [{ type: "sdkDoc" }] }],
            title: "SDK Documents"
        })
    ]
});
