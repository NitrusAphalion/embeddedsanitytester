import { defineType, defineField } from "sanity";

export const openApi = defineType({
    name: "openAPISpecificationDocs",
    title: "Open API Specification Docs",
    type: "document",
    options: {
        accept: "application/json",
        singleton: true
    },
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
            name: "file",
            type: "file",
            title: "File"
        })
    ],
    // Ensure this document is only created once
    preview: {
        select: {
            title: "File" // Ensure this matches the field name in the schema
        }
    }
});
