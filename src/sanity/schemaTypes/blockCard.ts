import { defineType, defineField } from "sanity";

export const blockCard = defineType({
    name: "blockCard",
    title: "Block Card",
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
            title: "Icon",
            name: "icon",
            type: "image"
        }),
        defineField({
            title: "Body",
            name: "body",
            type: "markdown"
        }),
        defineField({
            title: "Link",
            name: "link",
            type: "array",
            of: [{ type: "reference", to: [{ type: "subMenuItems" }] }]
        })
    ]
});
