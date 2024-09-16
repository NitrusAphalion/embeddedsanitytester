import { defineType, defineField } from "sanity";

export const quoteBlock = defineType({
    name: "quoteBlock",
    title: "Quote Block",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        }),
        defineField({
            title: "Heading",
            name: "heading",
            type: "string"
        }),
        defineField({
            title: "Image",
            name: "image",
            type: "image"
        }),
        defineField({
            title: "Author",
            name: "author",
            type: "string"
        }),
        defineField({
            title: "Body",
            name: "body",
            type: "markdown"
        })
    ]
});
